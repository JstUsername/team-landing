import { FunctionComponent, SVGProps } from 'react';

export interface SocialMediaIconsType {
  label: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export interface FooterMiddleUlType {
  href: string;
  text: string;
}
