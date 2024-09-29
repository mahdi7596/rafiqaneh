import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mbtiPercentResult } from '../mbti-questions/boroon-daroon-gara/boroon-daroon-gara.component';

@Component({
  selector: 'app-mbti-percent-result',
  templateUrl: './mbti-percent-result.component.html',
  styleUrls: ['./mbti-percent-result.component.scss'],
})
export class MbtiPercentResultComponent implements OnInit {
  @Input() percentResult!: mbtiPercentResult;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/fardamoon/mbti/mbti-missions']);
  }
}
