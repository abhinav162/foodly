import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

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

  ngOnInit() {
    this.preloadImages(); // for the demo
    // this.startSlideShow();
  }

  startSlideShow() {
    setInterval(() => {
      this.onNextClick();
    }, 2000);
  }

  preloadImages() {
    for (const banner of this.banners) {
      new Image().src = banner.bannerImageUrl;
    }
  }

  products = [
    {
      id: 1,
      name: 'Pizza',
      price: 5.99,
      description: 'Tasty',
      imageUrl: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
    },
    {
      id: 2,
      name: 'Burger',
      price: 3.99,
      description: 'Juicy',
      imageUrl: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
    },
    {
      id: 3,
      name: 'Tea',
      price: 1.99,
      description: 'Informative',
      imageUrl: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
    },
    {
      id: 4,
      name: 'Egg',
      price: 0.99,
      description: 'Eggy',
      imageUrl: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
    },
    {
      id: 5,
      name: 'Bread',
      price: 2.99,
      description: 'Bready',
      imageUrl: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
    }
  ]

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

}
