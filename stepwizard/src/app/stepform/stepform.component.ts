

import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { StepComponent } from '../step/step.component';


@Component({
  selector: 'app-stepform',
  templateUrl: './stepform.component.html',
  styleUrls: ['./stepform.component.css']
})
export class StepformComponent implements AfterContentInit {
  @ContentChildren(StepComponent) steps: QueryList<StepComponent> = new QueryList<StepComponent>();
  
  currentStepIndex: number = 0;

  ngAfterContentInit() {

    this.steps.toArray()[this.currentStepIndex].active = true;
    
  }

  nextStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.steps.toArray()[this.currentStepIndex].active = false;
      this.currentStepIndex++;
      
      this.steps.toArray()[this.currentStepIndex].active = true;
    }
  }

  prevStep() {
    if (this.currentStepIndex > 0) {
      this.steps.toArray()[this.currentStepIndex].active = false;
      this.currentStepIndex--;
      this.steps.toArray()[this.currentStepIndex].active = true;
    }
  }
}
