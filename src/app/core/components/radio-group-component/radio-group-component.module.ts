import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponentComponent } from './radio-group-component.component';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    RadioGroupComponentComponent
  ],
  exports: [
    RadioGroupComponentComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
  ]
})
export class RadioGroupComponentModule { }
