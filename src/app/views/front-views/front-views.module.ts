import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontViewsRoutingModule } from './front-views-routing.module';
import { FrontViewsComponent } from './front-views/front-views.component';
import { RafiqanehCommonModule } from 'src/app/rafiqaneh-common/rafiqaneh-common.module';

@NgModule({
  declarations: [FrontViewsComponent],
  imports: [CommonModule, FrontViewsRoutingModule, RafiqanehCommonModule],
})
export class FrontViewsModule {}
