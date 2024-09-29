import { Component, HostListener, Input, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthorizationService } from 'src/app/rafiqaneh-common/services/authorization.service';
import { UserInfo, UserService } from 'src/app/rafiqaneh-common/services/user.service';
import { environment } from 'src/environments/environment';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {  

  constructor(private router: Router,
    private auth: AuthorizationService,
    private userService: UserService) { 
   

   
  }

  ngOnInit(): void {
  }

 

  get avatar() {
    return this.userService.avatar;
  }

  


  
}
