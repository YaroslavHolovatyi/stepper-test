import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [NgClass, RouterOutlet, RouterLink],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
  })
export class StepperComponent {

  steps = [{name:"Role", status:"isActive", finished:false},{name:"Email",status:"none", finished:false},{name:"Setting",status:"none", finished:false}]


  constructor(private router: Router){}

  setStatus(index: number, status: "isActive" | "wasClicked" | "none") {
    if (index < 0 || index >= this.steps.length) {
      console.error("Index out of bounds");
      return;
    }
  
    this.steps[index].status = status;
  
    if (index - 1 >= 0) {
      let pStatus = this.steps[index - 1].status;
      if (pStatus === "isActive") {
        this.steps[index - 1].status = "wasClicked";
      }
    }
  
    if (index + 1 < this.steps.length) {
      let nStatus = this.steps[index + 1].status;
      if (nStatus === "isActive") {
        this.steps[index + 1].status = "wasClicked";
      }
    }
  }

  finishStep(index: number) {
    this.steps[index].finished = true;
    console.log(index)
    
    if (index + 1 < this.steps.length) {
      this.setStatus(index + 1, 'isActive');
      this.router.navigate([this.steps[index + 1].name.toLowerCase()]);
    }
  }

  reset(){
    this.steps = [{name:"Role", status:"isActive", finished:false},{name:"Email",status:"none", finished:false},{name:"Setting",status:"none", finished:false}]
    this.router.navigate([this.steps[0].name.toLowerCase()]);
  }
}
