import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IFormDefinitionDto, IFormField, IGeneralTag, ITextTag, IUploadFile } from './IFormDefinitionDto';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  @Output() fieldChanged = new EventEmitter<any>();
  private _formDefinition!: IFormDefinitionDto;
  @Input() set formDefinition(f: IFormDefinitionDto) {
    this._formDefinition = f;
    this.form = this.formBuilderService.toFormGroup(this.formDefinition);
  }
  @Input() readonly = false;
  get formDefinition() {
    return this._formDefinition;
  }
  form!: FormGroup;
  selectedFilesUrl: any = {};

  constructor(private formBuilderService: FormBuilderService) { }

  ngOnInit(): void {
    //this.formDefinition = sampleFormData;
  }

  getFormField(fieldName: string) { return this.form.controls[fieldName]; }

  onFileChange(field: IFormField, event: any) {
    console.log('file selected', event.target.files);
    let elem = event.target as HTMLInputElement;    
    if (elem.files && elem.files.length > 0) {
      let file = elem.files[0];
      if (!field.value) {
        field.value = {
          uploadedFile: null,
          newFile: file
        };
      } else {
        (<IUploadFile>field.value).newFile = file;
      }
      const reader = new FileReader();
      reader.onload = () => this.selectedFilesUrl[field.fieldName] = reader.result;
      reader.readAsDataURL(file);
    } else {
      if (field.value) {
        (<IUploadFile>field.value).newFile = null;
      } else {
        field.value = null;
      }
    }
    this.fieldChanged.emit(field);
  }

  formatSliderLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  colorPickerChange(field: IFormField, value: any) {
    //console.log('color changed', value);
    field.value = value;
    this.fieldChanged.emit(field);
  }

  asGeneralTag(t: ITextTag) : IGeneralTag|null {
    if (typeof(t) === 'string') return null;
    return t;
  }

  valueChanged(field: IFormField, value: any) {
    if (this.readonly) return;
    field.value = value;
    this.fieldChanged.emit(field);
  }
}
