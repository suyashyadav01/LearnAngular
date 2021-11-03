import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{
    
pageTitle:string = 'Product List';
imageWidth = 50;
imageMargin = 2;
showImage : boolean = false;
filteredProduct: IProduct[] = [];
private _listFilter: string = '';
errorMessage: string = '';
sub: Subscription;

constructor(private productService: ProductService){

}
ngOnDestroy(): void {
   this.sub.unsubscribe();
}
ngOnInit(): void {
console.log("Inside ngOnInit");
this.sub = this.productService.getProducts().subscribe({
    next: products => {
        this.products = products;
        this.filteredProduct = this.products;
    },
    error: err => this.errorMessage = err
});

this.listFilter = 'cart';
}

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