import { Component, Input } from '@angular/core';

import { ProductInfo } from '../../interfaces/product-info.interface';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {
  @Input() product: ProductInfo = {
    name: 'Яблуко Ред Джоржанпринц',
    availability: 'Є в наявності',
    taste: 'Солодкий',
    size: 'Велилий',
    period: 'Осінь-зима',
    location: 'Київ',
    storage: 'У холодильнику',
    term: 'Вiд чотирьох мiсяцiв'
  };

  public img1 = '../../../../assets/images/product-info/img1.jpg';
  public img2 = '../../../../assets/images/product-info/img2.jpg';
  public img3 = '../../../../assets/images/product-info/img3.jpg';
  public img4 = '../../../../assets/images/product-info/img4.jpg';
  public img5 = '../../../../assets/images/product-info/img5.jpg';
  public heart = false;
  public like() {
    this.heart = !this.heart;
  }
}
