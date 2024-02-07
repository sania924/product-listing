import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/products');
  }
}
