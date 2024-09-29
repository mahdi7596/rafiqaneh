import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  changeText !: boolean;
  changeText1 !: boolean;
  changeText2!: boolean;
  changeText3 !: boolean;
  changeText4 !: boolean;


  icons: any[] = [
    {
      icon: 'assets/fardamoon-event/footer/facebook.png',
      activeIcon: 'assets/fardamoon-event/footer/instagram-active.png',
      link: 'https://translate.google.com/?hl=fa',
      // changeText:false  
    },

    {
      icon: 'assets/fardamoon-event/footer/instagram.png',
      link: 'https://translate.google.com/?hl=fa',
      activeIcon: 'assets/fardamoon-event/footer/instagram-active.png',
      // changeText:false
    },
    {
      icon: 'assets/fardamoon-event/footer/mail.png',
      link: 'https://translate.google.com/?hl=fa',
      activeIcon: 'assets/fardamoon-event/footer/instagram-active.png',
      // changeText:false
    },
    {
      icon: 'assets/fardamoon-event/footer/twitter.png',
      link: 'https://translate.google.com/?hl=fa',
      activeIcon: 'assets/fardamoon-event/footer/instagram-active.png',
      // changeText:false
    },
    {
      icon: 'assets/fardamoon-event/footer/youtube.png',
      link: 'https://translate.google.com/?hl=fa',
      activeIcon: 'assets/fardamoon-event/footer/instagram-active.png',
      // changeText:false
    },

  ];
  ops: any[] = [
    {
      title: 'About us',
      link: 'https://translate.google.com/?hl=fa'
    },
    {
      title: 'Services',
      link: 'https://translate.google.com/?hl=fa'
    },
    {
      title: 'Our Blog',
      link: 'https://translate.google.com/?hl=fa'
    },
    {
      title: 'Contact',
      link: 'https://translate.google.com/?hl=fa'
    }
  ]
  ops1: any[] = [
    {
      title: 'Terms',
      link: 'https://translate.google.com/?hl=fa'
    },
    {
      title: 'Privacy',
      link: 'https://translate.google.com/?hl=fa'
    },
    {
      title: 'Cookies',
      link: 'https://translate.google.com/?hl=fa'
    },
    {
      title: 'License',
      link: 'https://translate.google.com/?hl=fa'
    }
  ]

  constructor() {
    this.changeText = false;
    this.changeText1 = false;
    this.changeText2 = false;
    this.changeText3 = false;
    this.changeText4 = false;
  }

  ngOnInit(): void {
  }

}
