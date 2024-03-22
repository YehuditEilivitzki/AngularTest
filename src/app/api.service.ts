import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url='/assets/angular_Response.json';
  constructor(private http: HttpClient) { }
  
  getData(): Observable<any> {
   
    return this.http.get<any>(this.url);

  }

  updateItem(item:Item){

  }
}
