import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Feedback } from '../../interfaces/feedback-interface';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackComponent implements OnInit {
  @Input() feedback!: Feedback;

  public heart = false;
  public abet!: string;
  ngOnInit(): void {
    this.getAbet();
  }

  public like(): void {
    this.heart = !this.heart;
  }

  private getAbet(): void {
    this.abet = this.feedback.name;
  }
}
