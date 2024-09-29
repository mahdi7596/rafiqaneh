import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  throwError,
} from 'rxjs';
import { AuthorizationService } from 'src/app/rafiqaneh-common/services/authorization.service';
import { NotificationService } from 'src/app/rafiqaneh-common/services/notification.service';
import { UserService } from 'src/app/rafiqaneh-common/services/user.service';
import { StationAnswer } from '../models/StationAnswer';
import { TicketDto } from '../models/TicketDto';
import { FormBuilderService } from 'src/app/rafiqaneh-common/services/form-builder.service';
import { FormProgressDto } from '../models/FormProgressDto';

@Injectable({
  providedIn: 'root',
})
export class FardamoonService {
  answers: StationAnswer[] = [];
  ticket: TicketDto = {
    avatar: '',
    birthDate: '',
    firstName: '',
    lastName: '',
    ticketNumber: '',
    score: 0,
    completedCount: 0,
    createdAt: '',
    planetProgress: [],
  };
  answersLoaded$ = new BehaviorSubject<StationAnswer[]>(this.answers);
  ticketLoaded$ = new BehaviorSubject<TicketDto>(this.ticket);
  introListenComleteCalled = false;
  voicesListened: string[] = [];
  profileQuestionSubmitted = false;
  profileQuestionSubmitted$ = new BehaviorSubject<boolean>(
    this.profileQuestionSubmitted
  );

  constructor(
    private http: HttpClient,
    private notification: NotificationService,
    private spinner: NgxSpinnerService,
    private auth: AuthorizationService,
    private userService: UserService,
    private formBuilderService: FormBuilderService
  ) {
    this.loadLocalAnswers();

    try {
      let lv = localStorage.getItem('listened_voices');
      if (lv) {
        this.voicesListened = JSON.parse(lv);
      }
      this.userService.getSynData('listened_voices').subscribe((s) => {
        if (s) {
          this.voicesListened = s;
          localStorage.setItem(
            'listened_voices',
            JSON.stringify(this.voicesListened)
          );
        } else if (this.voicesListened) {
          // old users which has listened
          this.userService
            .setSynData('listened_voices', this.voicesListened)
            .subscribe();
        }
      });
    } catch (e) {
      console.error(e);
    }
  }
  subscribeLoadAnswers() {
    this.auth.isAuthenticated$.subscribe((s) => {
      if (!s) return;
      this.loadAnswers();
    });
  }

  registerAnswer(ans: StationAnswer) {
    this.spinner.show();
    return this.http.post('/api/fardamoon/registerAnswer', ans).pipe(
      map((r: any) => {
        this.spinner.hide();
        // let ai = this.answers.findIndex(s => s.station === ans.station && s.question === ans.question);
        // if (ai !== -1) {
        //   this.answers.splice(ai, 1);
        // }
        // this.answers.push(ans);

        this.answers = r.answers;
        this.ticket = r.ticket;
        this.calcCompletedCount(this.ticket);
        localStorage.setItem('answers', JSON.stringify(this.answers));
        this.answersLoaded$.next(this.answers);
        this.ticketLoaded$.next(this.ticket);
        return r;
        // error: (e) => {
        //   this.spinner.hide();
        //   this.notification.showError(e);
        // }
      }),
      catchError((err, caught) => {
        this.spinner.hide();
        this.notification.showError(err);
        return throwError(() => err);
      })
    );
  }

  loadAnswers() {
    if (!this.auth.isAuthenticated() || !this.auth.isProfileSet) {
      return;
    }
    this.getAnswers().subscribe({
      next: (s: any) => {},
      error: (e) => {
        this.notification.showError(e);
      },
    });
  }
  private getAnswers() {
    return this.http.get('/api/fardamoon/getAnswers').pipe(
      map((s: any) => {
        this.answers = s.answers;
        this.ticket = s.ticket;
        this.calcCompletedCount(this.ticket);
        localStorage.setItem('answers', JSON.stringify(this.answers));
        if (s.voices?.guide) {
          localStorage.setItem('introListenComplete', 'true');
        }
        this.answersLoaded$.next(this.answers);
        this.ticketLoaded$.next(this.ticket);
        this.profileQuestionSubmitted = s.profileQuestionSubmitted;
        this.profileQuestionSubmitted$.next(this.profileQuestionSubmitted);
        return s;
      })
    );
  }

  private loadLocalAnswers() {
    let ans = localStorage.getItem('answers');
    if (ans) {
      this.answers = JSON.parse(ans);
      this.answersLoaded$.next(this.answers);
    }
  }

  private calcCompletedCount(ticket: TicketDto) {
    if (!ticket.completedStations) {
      ticket.completedCount = 0;
      return;
    }
    ticket.completedCount = FardamoonService.CalcCompletedStagesCount(
      ticket.planetProgress
    );
  }

