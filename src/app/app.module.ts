import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FoodComponent } from './components/food/food.component';
import { HttpClientModule } from  '@angular/common/http';
import { NutrientComponent } from './components/nutrient/nutrient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodComponent,
    NutrientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientTestingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
