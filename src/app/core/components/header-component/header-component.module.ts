import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Heart, MessageCircle } from 'angular-feather/icons';

import { ButtonModule } from '../button/button.module';
import { CartModule } from '../cart/cart.module';
import { LanguageModule } from '../language/language.module';
import { RegistrationModalModule } from '../modals/registration-modal/registration-modal.module';
import { SelectModule } from '../select/select.module';

import { HeaderComponentComponent } from './header-component.component';

const icons = {
  MessageCircle,
  Heart
};

@NgModule({
  declarations: [HeaderComponentComponent],
  exports: [HeaderComponentComponent],
  imports: [
    CommonModule,
    CartModule,
    ButtonModule,
    FeatherModule.pick(icons),
    SelectModule,
    LanguageModule,
    RegistrationModalModule
  ]
})
export class HeaderComponentModule {}
