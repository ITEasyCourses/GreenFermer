import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { ICON_STYLE } from '../../constants/stylse-for-icon-user';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserIconComponent implements OnInit {
  @Input() userName!: string;
  @Input() userShop!: string;
  public iconColor!: string;
  public abet!: string;
  public iconStyle = ICON_STYLE;

  constructor(private cdr: ChangeDetectorRef) {}
  public ngOnInit(): void {
    this.generateAbet();
    this.generateColor();
    this.cdr.detectChanges();
  }

  private generateColor(): void {
    this.iconColor = this.iconStyle[Math.floor(Math.random() * 6)];
    this.cdr.detectChanges();
  }

  private generateAbet(): void {
    if (this.userName) {
      const serName = this.userName.split(' ')[1];
      const text = this.userName.substr(0, 1);
      const secText = serName.substr(0, 1);
      this.abet = text + secText;
      this.cdr.detectChanges();
    } else {
      this.abet = this.userShop;
      this.cdr.detectChanges();
    }
  }
}
