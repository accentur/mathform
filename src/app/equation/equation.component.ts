import { Component } from '@angular/core';

import { FormGroup,FormControl, AbstractControl } from '@angular/forms';

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

  }, [(form: AbstractControl) => {
    
    const { a, b, answer } = form.value;
    
    if (a + b === parseInt(answer)) {
      return null;
    }
    
    return {addition:true};

  }]);
  constructor() {
    

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
