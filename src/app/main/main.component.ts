import { Component } from '@angular/core';
import { Iproduct } from '../shared/Iprouct';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  selectedCatId: number=0;
  userName = "sama";
  cartCount = 0;
  getUpdates(c: number){
this.cartCount = c
  }
  Categories:Array<any> =[
    {
      id: 0,
      name: "All",
      desciption: "This is description"
    },
    {
      id: 1,
      name: "Laptops",
      desciption: "This is description"
    },
    {
      id: 2,
      name: "Tablets",
      desciption: "This is description"
    },
    {
      id: 3,
      name: "Mobiles",
      desciption: "This is description"
    },
    {
      id: 4,
      name: "Accessories",
      desciption: "This is description"
    }
  ]
  }


