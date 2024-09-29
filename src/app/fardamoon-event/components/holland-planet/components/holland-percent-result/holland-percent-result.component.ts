import { Component, Input, OnInit } from '@angular/core';
import { hollandPercentResult } from '../holland-questions/vagheh-gara/vagheh-gara.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holland-percent-result',
  templateUrl: './holland-percent-result.component.html',
  styleUrls: ['./holland-percent-result.component.scss'],
})
export class HollandPercentResultComponent implements OnInit {
  @Input() percentResult!: hollandPercentResult;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/fardamoon/holland/holland-missions']);
  }
}
