import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent {

  mathForm = new FormGroup({
    a: new FormControl(this.randomNumbers()),
    b: new FormControl(this.randomNumbers()),
    answer:new FormControl('')

  }, [MathValidators.addition ('answer','a','b')]);
  constructor() {

    this.mathForm.statusChanges.subscribe(value => {
      
      if (value === 'INVALID') {
        return;
      }

      this.mathForm.patchValue({
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
