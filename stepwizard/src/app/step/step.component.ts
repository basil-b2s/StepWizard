// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-step',
//   standalone: true,
//   imports: [],
//   templateUrl: './step.component.html',
//   styleUrl: './step.component.css'
// })
// export class StepComponent {

// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
})
export class StepComponent {
  @Input() active: boolean = false;
}

