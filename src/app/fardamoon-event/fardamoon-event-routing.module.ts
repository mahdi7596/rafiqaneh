import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardnerPlanetComponent } from './components/gardner-planet/gardner-planet.component';
import { CertificatePlanetComponent } from './components/certificate-planet/certificate-planet.component';
import { HollandPlanetComponent } from './components/holland-planet/holland-planet.component';
import { MbtiPlanetComponent } from './components/mbti-planet/mbti-planet.component';
import { KalamiComponent } from './components/gardner-planet/components/gardner-questions/kalami/kalami.component';
import { ReyaziComponent } from './components/gardner-planet/components/gardner-questions/reyazi/reyazi.component';
import { DidariComponent } from './components/gardner-planet/components/gardner-questions/didari/didari.component';
import { BadaniComponent } from './components/gardner-planet/components/gardner-questions/badani/badani.component';
import { MeyanFardiComponent } from './components/gardner-planet/components/gardner-questions/meyan-fardi/meyan-fardi.component';
import { DaroonFardiComponent } from './components/gardner-planet/components/gardner-questions/daroon-fardi/daroon-fardi.component';
import { MosighiyayeComponent } from './components/gardner-planet/components/gardner-questions/mosighiyaye/mosighiyaye.component';
import { TabeyatGaraComponent } from './components/gardner-planet/components/gardner-questions/tabeyat-gara/tabeyat-gara.component';
import { GardnerFinalResultComponent } from './components/gardner-planet/components/gardner-final-result/gardner-final-result.component';
import { BoroonDaroonGaraComponent } from './components/mbti-planet/components/mbti-questions/boroon-daroon-gara/boroon-daroon-gara.component';
import { EhsasiManteghiComponent } from './components/mbti-planet/components/mbti-questions/ehsasi-manteghi/ehsasi-manteghi.component';
import { ShohodiHessiComponent } from './components/mbti-planet/components/mbti-questions/shohodi-hessi/shohodi-hessi.component';
import { GhezavatiEdrakiComponent } from './components/mbti-planet/components/mbti-questions/ghezavati-edraki/ghezavati-edraki.component';
import { MbtiFinalResultComponent } from './components/mbti-planet/components/mbti-final-result/mbti-final-result.component';
import { HollandFinalResultComponent } from './components/holland-planet/components/holland-final-result/holland-final-result.component';
import { VaghehGaraComponent } from './components/holland-planet/components/holland-questions/vagheh-gara/vagheh-gara.component';
import { JostojoGaraComponent } from './components/holland-planet/components/holland-questions/jostojo-gar/jostojo-gara.component';
import { HonariComponent } from './components/holland-planet/components/holland-questions/honari/honari.component';
import { EjtemayeeComponent } from './components/holland-planet/components/holland-questions/ejtemayee/ejtemayee.component';
import { JasoorComponent } from './components/holland-planet/components/holland-questions/jasoor/jasoor.component';
import { GharardadiComponent } from './components/holland-planet/components/holland-questions/gharardadi/gharardadi.component';
import { SolarSystemComponent } from './components/solar-system/solar-system.component';
import { SpaceComponent } from './components/space/space.component';
import { GardnerMissionsTimelineComponent } from './components/gardner-planet/components/gardner-missions-timeline/gardner-missions-timeline.component';
import { MbtiMissionsTimelineComponent } from './components/mbti-planet/components/mbti-missions-timeline/mbti-missions-timeline.component';
import { HollandMissionsTimelineComponent } from './components/holland-planet/components/holland-missions-timeline/holland-missions-timeline.component';

const routes: Routes = [
  {
    path: 'space',
    component: SpaceComponent,
  },
  {
    path: 'solar-system',
    component: SolarSystemComponent,
  },
  {
    path: 'gardner',
    component: GardnerPlanetComponent,
    children: [
      {
        path: 'gardner-missions',
        component: GardnerMissionsTimelineComponent,
      },
      {
        path: 'kalami',
        component: KalamiComponent,
      },
      {
        path: 'reyazi',
        component: ReyaziComponent,
      },
      {
        path: 'didari',
        component: DidariComponent,
      },
      {
        path: 'badani',
        component: BadaniComponent,
      },
      {
        path: 'meyan-fardi',
        component: MeyanFardiComponent,
      },
      {
        path: 'daroon-fardi',
        component: DaroonFardiComponent,
      },
      {
        path: 'musical',
        component: MosighiyayeComponent,
      },
      {
        path: 'naturalistic',
        component: TabeyatGaraComponent,
      },
      {
        path: 'garnder-final-result',
        component: GardnerFinalResultComponent,
      },
    ],
  },
  {
    path: 'mbti',
    component: MbtiPlanetComponent,
    children: [
      {
        path: 'mbti-missions',
        component: MbtiMissionsTimelineComponent,
      },
      {
        path: 'boroon-daroon-gara',
        component: BoroonDaroonGaraComponent,
      },
      {
        path: 'ehsasi-manteghi',
        component: EhsasiManteghiComponent,
      },
      {
        path: 'Shohodi-hessi',
        component: ShohodiHessiComponent,
      },
      {
        path: 'ghezavati-edraki',
        component: GhezavatiEdrakiComponent,
      },
      {
        path: 'mbti-final-result',
        component: MbtiFinalResultComponent,
      },
    ],
  },
  {
    path: 'holland',
    component: HollandPlanetComponent,
    children: [
      {
        path: 'holland-missions',
        component: HollandMissionsTimelineComponent,
      },
      {
        path: 'vagheh-gara',
        component: VaghehGaraComponent,
      },
      {
        path: 'jostojo-gar',
        component: JostojoGaraComponent,
      },
      {
        path: 'honari',
        component: HonariComponent,
      },
      {
        path: 'ejtemayee',
        component: EjtemayeeComponent,
      },
      {
        path: 'jasoor',
        component: JasoorComponent,
      },
      {
        path: 'gharardadi',
        component: GharardadiComponent,
      },
      {
        path: 'holland-final-result',
        component: HollandFinalResultComponent,
      },
    ],
  },
  {
    path: 'certificate',
    component: CertificatePlanetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FardamoonEventRoutingModule {}
