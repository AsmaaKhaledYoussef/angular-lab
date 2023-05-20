import { Component } from '@angular/core';
import { CartService } from '../productService/cart-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  getallprdCart: Array<any> = this.c.getAll()
constructor(public c: CartService){

}

}
