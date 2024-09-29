import { Component, Input, OnInit } from '@angular/core';
import {
  IFormDefinitionDto,
  IMultiStepFormDefinition,
} from 'src/app/rafiqaneh-common/components/form-builder/IFormDefinitionDto';
import { FormBuilderService } from 'src/app/rafiqaneh-common/services/form-builder.service';
import { hollandPercentResult } from '../vagheh-gara/vagheh-gara.component';
import { IStepCompletedEvent } from 'src/app/rafiqaneh-common/components/form-builder/multi-step-form-builder/multi-step-form-builder.component';

@Component({
  selector: 'app-holland-questions-base',
  templateUrl: './holland-questions-base.component.html',
  styleUrls: ['./holland-questions-base.component.scss'],
})
export class HollandQuestionsBaseComponent implements OnInit {
  @Input() questionsForm?: IMultiStepFormDefinition;
  @Input() formAnswerCompleted = false;
  @Input() percentResult: hollandPercentResult = {
    resultExplanation: '',
    userPercent: 0,
    resultSuggestion: []
  };

  constructor(private formService: FormBuilderService) { }

  ngOnInit(): void { }

  formValuesLoaded(form: IFormDefinitionDto) {
    // console.log('form loaded: ', form);
    this.formAnswerCompleted = this.formService.allFormFieldsHasValue(form);
    if (this.formAnswerCompleted) {
      this.calculateHolandResult(form);
    }
  }

  calculateHolandResult(form: IFormDefinitionDto) {
    let totalScore = 0;
    let score = 0;
    for (let field of form.fields) {
      totalScore += 5;
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
