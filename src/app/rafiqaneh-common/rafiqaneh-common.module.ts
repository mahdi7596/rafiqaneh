import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { ConfirmCodeComponent } from './components/confirm-code/confirm-code.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

import { RouterModule } from '@angular/router';

import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DpDatePickerModule } from 'ngx-farsi-datepicker';
import { ButtonComponent } from './components/button/button.component';
import { NeonButtonComponent } from './components/neon-button/neon-button.component';
import { ShinnyButtonComponent } from './components/shinny-button/shinny-button.component';
import { CircleInCircleComponent } from './components/mini-components/circle-in-circle/circle-in-circle.component';
import { TitleComponent } from './components/title/title.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { SimpleDatePickerComponent } from './components/simple-date-picker/simple-date-picker.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';
import { ImageSelectComponent } from './components/form-builder/image-select/image-select.component';
import { MultiStepFormBuilderComponent } from './components/form-builder/multi-step-form-builder/multi-step-form-builder.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { NavItemsComponent } from './components/navbar/nav-items/nav-items.component';
import { MobileMenuComponent } from './components/navbar/nav-items/mobile-menu/mobile-menu.component';
import { CustomCarouselComponent } from './components/custom-carousel/custom-carousel.component';
import { NextDirective } from './directives/next-previous-button-image-slider/next.directive';
import { PrevDirective } from './directives/next-previous-button-image-slider/prev.directive';
import { CustomTabBarComponent } from './components/custom-tab-bar/custom-tab-bar.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    FooterComponent,
    RegisterComponent,
    ConfirmCodeComponent,
    LoginComponent,
    NavbarComponent,
    NavItemsComponent,
    MobileMenuComponent,
    DatePickerComponent,
    ButtonComponent,
    NeonButtonComponent,
    ShinnyButtonComponent,
    CircleInCircleComponent,
    TitleComponent,
    ParagraphComponent,
    SimpleDatePickerComponent,
    FormBuilderComponent,
    ImageDialogComponent,
    ImageSelectComponent,
    MultiStepFormBuilderComponent,
    CustomCarouselComponent,
    NextDirective,
    PrevDirective,
    CustomTabBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatRadioModule,
    MatTooltipModule,
    DpDatePickerModule,
    MatDialogModule,
    MatStepperModule,
    MatSliderModule,
    ColorPickerModule,
    MatBottomSheetModule,
    MatListModule,
  ],
  exports: [
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmCodeComponent,
    NavbarComponent,
    NavItemsComponent,
    MobileMenuComponent,
    ButtonComponent,
    NeonButtonComponent,
    ShinnyButtonComponent,
    TitleComponent,
    ParagraphComponent,
    SimpleDatePickerComponent,
    FormBuilderComponent,
    ImageDialogComponent,
    MatDialogModule,
    MatStepperModule,
    MatSliderModule,
    MultiStepFormBuilderComponent,
    MatBottomSheetModule,
    MatListModule,
    RouterModule,
    CustomCarouselComponent,
    NextDirective,
    PrevDirective,
    CustomTabBarComponent,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    NgChartsModule,
  ],
})
export class RafiqanehCommonModule {}
