import { Dispatch, SetStateAction } from 'react';
import { HeaderLiType } from '../Header.types.ts';

export interface HeaderMobileProps {
  goToLogin: () => void;
  isActive: HeaderLiType[];
  setIsActive: Dispatch<SetStateAction<HeaderLiType[]>>;
}

export interface DropdownMenuProps {
  visible: boolean;
}

export interface ShoppingCartProps {
  count: number;
}
