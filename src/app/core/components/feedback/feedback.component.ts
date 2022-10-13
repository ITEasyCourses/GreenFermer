import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  @Input() feedback: any;
  public heart = false;
  public like(): void {
    this.heart = !this.heart;
  }
}
