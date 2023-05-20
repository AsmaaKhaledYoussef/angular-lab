import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductSrvice} from '../productService/product-srvice.service';
import { Iproduct} from '../shared/Iprouct';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  product: Iproduct | null = null;

  constructor( private route: ActivatedRoute,private prd : ProductSrvice) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    // this.product = this.prd.getProductById(this.productId);
  }
}
