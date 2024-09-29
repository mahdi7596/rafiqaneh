import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IranProvinces } from 'src/app/rafiqaneh-common/models/provinces';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PersianHelper } from '../../services/PersianHelper';
import { NotificationService } from '../../services/notification.service';
import { AuthorizationService } from '../../services/authorization.service';
import { UserService } from '../../services/user.service';
import { environment } from 'src/environments/environment';
import { IDateModel } from '../simple-date-picker/IDateModel';
import { sampleFormData } from '../form-builder/IFormDefinitionDto';
import { IranCities } from '../../models/cities';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  provinces: { name: string; code: number | null }[] = [];
  errors: string[] = [];
  avatar = 'assets/icons/user.png';
  isProfileSetBefore = false;
  cities: { name: string, code: number, province: number }[] = [];

  registrationForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    mobileNumber: [
      '',
      [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    ],
    idCard: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
    ticketNumber: ['', []],
    birthDate: ['', [Validators.required]],
    province: [null, [Validators.required]],
    city: [null, [Validators.required]],
    issuancePlace: ['', []],
    fatherName: ['', []],
    identityNumber: ['', []],
    gender: ['female', []]
  });

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar,
    private router: Router,
    private notification: NotificationService,
    private auth: AuthorizationService,
    private userService: UserService
  ) {
    this.provinces = IranProvinces;

    userService.userInfo$.subscribe({
      next: (r: any) => {
        this.isProfileSetBefore = this.auth.isProfileSet;
        if (r) {
          this.registrationForm.patchValue({
            ...r,
            idCard: r.nationalCode,
            gender: r.gender ?? 'female',
          });
          this.avatar = userService.avatar;
        } else {
          this.registrationForm.reset();
        }
        this.provinceChanged(false);
      },
      error: (e) => {
        notification.showError(e);
      },
    });

  }

  ngOnInit(): void {
    this.mobileNumber?.patchValue(localStorage.getItem('mobile_number'));
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get mobileNumber() {
    return this.registrationForm.get('mobileNumber');
  }
  get idCard() {
    return this.registrationForm.get('idCard');
  }
  get ticketNumber() {
    return this.registrationForm.get('ticketNumber');
  }
  get birthDate() {
    return this.registrationForm.get('birthDate');
  }
  get province() {
    return this.registrationForm.get('province');
  }
  get city() {
    return this.registrationForm.get('city');
  }
  get issuancePlace() {
    return this.registrationForm.get('issuancePlace');
  }

  get gender() {
    return this.registrationForm.get('gender');
  }

  get fatherName() {
    return this.registrationForm.get('fatherName');
  }

  get identityNumber() {
    return this.registrationForm.get('identityNumber');
  }

  submit() {
    let value = this.registrationForm.value;
    console.log('submit clicked', value);
    this.registrationForm.markAllAsTouched();

    if (!value.province || value.province == 'null') {
      this.notification.showError('فیلد استان الزامی است');
      return;
    }
    if (value.birthDate == null || value.birthDate == '') {
      this.notification.showError('فیلد تاریخ تولد الزامی است');
      return;
    }
    // if (this.registrationForm.invalid) {
    //   this.snackBar.open('خطا در فرم اطلاعات وجود دارد', undefined, {
    //     duration: 2000,
    //     direction: 'rtl',
    //   });
    //   return;
    // }

    this.spinner.show();
    this.errors = [];
    this.userService.setProfile({
      nationalCode: value.idCard,
      ...value
    }).subscribe({
      next: (s) => {
        // console.log(s);
        this.spinner.hide();
        if (this.isProfileSetBefore) {
          this.notification.showMessage('اطلاعات با موفقیت به روز شد', 'info');
          this.router.navigate(['/']);
        } else {
          this.notification.showMessage('ثبت نام با موفقیت انجام شد', 'info');
          this.router.navigate(['/fardamoon']);
        }
      },
      error: (err) => {
        this.spinner.hide();
        this.notification.showError(err);
      },
    });
  }

  avatarChanged(ev: any) {
    console.log(ev.target.files);
    if (ev.target.files?.length > 0) {
      this.spinner.show('uploadProfile');
      this.userService.setAvatar(ev.target.files[0]).subscribe({
        next: (r: any) => {
          console.log(r);
          this.spinner.hide('uploadProfile');
          this.avatar = this.userService.avatar;
        },
        error: (e) => {
          this.spinner.hide('uploadProfile');
          this.notification.showError(e);
        },
      });
    }
  }

  birthDateChanged1(value: any) {
    this.birthDate?.setValue(value);
  }

  birthDateChanged(d: IDateModel) {
    if (d.year != null && d.month != null && d.day != null) {
      this.birthDate?.setValue(`${d.year}/${d.month}/${d.day}`);
    }
    else {
      this.birthDate?.setValue('');
    }
  }

  provinceChanged(resetCity: boolean = true) {
    if (resetCity)
      this.registrationForm.patchValue({ city: null });
    this.cities = IranCities.filter(s => s.province === this.province?.value);
  }
}
