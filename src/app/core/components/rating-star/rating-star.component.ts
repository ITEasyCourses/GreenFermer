import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss']
})
export class RatingStarComponent implements OnInit {
  public stars: boolean[] = [];

  ngOnInit() {
    this.stars = [true];
  }
}
