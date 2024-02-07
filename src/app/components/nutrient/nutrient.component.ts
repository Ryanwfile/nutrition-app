import { Component, Input } from '@angular/core';
import { Nutrient } from 'src/app/models';

@Component({
  selector: 'app-nutrient',
  templateUrl: './nutrient.component.html',
  styleUrls: ['./nutrient.component.scss']
})
export class NutrientComponent {
 @Input() nutrientData: Nutrient;

 ngOnInit(){
  // console.log(this.nutrientData);
 }
}
