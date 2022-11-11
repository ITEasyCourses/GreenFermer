import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserIconComponent } from './user-icon.component';

@NgModule({
  declarations: [UserIconComponent],
  exports: [UserIconComponent],
  imports: [CommonModule]
})
export class UserIconModule {}
