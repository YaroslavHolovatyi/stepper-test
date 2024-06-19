import { Component } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss'
})
export class RoleComponent {

  constructor( private stepper: StepperComponent){

  }
  
  finish() {
    this.stepper.finishStep(0);
    console.log(0)
  }

}
