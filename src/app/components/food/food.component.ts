import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { map } from 'rxjs/operators';
import { FoodData } from '../../models';


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
    ?.pipe(
      map((responseData) => {
        const responseArray = Object.values(responseData);
        this.currentFoodObject.totalHits = responseArray[0];
        this.currentFoodObject.currentPage = responseArray[1];
        this.currentFoodObject.totalPages = responseArray[2];
        this.currentFoodObject.pageList = responseArray[3];
        this.currentFoodObject.foodSearchCriteria = responseArray[4];
        this.currentFoodObject.foods = responseArray[5];
        this.currentFoodObject.aggregations = responseArray[6];
      })
    )
  }
}