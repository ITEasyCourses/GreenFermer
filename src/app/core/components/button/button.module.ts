import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { ButtonComponent } from './button.component';


@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, IconSpriteModule],
  exports: [ButtonComponent]
})
export class ButtonModule {}
