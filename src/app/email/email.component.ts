import { Component } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';


@Component({
  selector: 'app-email',
  standalone: true,
  imports: [],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {

  constructor( private stepper: StepperComponent){}
  
  finish() {
    this.stepper.finishStep(1);
    console.log(1)
  }

}
