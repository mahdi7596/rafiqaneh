import { Component, OnInit } from '@angular/core';

export type MenuItems = {
  icon: string;
  lable: string;
  route : string;
}

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.scss']
})
export class CustomSidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuItems = ([
    {
      icon:"assets/fardamoon-event/user.png",
      lable:'کاربران',
      route: "users"
    },
    {
      icon:'assets/fardamoon-event/briefcase.png',
      lable:'کارمون',
      route:'karmoon-users'
    },
    {
      icon:'assets/fardamoon-event/rocket-lunch.png',
      lable:'فردامون 1403',
      route:'fardamoon-users'
    },
  ])
}
function signal<T>(arg0: {}[]) {
  throw new Error('Function not implemented.');
}

