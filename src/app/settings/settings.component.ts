import { Component } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  constructor( private stepper: StepperComponent){}
  
  finish() {
    this.stepper.finishStep(2);
    console.log(2)
  }
}
