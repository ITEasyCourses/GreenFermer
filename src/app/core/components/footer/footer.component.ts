import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FOOTER_CONSTANTS } from '../../constants/footer.constants';
import { FooterInterfaceConfig } from '../../interfaces/footer-interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public footerConfig: FooterInterfaceConfig[] =
    FOOTER_CONSTANTS['footerConstArr'];

  public footerConfigApp: FooterInterfaceConfig[] =
    FOOTER_CONSTANTS['footerConstAppArr'];
}
