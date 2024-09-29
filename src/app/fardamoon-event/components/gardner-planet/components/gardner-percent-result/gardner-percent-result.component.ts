import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gardnerPercentResult } from '../gardner-questions/reyazi/reyazi.component';

@Component({
  selector: 'app-gardner-percent-result',
  templateUrl: './gardner-percent-result.component.html',
  styleUrls: ['./gardner-percent-result.component.scss'],
})
export class GardnerPercentResultComponent implements OnInit {
  @Input() percentResult!: gardnerPercentResult;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/fardamoon/gardner/gardner-missions']);
  }
}
