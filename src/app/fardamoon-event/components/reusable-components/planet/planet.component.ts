import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  planets: any[] = [
    {
      image:
        'assets/fardamoon/images/usable-components/planet/crescent-moon.png',
      class: 'half-moon',
    },
    {
      image: 'assets/fardamoon/images/usable-components/planet/earth.png',
      class: 'earth',
    },
    {
      image:
        'assets/fardamoon/images/usable-components/planet/orange-planet.png',
      class: 'orange-planet',
    },
    {
      image: 'assets/fardamoon/images/usable-components/planet/pink-planet.png',
      class: 'pink-planet',
    },
    {
      image:
        'assets/fardamoon/images/usable-components/planet/yellow-planet.png',
      class: 'yellow-planet',
    },
    {
      image: 'assets/fardamoon/images/usable-components/planet/red-planet.png',
      class: 'red-planet',
    },
    {
      image: 'assets/fardamoon/images/usable-components/planet/asteroid.png',
      class: 'asteroid1',
    },
    {
      image: 'assets/fardamoon/images/usable-components/planet/asteroid.png',
      class: 'asteroid2',
    },
    {
      image: 'assets/fardamoon/images/usable-components/planet/asteroid.png',
      class: 'asteroid3',
    },
  ];
}
