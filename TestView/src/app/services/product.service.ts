import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl:string = environment.ApiBaseUrl; 
  productsController = 'v1/products'; 
  
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productUrl}${this.productsController}`);
  }
}