import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserIconComponent implements OnInit {
  @Input() userName!: string;
  public iconColor!: string;
  public text!: string;
  public serName!: string;
  public secText!: string;
  public abet!: string;
  public colors: string[] = [
    'green',
    'blue',
    'red',
    'pink',
    'violet',
    'light-blue'
  ];

  constructor(private cdr: ChangeDetectorRef) {}
  public ngOnInit(): void {
    this.generateAbet();
    this.generateColor();
    this.cdr.detectChanges();
  }

  public generateColor(): void {
    this.iconColor = this.colors[Math.floor(Math.random() * 6)];
    this.cdr.detectChanges();
  }

  public generateAbet(): void {
    this.serName = this.userName.split(' ')[1];
    this.text = this.userName.substr(0, 1);
    this.secText = this.serName.substr(0, 1);
    this.abet = this.text + this.secText;
    this.cdr.detectChanges();
  }
}
