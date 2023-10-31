import { Component } from '@angular/core';
import { dataset } from '../dataset';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {

  cart = dataset.cart.cartItems;

  total = 0;
  subtotal = 0;
  discount = 10

  constructor() {
    this.cart.forEach((item) => {
      this.total += item.price * item.quantity;
    });

    this.subtotal = this.total - (this.total * this.discount / 100);
  }

  deleteFromCart(id: number) {
    this.cart = this.cart.filter((item) => item.id !== id);
  }
}
