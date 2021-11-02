import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    constructor(private productService: ProductService){

    }
ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProduct = this.products;
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
products: IProduct[] = [];

toggleImage() : void{
    this.showImage = !this.showImage;
}

performFilter(value: string): IProduct[]{
    var filterBy = value.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
}

onRatingClick(message: string): void{
    this.pageTitle = "Product List:" + message;
}
}