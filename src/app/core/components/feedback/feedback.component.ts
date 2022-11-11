import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Feedback } from '../../interfaces/feedback-interface';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackComponent {
  @Input() feedback!: Feedback;

  public heart = false;

  public like(): void {
    this.heart = !this.heart;
  }
}
