import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Heart } from 'angular-feather/icons';

import { ButtonModule } from '../button/button.module';
import { RatingComponentModule } from '../rating-component/rating-component.module';

import { FeedbackComponent } from './feedback.component';

const icons = {
  Heart
};

@NgModule({
  declarations: [FeedbackComponent],
  exports: [FeedbackComponent],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    ButtonModule,
    RatingComponentModule
  ]
})
export class FeedbackModule {}
