import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/rafiqaneh-common/services/authorization.service';

@Component({
  selector: 'app-province-home',
  templateUrl: './province-home.component.html',
  styleUrls: ['./province-home.component.scss']
})
export class ProvinceHomeComponent implements OnInit {

  provinceTilte = '';
  constructor(auth: AuthorizationService) { 
    auth.isAuthenticated$.subscribe(s => {
      if(!s) return;
      this.provinceTilte = auth.getProvinceAdmin()?.name ?? '';
    });
  }

  ngOnInit(): void {
  }

}
