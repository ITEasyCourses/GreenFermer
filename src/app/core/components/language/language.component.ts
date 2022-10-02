import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  @Input() isYellow = true;
  @Input() check = true;
  public color = 'yellow';
  constructor() {}
  ngOnInit() {
    this.color = this.isYellow ? 'yellow' : 'white';
  }

  public button(): void {
    this.check = !this.check;
  }
}
