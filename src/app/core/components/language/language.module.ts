import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LanguageComponent } from './language.component';

@NgModule({
  declarations: [LanguageComponent],
  exports: [LanguageComponent],
  imports: [CommonModule]
})
export class LanguageModule {}
