import { Component } from '@angular/core';
import { dataset } from '../dataset';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent {
  products = dataset.products;

  product_thirty = this.products.filter((product: any) => product.offer <= '30');
  product_fifty = this.products.filter((product: any) => {
    return product.offer > '30' && product.offer <= '50';
  });

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
