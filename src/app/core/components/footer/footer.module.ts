import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, RouterLinkWithHref],
  exports: [FooterComponent]
})
export class FooterModule {}
