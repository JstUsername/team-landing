import { Dispatch, SetStateAction, FunctionComponent, SVGProps } from 'react';

export interface headerProps {
  setOpenLogin: Dispatch<SetStateAction<boolean>>;
}

export interface LiButtonProps {
  active: boolean;
  icon: FunctionComponent<SVGProps<SVGSVGElement>> | undefined;
}

export interface HeaderLi {
  label: string;
  active: boolean;
  icon: FunctionComponent<SVGProps<SVGSVGElement>> | undefined;
}
