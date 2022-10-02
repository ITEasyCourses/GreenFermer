import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Facebook, Instagram, Twitter } from 'angular-feather/icons';

import { FooterComponent } from './footer.component';

const icons = {
  Instagram,
  Facebook,
  Twitter
};

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FooterComponent]
})
export class FooterModule {}
