import { Injectable } from '@angular/core';
import { IFieldValidation, IFormDefinitionDto, IFormField, IUploadFile } from '../components/form-builder/IFormDefinitionDto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, map, catchError } from 'rxjs';
import { UserFormsStatDto } from '../models/UserFormsStatDto';
import { UserFormsValuesDto } from '../models/UserFormsValuesDto';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private http: HttpClient) { }

  toFormGroup(form: IFormDefinitionDto) {
    const group: any = {};

    form.fields.forEach(f => {
      let formControl = new FormControl(f.value || '');
      if (f.validation?.isRequired)
        formControl.addValidators(Validators.required);
      if (f.validation?.minLength !== null && f.validation?.minLength !== undefined) {
        formControl.addValidators(Validators.minLength(f.validation?.minLength));
      }
      if (f.validation?.maxLength !== null && f.validation?.maxLength !== undefined) {
        formControl.addValidators(Validators.maxLength(f.validation?.maxLength));
      }
      if (f.validation?.minValue !== null && f.validation?.minValue !== undefined) {
        formControl.addValidators(Validators.min(f.validation?.minValue));
      }
      if (f.validation?.maxValue !== null && f.validation?.maxValue !== undefined) {
        formControl.addValidators(Validators.max(f.validation?.maxValue));
      }
      group[f.fieldName] = formControl;
    });
    return new FormGroup(group);
  }

  validate(form: IFormDefinitionDto) {
    console.log('validate form: ', form);
    let errors: string[] = [];
    for (let field of form.fields) {
      if (!field.validation) continue;
      errors = errors.concat(this.validateField(field, field.validation));
    }
    if (form.formValidations) {
      if (form.formValidations.orFieldValidations) {
        let orResult = false;
        for (let fv of form.formValidations.orFieldValidations) {
          let field = form.fields.find(s => s.fieldName == fv.fieldName);
          if (field) {
            let res = this.validateField(field, fv.validation);
            if (res.length == 0) {
              orResult = true;
              break;
            }
          }
        }
        if (!orResult) {
          errors.push(form.formValidations.orFieldValidationsMessage ?? 'یکی از فیلدها صحیح نیست');
        }
      }
    }
    return {
      succeed: errors.length == 0,
      errors: errors
    };
  }

  validateField(field: IFormField, validations: IFieldValidation) {
    let errors: string[] = [];
    if (!validations) return errors;
    if (validations.isRequired && (field.value === null || field.value === '') && field.inputType != 'file')
      errors.push(`فیلد ${field.fieldTitle} الزامی است`);
    if (validations.isRequired && (field.value === null || (!(<IUploadFile>field.value).newFile && !(<IUploadFile>field.value).uploadedFile)) && field.inputType == 'file')
      errors.push(`فیلد ${field.fieldTitle} الزامی است`);

    if (validations.minLength && typeof field.value === 'string' && field.value && field.value?.length < validations.minLength)
      errors.push(`فیلد ${field.fieldTitle} باید حداقل ${validations.minLength} حرف باشد`);
    if (validations.maxLength && typeof field.value === 'string' && field.value && field.value?.length > validations.maxLength)
      errors.push(`فیلد ${field.fieldTitle} باید حداکثر ${validations.maxLength} حرف باشد`);
    return errors;
  }

  submit(api: string, form: IFormDefinitionDto) {
    //return of({});
    let body = new FormData();
    let data: any = {};
    //form.fields.forEach(s => data[s.fieldName] = s.value);
    body.append('formName', form.formName ?? '');
    let i = 0;
    form.fields.forEach(s => {
      if (s.value === null) return;

      let key = `fields[${i}][value]`;
      let hasValue = false;
      if (typeof (s.value) === 'string') {
        body.append(key, s.value);
        hasValue = true;
      }
      else if (typeof (s.value) === 'number') {
        body.append(key, s.value.toString());
        hasValue = true;
      }
      else if (s.value?.newFile) {
        body.append(key, s.value.newFile, s.value.newFile.name);
        hasValue = true;
      }
      if (hasValue) {
        body.append(`fields[${i}][field]`, s.fieldName);
        i++;
      }
    });
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post(api, body, { headers: headers });
  }

  getFormValues<T>(formName: string) {
    return this.http.get<T>('api/forms/valuesByName?formName=' + formName); //.pipe(map((s) => s), catchError((e) => e));
  }

  getFormsValues(formName: string[]) {
    let q = formName.map(s => `formName[]=${s}`).join('&');
    return this.http.get<UserFormsValuesDto[]>('api/forms/valuesByNames?' + q);
  }

  /**
   *  check that all field of the form has not null value
   */
  allFormFieldsHasValue(form :IFormDefinitionDto) {
    let nullValueIndex = form.fields.findIndex(s => s.inputType == 'file' ? (<IUploadFile>s.value).uploadedFile == null : s.value == null);
    return nullValueIndex == -1;
  }

  getUserFormsStats(formName: string[]) {
    let q = formName.map(s => `formName[]=${s}`).join('&');
    return this.http.get<UserFormsStatDto[]>('api/forms/userFormsStats?' + q);
  }

  getHolldandProgress(formStats: UserFormsStatDto[]) {
    
  }
}

