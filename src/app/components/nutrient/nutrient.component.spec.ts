import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientComponent } from './nutrient.component';

describe('NutrientComponent', () => {
  let component: NutrientComponent;
  let fixture: ComponentFixture<NutrientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutrientComponent);
    component = fixture.componentInstance;
    component.nutrientData = {
      nutrientId: 3,
      nutrientName: 'test nutrient',
      unitName: 'test unit',
      value: 1
    }
    fixture.detectChanges();
  });

  it('should create', () => {  
    expect(component).toBeTruthy();
  });
});
