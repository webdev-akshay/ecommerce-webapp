import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envirnonment } from '../envirnments/envirnonment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url=envirnonment.apiUrl;
  constructor(private http:HttpClient) { }

  getProducts(query:string):Observable<any>{
    // const searchUrl = query ? `${this.url}/products?category_like=${query}` : `${this.url}/products`;
    // return this.http.get(searchUrl)
    return this.http.get(`${this.url}/products`)
  }
  getCategories(category:string): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/products/${category}`);
  }
}
