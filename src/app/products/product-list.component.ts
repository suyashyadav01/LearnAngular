import { Component } from "@angular/core";

@Component({
    selector:'pm-products',
    templateUrl: './product-list.component.html',
})
export class ProductListComponent{
pageTitle:string = 'Product List';
imageWidth = 50;
imageMargin = 2;
showImage : boolean = false;
listFilter: string = "cart";
products: any[] = [{
    "productId":2,
    "productName": "Garden Cart",
    "productCode":"GDN",
    "releaseDate": "March 18, 2021",
    "description": "15 gallon capacity",
    "price": 32.29,
    "starRating":4.2,
    "imageUrl":"assets/images/hammer.png"

}];

toggleImage() : void{
    this.showImage = !this.showImage;
}
}