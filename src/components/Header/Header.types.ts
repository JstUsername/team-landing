import { FunctionComponent, SVGProps } from 'react';

export interface LiButtonProps {
  active: boolean;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>> | undefined;
}

export interface HeaderLiType {
  label: string;
  active: boolean;
  icon: FunctionComponent<SVGProps<SVGSVGElement>> | undefined;
}
