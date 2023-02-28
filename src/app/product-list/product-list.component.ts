import { Product } from './../models/product.models';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataRetrieverService } from '../services/data-retriever.service';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  products: Product[] = [];

  constructor(private dataService: DataRetrieverService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products$ = this.dataService.getProducts().pipe(
      tap((products) => console.log(products)),
      map((products) => {
        return products.map((product) => {
          return { ...product, available: product.inStock };
        });
      })
    );
  }

  /* 
  1. Use interface to define the type of Product object that we expect to receive from the API.
  2. Avoid using any type for the user variable, and instead, use the User interface to make the code more type-safe.
  3. Use the async pipe in the template to handle the subscription and unsubscription of the observable.
  4. Use map() array method instead of using forEach() since map() method creates a new array with the results of calling a function on every element in the original array, while forEach doesn't create a new array
  4. Use the $ sign in the variable name to indicate that it is an Observable.
  5.Use the pipe() method to apply operators to the observable instead of performing work in subscribe().
  6.Use the catchError operator to handle errors in case the API call fails, in the service or component level depending on requirements.. i.e do we need to show an error message or log to the backend etc.. 

  */
}
