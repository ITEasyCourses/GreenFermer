import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { ButtonModule } from '../button/button.module';
import { RatingComponentModule } from '../rating-component/rating-component.module';
import { UserIconModule } from '../user-icon/user-icon.module';

import { FeedbackComponent } from './feedback.component';

@NgModule({
  declarations: [FeedbackComponent],
  exports: [FeedbackComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RatingComponentModule,
    IconSpriteModule,
    UserIconModule
  ]
})
export class FeedbackModule {}
