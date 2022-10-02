import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import { LanguageComponent } from './language.component';

@NgModule({
  declarations: [LanguageComponent],
  exports: [LanguageComponent],
  imports: [CommonModule, MatChipsModule]
})
export class LanguageModule {}
