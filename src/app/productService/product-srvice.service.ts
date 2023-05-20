import { Injectable } from '@angular/core';
import { Iproduct} from '../shared/Iprouct'
@Injectable({
  providedIn: 'root'
})
export class ProductSrvice {
  productList: Array<Iproduct>= [
    {
      id: 1,
      name: "Lenvo thinpad X230",
      price: 100000,
      quantity: 10,
      categoryID: 1,
      imgURL: "",
      description: "The primary product description begins with, “loungewear you’ll live in,” which appeals to the target audience’s emotions. Then it shares practical details about the item’s composition. The description ends with, “mix and match to make cute + comfy sets!,” which is a subtle way of cross-selling more productsThe secondary description provides more practical information, such as details, fit, content, and garment care."
  },
  {
      id: 2,
      name: "Dell",
      price: 2002020,
      quantity: 20,
      categoryID: 1,
      imgURL: "https://picsum.photos/200",
      description: "The primary product description begins with, “loungewear you’ll live in,” which appeals to the target audience’s emotions. Then it shares practical details about the item’s composition. The description ends with, “mix and match to make cute + comfy sets!,” which is a subtle way of cross-selling more productsThe secondary description provides more practical information, such as details, fit, content, and garment care."
  },
  {
      id: 3,
      name: "Lenovo Tab",
      price: 100888,
      quantity: 10,
      categoryID: 2,
      imgURL: "https://picsum.photos/200",
      description: "The primary product description begins with, “loungewear you’ll live in,” which appeals to the target audience’s emotions. Then it shares practical details about the item’s composition. The description ends with, “mix and match to make cute + comfy sets!,” which is a subtle way of cross-selling more productsThe secondary description provides more practical information, such as details, fit, content, and garment care."
  },
  {
      id: 4,
      name: "Samsung Tab",
      price: 1000000,
      quantity: 10,
      categoryID: 2,
      imgURL: "https://picsum.photos/200",
      description: "The primary product description begins with, “loungewear you’ll live in,” which appeals to the target audience’s emotions. Then it shares practical details about the item’s composition. The description ends with, “mix and match to make cute + comfy sets!,” which is a subtle way of cross-selling more productsThe secondary description provides more practical information, such as details, fit, content, and garment care."
  },
  {
      id: 5,
      name: "Samsung note 10",
      price: 100777,
      quantity: 10,
      categoryID: 3,
      imgURL: "https://picsum.photos/200",
      description: "The primary product description begins with, “loungewear you’ll live in,” which appeals to the target audience’s emotions. Then it shares practical details about the item’s composition. The description ends with, “mix and match to make cute + comfy sets!,” which is a subtle way of cross-selling more productsThe secondary description provides more practical information, such as details, fit, content, and garment care."
  },
  {
      id: 6,
      name: "Samsung S10",
      price: 100,
      quantity: 10,
      categoryID: 3,
      imgURL: "https://picsum.photos/200",
      description: "The primary product description begins with, “loungewear you’ll live in,” which appeals to the target audience’s emotions. Then it shares practical details about the item’s composition. The description ends with, “mix and match to make cute + comfy sets!,” which is a subtle way of cross-selling more productsThe secondary description provides more practical information, such as details, fit, content, and garment care."
  },
  {
      id: 7,
      name: "tochiba Utlra",
      price: 60000,
      quantity: 14,
      imgURL: "https://fakeimg.pl/200x100",
      categoryID: 4,
      description: "The primary product description begins with, “loungewear you’ll live in,” which appeals to the target audience’s emotions. Then it shares practical details about the item’s composition. The description ends with, “mix and match to make cute + comfy sets!,” which is a subtle way of cross-selling more productsThe secondary description provides more practical information, such as details, fit, content, and garment care."
  },
  {
      id: 8,
      name: "Apple Utlra",
      price: 7800060,
      quantity: 6,
      imgURL: "https://fakeimg.pl/200x100",
      categoryID: 4,
      description: "The primary product description begins with, “loungewear you’ll live in,” which appeals to the target audience’s emotions. Then it shares practical details about the item’s composition. The description ends with, “mix and match to make cute + comfy sets!,” which is a subtle way of cross-selling more productsThe secondary description provides more practical information, such as details, fit, content, and garment care."
  },
  {
      id: 9,
      name: "test Utlra",
      price: 7800060,
      quantity: 3,
      imgURL: "https://fakeimg.pl/200x100",
      categoryID: 4,
      description: "The primary product description begins with, “loungewear you’ll live in,” which appeals to the target audience’s emotions. Then it shares practical details about the item’s composition. The description ends with, “mix and match to make cute + comfy sets!,” which is a subtle way of cross-selling more productsThe secondary description provides more practical information, such as details, fit, content, and garment care."
  },
  {
      id: 10,
      name: "jhgfjxz",
      imgURL: "https://picsum.photos/200",
      quantity: 33,
      price: 44444444,
      categoryID: 1,
      description: "The primary product description begins with, “loungewear you’ll live in,” which appeals to the target audience’s emotions. Then it shares practical details about the item’s composition. The description ends with, “mix and match to make cute + comfy sets!,” which is a subtle way of cross-selling more productsThe secondary description provides more practical information, such as details, fit, content, and garment care."
  },
  {
      name: "fsdjhfgsdjhkgfsh",
      price: 7800060,
      quantity: 3,
      imgURL: "https://fakeimg.pl/200x100",
      categoryID: 4,
      id: 11,
      description: "The primary product description begins with, “loungewear you’ll live in,” which appeals to the target audience’s emotions. Then it shares practical details about the item’s composition. The description ends with, “mix and match to make cute + comfy sets!,” which is a subtle way of cross-selling more productsThe secondary description provides more practical information, such as details, fit, content, and garment care."
  }

  ]
  getProductById(id: number) {
    return this.productList.find(p => p.id === id);
  }
  getAll():Iproduct[]{
    return this.productList;
  }
  // getByCategoryID(id:number):Iproduct[]{
  //   return this.productList.filter(prd=>prd.categoryID ==id);
  // }
  constructor() { }
  decrease(quantity:number , id: number)
{
  this.productList.forEach(item =>{
    if(item.id == id){
      item.quantity -= quantity;

    }
    if(item.quantity == 0){

    }
  })
}
delete(item:Iproduct){
    this.productList.splice(this.productList.indexOf(item),1);
}
// info(item: Iproduct){
//   this.productList.forEach(item =>{
//     if(item.id){
//       return item;

//     }
//   })
// }
}
