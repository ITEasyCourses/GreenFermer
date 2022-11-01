import { FooterInterfaceConfig } from '../interfaces/footer-interface';

export const FOOTER_CONSTANTS: Record<string, FooterInterfaceConfig[]> = {
  footerConstArr: [
    {
      title: 'Як продавати й купувати?',
      body: [
        { name: 'Карта сайту', href: '#' },
        { name: 'Правила безпеки', href: '#' },
        { name: 'Популярні запити', href: '#' }
      ]
    },
    {
      title: 'Контакти',
      body: [
        {
          name: '(093) 369-731-5962',
          href: 'tel:+380933697315962'
        },
        {
          name: '(093) 369-731-5962',
          href: 'tel:+380933697315962'
        },
        {
          name: 'Rinok@gmail.com',
          href: 'mailto:rinok@gmail.com'
        }
      ]
    },
    {
      title: 'Оплата й доставка',
      body: [
        { name: 'Допомога', href: '#' },
        { name: 'Зворотній звязок', href: '#' }
      ]
    }
  ],
  footerConstAppArr: [
    {
      title: 'Завантажуй додаток',
      body: [
        {
          href: '#',
          name: 'Android',
          srOnly: 'Додаток для Android',
          imgSrc: './assets/sprites/sprite-multicolor.svg#android',
          width: '22px',
          height: '22px'
        },
        {
          href: '#',
          name: 'Apple',
          srOnly: 'Додаток для Apple',
          imgSrc: './assets/sprites/sprite-multicolor.svg#apple-footer',
          width: '20px',
          height: '26px'
        }
      ]
    },
    {
      title: 'Соціальні мережі',
      body: [
        {
          href: '#',
          name: 'Instagram',
          srOnly: 'Наш Instagram',
          imgSrc: './assets/sprites/sprite-multicolor.svg#inst',
          width: '22px',
          height: '22px'
        },
        {
          href: '#',
          name: 'Twitter',
          srOnly: 'Наш Twitter',
          imgSrc: './assets/sprites/sprite-multicolor.svg#twitter',
          width: '15px',
          height: '24px'
        },
        {
          href: '#',
          name: 'Facebook',
          srOnly: 'Наш Facebook',
          imgSrc: './assets/sprites/sprite-multicolor.svg#facebook',
          width: '15px',
          height: '24px'
        }
      ]
    }
  ]
};
