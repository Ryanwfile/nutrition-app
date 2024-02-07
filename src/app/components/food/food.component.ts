import { Component } from '@angular/core';
import { HttpService } from '../../http.service';
import { map } from 'rxjs/operators';
import { FoodData, Food } from '../../models';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {
  name = '';
  queryToSearch = '';
  // foodGroup: foodGroup = foodGroup.UNSELECTED;
  currentFoodObject: FoodData = {
    'aggregations': {},
    'currentPage': -1,
    'foodSearchCriteria': {
      'generalSearchInput': '',
      'numberOfResultsPerPage': -1,
      'pageNumber': -1,
      'pageSize': -1,
      'query': '',
      'requireAllWords': false
    },
    'foods': [],
    'pageList': [],
    'totalHits': -1,    
    'totalPages': -1,    
  };

  constructor(private httpService: HttpService) {}
 
  fetchFood(){
    this.httpService.getFood(this.queryToSearch)
    .pipe(
      map((responseData) => {
        const responseAsArray = Object.values(responseData);
        this.currentFoodObject.totalHits = responseAsArray[0];
        this.currentFoodObject.currentPage = responseAsArray[1];
        this.currentFoodObject.totalPages = responseAsArray[2];
        this.currentFoodObject.pageList = responseAsArray[3];
        this.currentFoodObject.foodSearchCriteria = responseAsArray[4];
        this.currentFoodObject.foods = responseAsArray[5];
        this.currentFoodObject.aggregations = responseAsArray[6];
        // console.log(this.currentFoodObject);
    }))
    .subscribe(data => {
      
    })    
  }
  // setQueryToSearch(query: string) {
  //   this.queryToSearch = query;
  //   // console.log("testing");
  //   this.fetchFood();
  //   // console.log(this.queryToSearch);
  // }

  // ngOnInit(){
  //   this.fetchFood();
  // }

}