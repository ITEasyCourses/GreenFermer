import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class SearchModule {}
