import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Grid, Menu } from 'angular-feather/icons';

import { ToggleViewComponent } from './toggle-view.component';

const icons = {
  Menu,
  Grid
};

@NgModule({
  declarations: [ToggleViewComponent],
  exports: [ToggleViewComponent],
  imports: [CommonModule, FeatherModule.pick(icons)]
})
export class ToggleViewModule {}
