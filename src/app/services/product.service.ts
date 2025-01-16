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

  getProducts():Observable<any>{
    return this.http.get(`${this.url}/products`)
  }
}
