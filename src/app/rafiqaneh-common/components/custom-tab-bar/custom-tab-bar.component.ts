import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-tab-bar',
  templateUrl: './custom-tab-bar.component.html',
  styleUrls: ['./custom-tab-bar.component.scss']
})
export class CustomTabBarComponent {

  @Input() tabsArray: string[] = [];

  @Output() onTabChange = new EventEmitter<number>();

  activatedTab: number = 0;

  setTab(index: number) {
    this.activatedTab = index;
    this.onTabChange.emit(this.activatedTab);
  }

}
