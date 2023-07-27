import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from '../site-framework/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  getAllProducts(): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/';
    return this.httpClient.get<Product>(productUrl);
  }

  getCategory(): Observable<category> {
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<category>(categoriesUrl);
  }

  createProduct(productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/';
    return this.httpClient.post<Product>(productUrl, productBody); //return an observable
  }

  viewProduct(productID: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productID;
    return this.httpClient.get<Product>(productUrl); //return an observable
  }

  updateProduct(productID: any, productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productID;
    return this.httpClient.put<Product>(productUrl, productBody); //return an observable
  }

  deleteProduct(productID: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productID;
    return this.httpClient.delete<Product>(productUrl); //return an observable
  }

  searchcategoryProducts(categoryId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products?categoryid=' + categoryId;
    return this.httpClient.get<Product>(productUrl); //return an observable
  }

  searchDateProduct(dateparam: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/date=' + dateparam;
    return this.httpClient.get<Product>(productUrl); //return an observable
  }
}