  public static CalcCompletedStagesCount(
    planetProgress?: { formName: string; total: number; completed?: boolean }[]
  ) {
    if (!planetProgress) {
      return 0;
    }
    let c = 0;
    if (planetProgress.find((s) => s.formName == 'karmoon2-planet')?.completed)
      c++;
    if (
      planetProgress.find((s) => s.formName == 'adrenaline-planet')?.completed
    )
      c++;
    if (planetProgress.find((s) => s.formName == 'zimoon2-planet')?.completed)
      c++;
    if (planetProgress.find((s) => s.formName == 'hamsaz-planet')?.completed)
      c++;
    return c;
  }

  public updateScores(
    planetProgress?: {
      formName: string;
      total: number;
      scores: string;
      completed?: boolean;
    }[]
  ) {
    if (!planetProgress) return;
    this.ticket.planetProgress = planetProgress;
    this.ticket.completedCount =
      FardamoonService.CalcCompletedStagesCount(planetProgress);
    if (planetProgress.length > 0) {
      this.ticket.score = planetProgress
        .map((s) => +s.scores ?? 0)
        .reduce((a, s) => a + s);
    } else {
      this.ticket.score = 0;
    }
    this.ticketLoaded$.next(this.ticket);
  }

  public static CalcCompletedStagesCountOld(completedStations?: {
    [key: string]: number;
  }) {
    if (!completedStations) {
      return 0;
    }
    let c = 0;
    if (completedStations['job'] === 4) c++;
    if (completedStations['adrenaline'] === 5) c++;
    if (completedStations['family'] === 6) c++;
    if (completedStations['poletical'] === 1) c++;
    if (completedStations['letter'] === 1) c++;
    return c;
  }

  registerUser() {
    return this.http.post('/api/fardamoon/registerUser', {});
  }

  usersCount() {
    return this.http.get('/api/fardamoon/getUsersCount');
  }

  isStationCompleted(station: string): boolean {
    if (!this.ticket.planetProgress) {
      return false;
    }
    switch (station) {
      case 'job':
        return (
          this.ticket.planetProgress.find(
            (s) => s.formName == 'karmoon5-planet'
          )?.completed ?? false
        );
      case 'adrenaline':
        return (
          this.ticket.planetProgress.find(
            (s) => s.formName == 'adrenaline-planet'
          )?.completed ?? false
        );
      case 'family':
        return (
          this.ticket.planetProgress.find((s) => s.formName == 'zimoon2-planet')
            ?.completed ?? false
        );
      case 'poletical':
        return (
          this.ticket.planetProgress.find((s) => s.formName == 'hamsaz-planet')
            ?.completed ?? false
        );
      default:
        return false;
    }
  }

  isStationCompletedOld(station: string): boolean {
    if (!this.ticket.completedStations) {
      return false;
    }
    switch (station) {
      case 'job':
        return this.ticket.completedStations['job'] === 4;
      case 'adrenaline':
        return this.ticket.completedStations['adrenaline'] === 5;
      case 'family':
        return this.ticket.completedStations['family'] === 6;
      case 'poletical':
        return this.ticket.completedStations['poletical'] === 1;
      case 'letter':
        return this.ticket.completedStations['letter'] === 1;
      default:
        return false;
    }
  }

  nextStation() {
    let s = 'job';
    if (this.isStationCompleted(s)) s = 'family';
    if (this.isStationCompleted(s)) s = 'poletical';
    if (this.isStationCompleted(s)) s = 'adrenaline';
    return s;
  }

  allCompleted$(): Observable<boolean> {
    if (!this.ticket.completedStations) {
      return this.getAnswers().pipe(
        map((s: any) => {
          return this.allCompleted();
        })
      );
    }
    return of(this.allCompleted());
  }

  allCompleted(): boolean {
    return (
      this.isStationCompleted('job') &&
      this.isStationCompleted('adrenaline') &&
      this.isStationCompleted('family') &&
      this.isStationCompleted('poletical')
    );
  }

  setIntroListenComplete() {
    if (this.introListenComleteCalled) return; // set flag to prevent multiple calls
    localStorage.setItem('introListenComplete', 'true');
    this.http.post('/api/fardamoon/setGuideListened', {}).subscribe();
    this.introListenComleteCalled = true;
  }

  getIntroListenComplete() {
    return localStorage.getItem('introListenComplete') === 'true';
  }

  addListenedVoice(voice: string) {
    if (this.voicesListened.indexOf(voice) === -1) {
      this.voicesListened.push(voice);
      localStorage.setItem(
        'listened_voices',
        JSON.stringify(this.voicesListened)
      );
      this.userService
        .setSynData('listened_voices', this.voicesListened)
        .subscribe();
    }
  }
  hasListenedVoice(voice: string) {
    return this.voicesListened.indexOf(voice) !== -1;
  }

  getUserScores() {
    this.http.get('/api/fardamoon/getUserScores').subscribe((s: any) => {
      this.updateScores(s);
    });
  }

  formProgressState(formNames: string[]): Observable<FormProgressDto[]> {
    let q = formNames.map((s) => 'formsName[]=' + s).join('&');
    return this.http.get<FormProgressDto[]>('/api/forms/progressState?' + q);
  }

  allFormsCount() {
    return this.http.get<{form_name: string, total: number}[]>('/api/forms/allFormsCount');
  }
}
