import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { IImageSelectOption, IUploadFile } from '../IFormDefinitionDto';

@Component({
  selector: 'image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.scss']
})
export class ImageSelectComponent implements OnInit {

  @Input() options?: IImageSelectOption[];
  @Input() value: string|number|IUploadFile|null = null;
  @Output() valueChange = new EventEmitter<string|null>();

  constructor() { }

  ngOnInit(): void {
  }

  optionClicked(opt: IImageSelectOption) {
    if (this.value === opt.value) {
      this.value = null;
    }
    else {
      this.value = opt.value;
    }
    this.valueChange.emit(this.value);
  }

}
