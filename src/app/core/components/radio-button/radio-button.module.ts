import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

import { RadioButtonComponent } from './radio-button.component';

@NgModule({
  declarations: [RadioButtonComponent],
  exports: [RadioButtonComponent],
  imports: [CommonModule, MatRadioModule]
})
export class RadioButtonModule {}
