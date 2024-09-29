import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asteroid-stone',
  templateUrl: './asteroid-stone.component.html',
  styleUrls: ['./asteroid-stone.component.scss'],
})
export class AsteroidStoneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  stones: any[] = [
    {
      image: 'assets/fardamoon/images/usable-components/stones/asteroid.png',
    },
    {
      image: 'assets/fardamoon/images/usable-components/stones/rock.png',
    },
    {
      image: 'assets/fardamoon/images/usable-components/stones/asteroid2.png',
    },
    {
      image: 'assets/fardamoon/images/usable-components/stones/asteroid2.png',
    },
    {
      image: 'assets/fardamoon/images/usable-components/stones/asteroid.png',
    },
    {
      image: 'assets/fardamoon/images/usable-components/stones/rock.png',
    },
    {
      image: 'assets/fardamoon/images/usable-components/stones/asteroid3.png',
    },
    {
      image: 'assets/fardamoon/images/usable-components/stones/asteroid3.png',
    },
  ];
}
