import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { ButtonModule } from '../button/button.module';
import { CartModule } from '../cart/cart.module';
import { LanguageModule } from '../language/language.module';
import { RegistrationModalModule } from '../modals/registration-modal/registration-modal.module';
import { SelectModule } from '../select/select.module';

import { HeaderComponentComponent } from './header-component.component';

@NgModule({
  declarations: [HeaderComponentComponent],
  exports: [HeaderComponentComponent],
  imports: [
    CommonModule,
    CartModule,
    ButtonModule,
    SelectModule,
    LanguageModule,
    RegistrationModalModule,
    IconSpriteModule
  ]
})
export class HeaderComponentModule {}
