import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating-component.component.html',
  styleUrls: ['./rating-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponentComponent implements OnInit {
  @Input() public ratingStar = 3.1;

  public ngOnInit(): void {
    this.sumAll();
  }

  public sumAll(): number {
    if (this.ratingStar % 1 < 0.5) {
      this.ratingStar = (Math.floor(this.ratingStar) + 0.5) * 20;
    } else {
      this.ratingStar = Math.ceil(this.ratingStar) * 20;
    }
    return this.ratingStar;
  }
}
