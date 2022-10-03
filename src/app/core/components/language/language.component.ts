import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageComponent {
  @Input() ActiveLang!: string;
  public isActive: Boolean = true;
  constructor() {}

  public button(): void {
    this.isActive = !this.isActive;
  }
}
