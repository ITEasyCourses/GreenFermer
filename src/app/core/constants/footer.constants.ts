import { FooterInterfaceConfig } from '../interfaces/footer-interface';

export const FOOTER_CONSTANTS: {
  footerConstArr: FooterInterfaceConfig[];
  footerConstAppArr: FooterInterfaceConfig[];
} = {
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
          imgSrc: './assets/images/footer/android.svg'
        },
        {
          href: '#',
          name: 'Apple',
          srOnly: 'Додаток для Apple',
          imgSrc: './assets/images/footer/apple.svg'
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
          imgSrc: './assets/images/footer/inst.svg'
        },
        {
          href: '#',
          name: 'Twitter',
          srOnly: 'Наш Twitter',
          imgSrc: './assets/images/footer/twitter.svg'
        },
        {
          href: '#',
          name: 'Facebook',
          srOnly: 'Наш Facebook',
          imgSrc: './assets/images/footer/facebook.svg'
        }
      ]
    }
  ]
};
