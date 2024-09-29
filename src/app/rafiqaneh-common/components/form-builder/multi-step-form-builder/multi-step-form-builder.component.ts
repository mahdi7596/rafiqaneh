import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFormDefinitionDto, IFormField, IFormStepDto, IMultiStepFormDefinition } from '../IFormDefinitionDto';
import { NotificationService } from 'src/app/rafiqaneh-common/services/notification.service';
import { FormBuilderService } from 'src/app/rafiqaneh-common/services/form-builder.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { IUploadFile } from '../IFormDefinitionDto';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

export interface IStepCompletedEvent {
  step: IFormStepDto,
  result: any;
}

@Component({
  selector: 'multi-step-form-builder',
  templateUrl: './multi-step-form-builder.component.html',
  styleUrls: ['./multi-step-form-builder.component.scss']
})
export class MultiStepFormBuilderComponent implements OnInit {

  @Input() multiStepForm?: IMultiStepFormDefinition;
  @Output() stepsCompleted = new EventEmitter<IStepCompletedEvent>();
  @Output() stepChanged = new EventEmitter<any>();
  @Output() fieldChanged = new EventEmitter<any>();
  @Output() formValuesLoaded = new EventEmitter<any>();
  @Input() readonly = false;
  @Input() getFormValueApi?: string;

  get currentStep() { return this.multiStepForm?.currentStep ?? 0 }
  set currentStep(v: number) { if (!this.multiStepForm) return; this.multiStepForm.currentStep = v; }
  error = '';

  constructor(private notifications: NotificationService,
    private formBuilderService: FormBuilderService,
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.multiStepForm);
    this.activatedRoute.queryParams.subscribe(s => {
      console.log('query', s);
      let step = +s['step'];
      if (isNaN(step))
        step = 1;
      if (!this.multiStepForm) return;
      if (step >= 1 && step <= this.multiStepForm.steps.length) {
        this.currentStep = step - 1;
      }
      this.loadForm();
    });
    //this.loadForm();
  }

  loadForm() {
    if (!this.multiStepForm) return;
    let step = this.multiStepForm.steps[this.currentStep];
    this.spinner.show();
    this.http.get(this.getFormValueApi ? this.getFormValueApi : ('api/forms/byName?formName=' + step.form.formName)).subscribe({
      next: (form: any) => {
        this.spinner.hide();
        step.form.fields.forEach(f => {
          let field = form.find((s: any) => s.fieldName == f.fieldName);
          if (field) {
            if (f.inputType === 'file')
              (<IUploadFile>f.value).uploadedFile = environment.apiUrl + '/' + field.value;
            else
              f.value = field.value;
          }
        });
        this.formValuesLoaded.emit(step.form);
      },
      error: () => {
        this.spinner.hide();
      }
    });
  }

  nextStep() {
    if (!this.validateStep()) return;
    this.submitStep((s: any) => {
      if (!this.multiStepForm) return;
      if (this.currentStep == this.multiStepForm.steps.length - 1) {
        let step = this.multiStepForm.steps[this.currentStep];
        console.log('register form', step);
        this.stepsCompleted.emit({step: step, result: s});
        if (this.multiStepForm.returnUrl) {
          this.router.navigateByUrl(this.multiStepForm.returnUrl);
        }
        return; // do register
      }
      this.currentStep++;
      this.router.navigate([], {
        queryParams: {
          step: this.currentStep + 1
        }
      });
    });
  }
  prevStep() {
    if (!this.multiStepForm) return;
    if (!this.validateStep()) return;
    if (this.currentStep == 0) {
      return; // do register
    }
    this.submitStep((s: any) => {
      if (!this.multiStepForm) return;
      this.currentStep--;
      this.router.navigate([], {
        queryParams: {
          step: this.currentStep + 1
        }
      });
    });
  }

  validateStep(): boolean {
    if (this.readonly) return true;
    if (!this.multiStepForm) return true;
    let step = this.multiStepForm.steps[this.currentStep];
    let res = this.formBuilderService.validate(step.form);
    if (!res.succeed) {
      this.notifications.showError(res.errors.join(' '));
    }
    return res.succeed;
  }

  submitStep(done: any) {
    
    if (!this.multiStepForm) return;
    if (!this.multiStepForm.submitApi) {
      done(null);
      this.stepChanged.emit(null);
      return;
    }

    this.spinner.show();
    let step = this.multiStepForm.steps[this.currentStep];
    console.log(this.multiStepForm.submitApi)
    this.formBuilderService.submit(this.multiStepForm.submitApi, step.form).subscribe({
      next: (result: any) => {
        this.spinner.hide();
        if (result && result.files) {
          for (let field of step.form.fields) {
            if (field.inputType !== 'file') continue;
            let fileRes = result.files.find((s: any) => s.fieldName == field.fieldName);
            if (fileRes) {
              (<IUploadFile>field.value).uploadedFile = environment.apiUrl + '/' + fileRes.value;
              (<IUploadFile>field.value).newFile = null;
            }
          }
        }
        if (done) done(result);
        this.stepChanged.emit(result);
      },
      error: (e) => {
        this.spinner.hide();
        let message = e.error?.message ?? 'خطا در اتصال به سرور رخ داده است'; 
        this.notifications.showError(message);
      }
    }
    );
  }

  formFieldChanged(form: IFormStepDto, field: IFormField) {
    this.fieldChanged.emit({step: form, field: field});
  }
}
