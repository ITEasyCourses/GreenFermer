import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ERoutes } from '../../enums/routes';
import { IProductCard } from '../../interfaces/i-product-card';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Output() public addToBasketEvent: EventEmitter<void> =
    new EventEmitter<void>();

  @Input() card!: IProductCard;
  public heart = false;
  public img!: string | undefined;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.findImg();
  }

  public addToBasket(): void {
    this.addToBasketEvent.emit();
  }

  public like(): void {
    this.heart = !this.heart;
  }

  public goToCategoryDetails(): void {
    const categoryTypeId =
      this.activatedRoute.snapshot.params['categoryTypeId'];

    this.router.navigate([
      ERoutes.CATALOG_PAGE,
      this.card.categoryId || categoryTypeId,
      this.card.typeId
    ]);
  }

  private findImg(): void {
    this.img = this.card.images.find((el) => el !== '');
  }
}
