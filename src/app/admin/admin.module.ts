import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminGuard } from '../rafiqaneh-common/services/admin.guard';
import { RafiqanehCommonModule } from '../rafiqaneh-common/rafiqaneh-common.module';
import {MatTabsModule} from '@angular/material/tabs';

import { UsersComponent } from './components/users/users.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../rafiqaneh-common/services/AuthInterceptor';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { FardamoonUsersComponent } from './components/fardamoon-users/fardamoon-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { FardamoonAnswersComponent } from './components/fardamoon-answers/fardamoon-answers.component';
import { MatSelectModule } from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { KarmoonUsersComponent } from './components/karmoon-users/karmoon-users.component';
import { KarmoonUserDetailsComponent } from './components/karmoon-user-details/karmoon-user-details.component';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';

const routes: Routes = [
  {
    path: '', component: AdminHomeComponent, canActivate: [AdminGuard],
    children: [
      { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
      { path: 'fardamoon-users', component: FardamoonUsersComponent, canActivate: [AdminGuard] },
      { path: 'karmoon-users', component: KarmoonUsersComponent, canActivate: [AdminGuard] },
      { path: 'karmoon-user-details/:userId', component: KarmoonUserDetailsComponent, canActivate: [AdminGuard] },
      { path: 'fardamoon-answers/:userId', component: FardamoonAnswersComponent, canActivate: [AdminGuard] }
    ]
  },
];


@NgModule({
  declarations: [AdminHomeComponent, UsersComponent, FardamoonUsersComponent, UserDetailsComponent, TicketDetailsComponent, FardamoonAnswersComponent, KarmoonUsersComponent, KarmoonUserDetailsComponent, CustomSidenavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    RafiqanehCommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatBadgeModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
     }],

})
export class AdminModule { }
