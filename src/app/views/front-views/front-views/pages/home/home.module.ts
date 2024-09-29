import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { ProvinceListComponent } from './components/province-list/province-list.component';
import { RafiqanehCommonModule } from 'src/app/rafiqaneh-common/rafiqaneh-common.module';

@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent,
    EventsListComponent,
    ProvinceListComponent,
  ],
  imports: [CommonModule, RafiqanehCommonModule],
})
export class HomeModule {}
