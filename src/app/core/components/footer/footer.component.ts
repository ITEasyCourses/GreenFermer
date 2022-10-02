import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public footerConfig: {
    title: string;
    body: { name: string; routerLink: string; href: string }[];
  }[] = [
    {
      title: 'Як продавати й купувати?',
      body: [
        { name: 'Карта сайту', routerLink: '', href: '#' },
        { name: 'Правила безпеки', routerLink: '', href: '#' },
        { name: 'Популярні запити', routerLink: '', href: '#' }
      ]
    },
    {
      title: 'Контакти',
      body: [
        {
          name: '(093) 369-731-5962',
          routerLink: '',
          href: 'tel:+380933697315962'
        },
        {
          name: '(093) 369-731-5962',
          routerLink: '',
          href: 'tel:+380933697315962'
        },
        {
          name: 'Rinok@gmail.com',
          routerLink: '',
          href: 'mailto:rinok@gmail.com'
        }
      ]
    },
    {
      title: 'Оплата й доставка',
      body: [
        { name: 'Допомога', routerLink: '', href: '#' },
        { name: 'Зворотній звязок', routerLink: '', href: '#' }
      ]
    }
  ];
}
