import { Component, Input, OnInit } from '@angular/core';

import { ICarouselDto } from "./ICarouselDto";


@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
})
export class CustomCarouselComponent {
  @Input() carouselItems: ICarouselDto[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 1000;

  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if (this.autoSlide) { this.autoSlideImages(); }
  }

  // sets index of image on dot / indicator click
  selectedImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.carouselItems.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.carouselItems.length - 1) {
      this.selectedIndex = 0
    } else {
      this.selectedIndex++
    }
  }

  // change slide every 3 seconds
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

}
