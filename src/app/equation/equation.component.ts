import { Component } from '@angular/core';

import { delay,filter,scan } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent {

  solutionPerSeconds = 0.0;


  mathForm = new FormGroup({
    a: new FormControl(this.randomNumbers()),
    b: new FormControl(this.randomNumbers()),
    answer:new FormControl('')

  }, [MathValidators.addition ('answer','a','b')]);
  constructor() {

    //const startTime = new Date().getTime();
    //let numberofProbSolved = 0;


    this.mathForm.statusChanges.pipe(
     filter(value=>value==='VALID'),
      delay(200),
      scan(acc => { 

        return {numberSolved1:acc.numberSolved1+1,timeS:acc.timeS}
      }, {numberSolved1:0,timeS:new Date()})
    //).subscribe(value => {
    ).subscribe(({numberSolved1,timeS }) => {
     // numberofProbSolved++;
      //this.solutionPerSeconds = (new Date().getTime()-startTime) / numberofProbSolved/1000;
      this.solutionPerSeconds = (new Date().getTime()-timeS.getTime()) / numberSolved1/1000;
      
      // if (value === 'INVALID') {
      //   return;
      // }

      this.mathForm.patchValue({
        a:this.randomNumbers(),
        b: this.randomNumbers(),
        answer:''

      });

    });
    

  }

  get a() {
    
    return this.mathForm.value.a;
  }

  get b() {
    
    return this.mathForm.value.b;
  }

  randomNumbers() {
    
    return Math.floor(Math.random() * 10);
  }

}
