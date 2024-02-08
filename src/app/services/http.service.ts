import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import {map} from 'rxjs/operators';
// import { FoodData } from './food/food.component';
import { Observable } from 'rxjs';
@Injectable({
providedIn:  'root'
})

export class HttpService {
  responseArray = [];
  private url = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=';
  // private url = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=Cheddar%20Cheese';
   options = {
    headers: Headers,

  }
  constructor(private http: HttpClient) { }

  getFood(queryString: string) {
    if(queryString !== '' && queryString !== undefined && queryString !== null){
      return this.http.get(this.url + queryString);
    }
    //need to capture error and put error message here
    else return;    
  }
}

  //https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=Cheddar%20Cheese
  //https://fdc.nal.usda.gov/api-guide.html