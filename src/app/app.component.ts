import { Component } from '@angular/core';
// import { Form } from '@angular/forms';

//import forms

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //strings need better validation
  title = 'nutrition-app';
  calorieAmount = 0;
  exerciseAmount = 0;
  gender = '';
  currentCalories = 0;
  currentExcercise = 0;
  dailyGoalAmount = 0;
  dailyGoalsComplete = false;
  age = 0;
  setCalorieAmount(amount: number) {
    this.currentCalories = amount;
  }

  setExerciseAmount(amount: number) {
    this.exerciseAmount = amount;
  }

  setGender(gender: string) {
    this.gender = gender;
    console.log(this.gender);
  }

  setAge(age: number) {
    this.age = age;
  }

  setDailyAmount(goalAmount: number){
    this.dailyGoalAmount = goalAmount;
  }
}
