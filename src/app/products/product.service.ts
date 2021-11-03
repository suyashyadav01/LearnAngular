import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IProduct } from "./product";
import {tap, catchError} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService{

  private productUrl: string = "api/products/product-list.json";
  constructor(private http: HttpClient){
    console.log("Inside Product Service");
  }

    getProducts(): Observable<IProduct[]>{
      return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('All', JSON.stringify(data))),
        catchError(this.handleError)
      );
          }
      
      handleError(err: HttpErrorResponse){

        let errorMessage = '';
        if(err.error instanceof ErrorEvent)
        {
          errorMessage = `An error occured: ${err.error.message}`;
        }
        else{
          errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`;
      
        }
        return throwError(errorMessage);

      }
}