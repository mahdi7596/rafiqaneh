import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FardamoonEventRoutingModule } from './fardamoon-event-routing.module';
import { RafiqanehCommonModule } from '../rafiqaneh-common/rafiqaneh-common.module';
import { FardamoonIntroComponent } from './components/fardamoon-intro.component';
import { GardnerPlanetComponent } from './components/gardner-planet/gardner-planet.component';
import { MbtiPlanetComponent } from './components/mbti-planet/mbti-planet.component';
import { HollandPlanetComponent } from './components/holland-planet/holland-planet.component';
import { CertificatePlanetComponent } from './components/certificate-planet/certificate-planet.component';
import { KalamiComponent } from './components/gardner-planet/components/gardner-questions/kalami/kalami.component';
import { ReyaziComponent } from './components/gardner-planet/components/gardner-questions/reyazi/reyazi.component';
import { DidariComponent } from './components/gardner-planet/components/gardner-questions/didari/didari.component';
import { BadaniComponent } from './components/gardner-planet/components/gardner-questions/badani/badani.component';
import { MeyanFardiComponent } from './components/gardner-planet/components/gardner-questions/meyan-fardi/meyan-fardi.component';
import { DaroonFardiComponent } from './components/gardner-planet/components/gardner-questions/daroon-fardi/daroon-fardi.component';
import { MosighiyayeComponent } from './components/gardner-planet/components/gardner-questions/mosighiyaye/mosighiyaye.component';
import { TabeyatGaraComponent } from './components/gardner-planet/components/gardner-questions/tabeyat-gara/tabeyat-gara.component';
import { GardnerFinalResultComponent } from './components/gardner-planet/components/gardner-final-result/gardner-final-result.component';
import { MbtiFinalResultComponent } from './components/mbti-planet/components/mbti-final-result/mbti-final-result.component';
import { BoroonDaroonGaraComponent } from './components/mbti-planet/components/mbti-questions/boroon-daroon-gara/boroon-daroon-gara.component';
import { EhsasiManteghiComponent } from './components/mbti-planet/components/mbti-questions/ehsasi-manteghi/ehsasi-manteghi.component';
import { ShohodiHessiComponent } from './components/mbti-planet/components/mbti-questions/shohodi-hessi/shohodi-hessi.component';
import { GhezavatiEdrakiComponent } from './components/mbti-planet/components/mbti-questions/ghezavati-edraki/ghezavati-edraki.component';
import { HollandFinalResultComponent } from './components/holland-planet/components/holland-final-result/holland-final-result.component';
import { VaghehGaraComponent } from './components/holland-planet/components/holland-questions/vagheh-gara/vagheh-gara.component';
import { JostojoGaraComponent } from './components/holland-planet/components/holland-questions/jostojo-gar/jostojo-gara.component';
import { EjtemayeeComponent } from './components/holland-planet/components/holland-questions/ejtemayee/ejtemayee.component';
import { HonariComponent } from './components/holland-planet/components/holland-questions/honari/honari.component';
import { GharardadiComponent } from './components/holland-planet/components/holland-questions/gharardadi/gharardadi.component';
import { JasoorComponent } from './components/holland-planet/components/holland-questions/jasoor/jasoor.component';
import { WoodenBoardComponent } from './components/reusable-components/wooden-board/wooden-board.component';
import { RocketComponent } from './components/reusable-components/rocket/rocket.component';
import { RepeatedStarsComponent } from './components/reusable-components/repeated-stars/repeated-stars.component';
import { QuestionBoxComponent } from './components/reusable-components/question-box/question-box.component';
import { PlanetComponent } from './components/reusable-components/planet/planet.component';
import { AstronautComponent } from './components/reusable-components/astronaut/astronaut.component';
import { AsteroidStoneComponent } from './components/reusable-components/asteroid-stone/asteroid-stone.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FardamoonService } from './services/fardamoon.service';
import { SolarSystemComponent } from './components/solar-system/solar-system.component';
import { SpaceComponent } from './components/space/space.component';
import { GardnerMissionsTimelineComponent } from './components/gardner-planet/components/gardner-missions-timeline/gardner-missions-timeline.component';
import { CustomTimelineComponent } from './components/reusable-components/custom-timeline/custom-timeline.component';
import { HollandMissionsTimelineComponent } from './components/holland-planet/components/holland-missions-timeline/holland-missions-timeline.component';
import { MbtiMissionsTimelineComponent } from './components/mbti-planet/components/mbti-missions-timeline/mbti-missions-timeline.component';
import { GardnerQuestionsBaseComponent } from './components/gardner-planet/components/gardner-questions/gardner-questions-base/gardner-questions-base.component';
import { HollandQuestionsBaseComponent } from './components/holland-planet/components/holland-questions/holland-questions-base/holland-questions-base.component';
import { MbtiQuestionsBaseComponent } from './components/mbti-planet/components/mbti-questions/mbti-questions-base/mbti-questions-base.component';
import { HollandPercentResultComponent } from './components/holland-planet/components/holland-percent-result/holland-percent-result.component';
import { MbtiPercentResultComponent } from './components/mbti-planet/components/mbti-percent-result/mbti-percent-result.component';
import { GardnerPercentResultComponent } from './components/gardner-planet/components/gardner-percent-result/gardner-percent-result.component';
import { RadarchartComponent } from './components/mbti-planet/components/radarchart/radarchart.component';
import { BarChartComponent } from './components/reusable-components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    FardamoonIntroComponent,
    GardnerPlanetComponent,
    MbtiPlanetComponent,
    HollandPlanetComponent,
    CertificatePlanetComponent,
    KalamiComponent,
    ReyaziComponent,
    DidariComponent,
    BadaniComponent,
    MeyanFardiComponent,
    DaroonFardiComponent,
    MosighiyayeComponent,
    TabeyatGaraComponent,
    GardnerFinalResultComponent,
    MbtiFinalResultComponent,
    BoroonDaroonGaraComponent,
    EhsasiManteghiComponent,
    ShohodiHessiComponent,
    GhezavatiEdrakiComponent,
    HollandFinalResultComponent,
    VaghehGaraComponent,
    JostojoGaraComponent,
    EjtemayeeComponent,
    HonariComponent,
    GharardadiComponent,
    JasoorComponent,
    WoodenBoardComponent,
    RocketComponent,
    RepeatedStarsComponent,
    QuestionBoxComponent,
    PlanetComponent,
    AstronautComponent,
    AsteroidStoneComponent,
    SolarSystemComponent,
    SpaceComponent,
    GardnerMissionsTimelineComponent,
    CustomTimelineComponent,
    HollandMissionsTimelineComponent,
    MbtiMissionsTimelineComponent,
    GardnerQuestionsBaseComponent,
    HollandQuestionsBaseComponent,
    MbtiQuestionsBaseComponent,
    HollandPercentResultComponent,
    MbtiPercentResultComponent,
    GardnerPercentResultComponent,
    RadarchartComponent,
    BarChartComponent,
  ],
  imports: [
    CommonModule,
    FardamoonEventRoutingModule,
    RafiqanehCommonModule,
    QRCodeModule,
  ],
  bootstrap: [FardamoonIntroComponent],
})
export class FardamoonEventModule {
  constructor(private fardamoon: FardamoonService) {
    this.fardamoon.subscribeLoadAnswers();
  }
}
