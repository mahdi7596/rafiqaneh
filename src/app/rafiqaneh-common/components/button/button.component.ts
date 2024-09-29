import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <a [href]="hrefLink" [routerLink]="routerLink">
      <button
        (click)="onClick()"
        [type]="buttonType"
        [disabled]="disabledStatus"
        [ngClass]="[
          demoClass ? 'myClass1' : '',
          icon ? 'inline-flex items-center gap-x-1.5' : '',
          buttonClass
        ]"
      >
        {{ title }}
        <img *ngIf="icon" [ngClass]="iconClass" [src]="icon" [alt]="alt" />
      </button>
    </a>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title?: string = '';
  @Input() buttonClass = '';
  @Input() demoClass?: boolean = false;
  @Input() buttonType?: string = 'button';

  @Input() hrefLink?: string = '';
  @Input() routerLink?: string = '';

  @Input() disabledStatus: boolean = false;

  @Input() icon?: string;
  @Input() iconClass = 'w-4';
  @Input() alt?: string = '';

  @Output() public clickButton = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.clickButton.emit();
  }
}
