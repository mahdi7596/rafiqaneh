import { Component, Input, OnInit } from '@angular/core';
import {
  IFormDefinitionDto,
  IMultiStepFormDefinition,
} from 'src/app/rafiqaneh-common/components/form-builder/IFormDefinitionDto';
import { FormBuilderService } from 'src/app/rafiqaneh-common/services/form-builder.service';
import { gardnerPercentResult } from '../reyazi/reyazi.component';
import { IStepCompletedEvent } from 'src/app/rafiqaneh-common/components/form-builder/multi-step-form-builder/multi-step-form-builder.component';

@Component({
  selector: 'app-gardner-questions-base',
  templateUrl: './gardner-questions-base.component.html',
  styleUrls: ['./gardner-questions-base.component.scss'],
})
export class GardnerQuestionsBaseComponent implements OnInit {
  @Input() questionsForm?: IMultiStepFormDefinition;
  @Input() formAnswerCompleted = false;
  @Input() percentResult: gardnerPercentResult = {
    userPercent: 0,
    resultExplanation: '',
  };
  constructor(private formService: FormBuilderService) {}

  ngOnInit(): void {}

  formValuesLoaded(form: IFormDefinitionDto) {
    // console.log('form loaded: ', form);
    this.formAnswerCompleted = this.formService.allFormFieldsHasValue(form);
    if (this.formAnswerCompleted) {
      this.calculateGardnerResult(form);
    }
  }

  calculateGardnerResult(form: IFormDefinitionDto) {
    let totalScore = 0;
    let score = 0;
    for (let field of form.fields) {
      totalScore += 7;
      if (field.value != null) {
        score += +field.value;
      }
    }
    this.percentResult.userPercent = Math.round(score / totalScore * 100);    
  }

  stepsCompleted(s: IStepCompletedEvent) {
    // console.log('step done:', s);
    this.formValuesLoaded(s.step.form);
  }
}
