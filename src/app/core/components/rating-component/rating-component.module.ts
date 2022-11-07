import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RatingComponentComponent } from './rating-component.component';

@NgModule({
  declarations: [RatingComponentComponent],
  exports: [RatingComponentComponent],
  imports: [CommonModule]
})
export class RatingComponentModule {}
