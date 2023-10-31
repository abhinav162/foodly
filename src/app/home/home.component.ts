import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { dataset } from '../dataset';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':increment', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 })),
      ]),
      transition(':decrement', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),

    trigger('slideAnimation', [
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' })),
      ]),
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  products = dataset.products;

  ngOnInit() {
    this.preloadImages(); // for the demo
    this.startSlideShow();
  }

  startSlideShow() {
    setInterval(() => {
      this.onNextClick();
    }, 3000);
  }

  preloadImages() {
    for (const banner of this.banners) {
      new Image().src = banner.bannerImageUrl;
    }
  }

  currentSlide: number = 0;

  banners = [
    {
      bannerName: 'Free Delivery',
      bannerDescription: 'Free delivery on all orders',
      bannerImageUrl: '../../assets/delivery-banner.jpg'
    },
    {
      bannerName: 'Best Quality',
      bannerDescription: 'Best quality food',
      bannerImageUrl: '../../assets/best-food-menu-banner.jpg'
    },
    {
      bannerName: 'Best Offers',
      bannerDescription: 'Best offers on all food items',
      bannerImageUrl: '../../assets/food-offer-banner.jpg'
    }
  ]

  onPreviousClick() {
    this.currentSlide = (this.currentSlide - 1 + this.banners.length) % this.banners.length;
  }

  onNextClick() {
    this.currentSlide = (this.currentSlide + 1) % this.banners.length;
  }


  incQuantity(i: any) {
    const q = document.querySelectorAll(`.quantity`)[i].innerHTML;
    document.querySelectorAll(`.quantity`)[i].innerHTML = `${+q + 1}`;
  }
  decQuantity(i: any) {
    const q = document.querySelectorAll(`.quantity`)[i].innerHTML;
    if (+q > 1) {
      document.querySelectorAll(`.quantity`)[i].innerHTML = `${+q - 1}`;
    }
  }
}
