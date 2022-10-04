export interface FooterInterfaceConfig {
  title: string;
  body: BodyInterfaceConfig[];
}

interface BodyInterfaceConfig {
  name: string;
  routerLink?: string;
  href?: string;
  imgSrc?: string;
  srOnly?: string;
}
