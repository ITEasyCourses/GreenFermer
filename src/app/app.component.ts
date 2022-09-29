import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { ApplicationApiService } from './core/services/application-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'green-fermer';

  public fc: any = new FormArray([
    new FormGroup({
      file: new FormControl(''),
      title: new FormControl('')
    }),
    new FormGroup({
      file: new FormControl(''),
      title: new FormControl('')
    }),
    new FormGroup({
      file: new FormControl(''),
      title: new FormControl('')
    }),
    new FormGroup({
      file: new FormControl(''),
      title: new FormControl('')
    }),
    new FormGroup({
      icon: new FormControl(''),
      title: new FormControl('')
    })
  ]);

  public formGroup = new FormGroup({
    images: new FormControl(['']),
    title: new FormControl(''),
    isLiked: new FormControl(false),
    isExist: new FormControl(true),
    rating: new FormControl(0),
    taste: new FormControl(''),
    size: new FormControl(''),
    periodGrow: new FormControl(''),
    location: new FormControl(''),
    storageConditions: new FormControl(''),
    timeStorage: new FormControl(''),
    price: new FormControl(0),
    optPrice: new FormControl(0),
    optAmount: new FormControl(0),
    minAmount: new FormControl(0),
    description: new FormControl(''),
    owner: new FormControl({
      avatar: '',
      rating: 5,
      description:
        'Магазин "Пан Фермер" був заснований в 2015 році і продовжує успішно розвиватися. За цей період часу нам вдалося виконати великий обсяг роботи і зайняти гідне місце на ринку України, надаючи нашим клієнтам якісні аграрні товари.\n' +
        'Нам дуже важливо, щоб  Ви відчували шанобливе і компетентне ставлення з нашого боку.       \n' +
        'Щоб на кожному етапі, від першого візиту на сторінку магазину  до отримання замовлення у відділенні, Ви відчували себе зручно та комфортно.',
      name: 'Магазин “Пан Фермер”'
    }),
    typeId: new FormControl(0),
    typeText: new FormControl('')
  });

  // 1 - Яблуки
  // 2 - Груши
  // 3 - Сливи
  // 4 - Петрушка
  // 5 - Яблуки
  // 6 - Яблуки
  // 7 - Яблуки
  // 8 - Яблуки
  // 9 - Яблуки
  // 10 - Яблуки
  // 11 - Яблуки
  // 12 - Яблуки

  constructor(private applicationApiService: ApplicationApiService) {}

  public send1(): void {
    const arr = this.fc.getRawValue();
    arr.forEach((el: any) => {
      this.applicationApiService.postOne(el);
    });

    this.fc.reset();
  }

  public send2(): void {
    this.applicationApiService.postTwo(this.formGroup.value);
  }
}
