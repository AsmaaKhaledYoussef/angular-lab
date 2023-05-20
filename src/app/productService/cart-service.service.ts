import { Injectable } from '@angular/core';
import { Iproduct } from '../shared/Iprouct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:cartItem[]=[]
  constructor() { }
  count():number{
    return this.cart.length
  }
  addToCart(product:Iproduct){
    this.cart.push({product:product,qty:1})
  }
  getAll():cartItem[]{
    return this.cart
  }
  //remove
  //update
  //get total

}
interface cartItem{
  product:Iproduct ;
  qty:number;
}
