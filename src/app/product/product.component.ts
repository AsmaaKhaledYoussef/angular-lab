import { Component , Input , OnInit , OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {ProductSrvice} from '../productService/product-srvice.service'
import { CartService } from '../productService/cart-service.service';
import { Iproduct} from '../shared/Iprouct'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit , OnChanges ,OnDestroy{
  count=0
  @Input() recivedCatID: number=0
  @Output() countNumber: EventEmitter<number>
  constructor( public prdSrv : ProductSrvice , private prdCart : CartService){
    this.countNumber = new EventEmitter<number>()
  }
  // addToCart(){
  //   this.count++;
  //   this.countNumber.emit(this.count)
  // }
  decreaseQuntity(){
    if(this.count>0){
      this.count--;
      this.countNumber.emit(this.count)
  }
}


filteredList:Array<Iproduct>=[]
ngOnInit() {
this.filterbyCatID(0)
// this.filterdList = this.productList //to show all product
this.filteredList = this.prdSrv.getAll()
}
ngOnChanges() {
  this.filterbyCatID(this.recivedCatID)

}
ngOnDestroy(){

}
filterbyCatID(id: number) {
  // this.filteredList = this.prdSrv.getByCategoryID(id)
}
add(prd:Iproduct){
  // this.count  ++
  this.prdCart.addToCart(prd)
  this.countNumber.emit(this.count)
  console.log("on Product component"+this.prdCart.getAll())
  this.prdSrv.decrease(1,prd.id)
  //send updated value
}
// deleteCart(){
//   this.prdCart.deleteCart()
// }
deleteprd(p:Iproduct){
  this.prdSrv.delete(p);
}
}

