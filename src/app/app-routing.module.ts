import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmCodeComponent } from './rafiqaneh-common/components/confirm-code/confirm-code.component';
import { LoginComponent } from './rafiqaneh-common/components/login/login.component';
import { RegisterComponent } from './rafiqaneh-common/components/register/register.component';
import { AdminGuard } from './rafiqaneh-common/services/admin.guard';
import { AuthenticationGuard } from './rafiqaneh-common/services/authentication.guard';
import { ReloginGuard } from './rafiqaneh-common/services/relogin.guard';
import { ProvinceGuard } from './rafiqaneh-common/services/province.guard';
import { FrontViewsComponent } from './views/front-views/front-views/front-views.component';
import { FardamoonIntroComponent } from './fardamoon-event/components/fardamoon-intro.component';

const routes: Routes = [
  {
    path: '',
    component: FrontViewsComponent,
    loadChildren: () =>
      import('./views/front-views/front-views.module').then(
        (m) => m.FrontViewsModule
      ),
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [ReloginGuard] },
  {
    path: 'confirm',
    component: ConfirmCodeComponent,
    canActivate: [ReloginGuard],
  },
  {
    path: 'fardamoon',
    loadChildren: () =>
      import('./fardamoon-event/fardamoon-event.module').then(
        (s) => s.FardamoonEventModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'admin-area',
    loadChildren: () =>
      import('./admin/admin.module').then((s) => s.AdminModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'province-panel',
    loadChildren: () =>
      import('./province-panel/province-panel.module').then(
        (s) => s.ProvincePanelModule
      ),
    canActivate: [ProvinceGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
