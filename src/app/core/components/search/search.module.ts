import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { Search } from 'angular-feather/icons';

import { SearchComponent } from './search.component';

const icons = {
  Search
};
@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [CommonModule, ReactiveFormsModule, FeatherModule.pick(icons)]
})
export class SearchModule {}
