import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector:'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
ngOnInit(): void {
    this.listFilter = 'cart';
}
pageTitle:string = 'Product List';
imageWidth = 50;
imageMargin = 2;
showImage : boolean = false;
filteredProduct: IProduct[] = [];
private _listFilter: string = '';
get listFilter() : string{
    return this._listFilter;
}
set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProduct = this.performFilter(value);

}
products: IProduct[] = [{
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2021",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "assets/images/garden_cart.png"
  },
  {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2021",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "assets/images/hammer.png"
  }];

toggleImage() : void{
    this.showImage = !this.showImage;
}

performFilter(value: string): IProduct[]{
    var filterBy = value.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
}
}