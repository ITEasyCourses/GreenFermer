import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'getControl'
})
export class GetControlPipe implements PipeTransform {
  transform(control: AbstractControl): unknown {
    return control as FormControl;
  }
}
