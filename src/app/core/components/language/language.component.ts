import { Component } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  public check = true;
  constructor() {}

  public button(): void {
    this.check = !this.check;
  }
}
