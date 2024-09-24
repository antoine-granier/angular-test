import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories:any[] = [];

  constructor(private http: HttpClient, router:Router) { }

  getCategories() {
   return this.http.get('http://localhost:3000/categories')
  }

  getBySearch(search:string){
   return this.http.get('http://localhost:3000/categories?name_like='+search.toLowerCase())
  }

 

}
