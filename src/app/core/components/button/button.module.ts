import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Plus } from 'angular-feather/icons';

import { ButtonComponent } from './button.component';

const icons = {
  Plus
};

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [ButtonComponent]
})
export class ButtonModule {}
