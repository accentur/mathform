import { AbstractControl } from "@angular/forms";

export class MathValidators {

    static addition(target: string, first: string, second: string) {
        
        return (form: AbstractControl) => {
    
            const sum = form.value[target];
            const firstN = form.value[first];
            const secondN = form.value[second];
    
            if (firstN + secondN === parseInt(sum)) {
                return null;
            }
    
            return { addition: true };
      

        }
      
    }
}

  
