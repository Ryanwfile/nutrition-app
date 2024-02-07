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
    return this.http.get(this.url + queryString);
  }

  // testGet() {
  //   // let responseArray = [];
  //   // const returnObject = {} as FoodData;
  //   this.http
  //     .get(this.url)
  //     .pipe(
  //       map(responseData  => {
         
  //         for (const key in responseData) {
  //           if(this.responseArray.length > 0 && responseData.hasOwnProperty(key)){
  //             this.responseArray.push({responseData[key]});
  //           }
  //         }
  //         // return responseArray;
  //       })
  //     )
  // }
}

  //https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=Cheddar%20Cheese
  //https://fdc.nal.usda.gov/api-guide.html