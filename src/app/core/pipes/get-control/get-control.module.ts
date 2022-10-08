import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GetControlPipe } from './get-control.pipe';

@NgModule({
  declarations: [GetControlPipe],
  imports: [CommonModule],
  exports: [GetControlPipe]
})
export class GetControlModule {}
