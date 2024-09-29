import { Component, OnInit } from '@angular/core';
import { navbarDataItem } from '../nav-item-data';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss']
})
export class NavItemsComponent implements OnInit {
  navItems = navbarDataItem;

  constructor() { }

  ngOnInit(): void {
  }
}
