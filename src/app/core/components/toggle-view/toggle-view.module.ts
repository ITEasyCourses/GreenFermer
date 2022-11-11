import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { ToggleViewComponent } from './toggle-view.component';

@NgModule({
  declarations: [ToggleViewComponent],
  exports: [ToggleViewComponent],
  imports: [CommonModule, IconSpriteModule]
})
export class ToggleViewModule {}
