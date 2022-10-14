import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Star } from 'angular-feather/icons';

import { RatingComponentComponent } from './rating-component.component';

const icons = {
  Star
};

@NgModule({
  declarations: [RatingComponentComponent],
  exports: [RatingComponentComponent],
  imports: [CommonModule, FeatherModule, FeatherModule.pick(icons)]
})
export class RatingComponentModule {}
