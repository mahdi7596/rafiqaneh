import { Component, OnInit } from '@angular/core';
import { navbarDataItem } from '../../nav-item-data';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  hamburgerMenu: boolean = false;
  navItems = navbarDataItem;

  constructor() { }

  ngOnInit(): void {
  }

}
