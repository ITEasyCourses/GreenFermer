import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule, IconSpriteModule]
})
export class SelectModule {}
