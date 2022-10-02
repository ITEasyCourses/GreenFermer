import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import {
  FOOTER_CONSTANTS_APP_CONFIG,
  FOOTER_CONSTANTS_CONFIG
} from '../../constants/footer.constants';
import { FooterInterfaceConfig } from '../../interfaces/footer-interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  public footerConfig: FooterInterfaceConfig[] = [];
  public footerConfigApp: FooterInterfaceConfig[] = [];

  ngOnInit() {
    this.footerConfig = FOOTER_CONSTANTS_CONFIG;
    this.footerConfigApp = FOOTER_CONSTANTS_APP_CONFIG;
  }
}
