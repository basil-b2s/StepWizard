import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
})
export class StepComponent {
  @Input() active: boolean = false;
}