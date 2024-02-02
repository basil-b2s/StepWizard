import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepformComponent } from './stepform.component';
import { StepComponent } from '../step/step.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QueryList } from '@angular/core';

describe('StepformComponent', () => {
  let component: StepformComponent;
  let fixture: ComponentFixture<StepformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StepformComponent,
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create step-form component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the currentstep index',  ()=>{
    expect(component.currentStepIndex).toBe(0);
  });

  it('should activate the next step on clicking nextStep', () =>{
    component.steps = new QueryList<StepComponent>();
    component.steps.reset([
      {active:true} as StepComponent,
      {active:false} as StepComponent,
      {active:false} as StepComponent,
    ])
    component.nextStep()

    expect(component.currentStepIndex).toBe(1)

    expect(component.steps.toArray()[0].active).toBe(false);
    expect(component.steps.toArray()[1].active).toBe(true);


  })
  it('should activate the previous step on clicking previousStep', () =>{
    component.steps = new QueryList<StepComponent>();
    component.steps.reset([
      {active:false} as StepComponent,
      {active:true} as StepComponent,
      {active:false} as StepComponent,
    ])
    component.currentStepIndex = 1;
    component.prevStep()

    expect(component.currentStepIndex).toBe(0)

    expect(component.steps.toArray()[0].active).toBe(true);
    expect(component.steps.toArray()[1].active).toBe(false);


  })

});
