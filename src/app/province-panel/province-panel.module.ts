import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceHomeComponent } from './components/province-home/province-home.component';
import { ProvinceUsersComponent } from './components/province-users/province-users.component';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceGuard } from '../rafiqaneh-common/services/province.guard';

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
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RafiqanehCommonModule } from '../rafiqaneh-common/rafiqaneh-common.module';

const routes: Routes = [
  {
    path: '', component: ProvinceHomeComponent, canActivate: [ProvinceGuard],
    children: [
      { path: 'users', component: ProvinceUsersComponent, canActivate: [ProvinceGuard] }      
    ]
  },
];


@NgModule({
  declarations: [
    ProvinceHomeComponent,
    ProvinceUsersComponent
  ],
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
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
     }],
})
export class ProvincePanelModule { }
