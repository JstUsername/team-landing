import { ListTitle, FooterUl, FooterListLink } from '../Footer.tsx';
import { FooterMiddleUlProps } from './FooterMiddleUl.types.ts';

export default function FooterMiddleUl({ footerListTitle, footerListItems }: FooterMiddleUlProps) {
  return (
    <div>
      <ListTitle>{footerListTitle}</ListTitle>
      <FooterUl>
        {footerListItems.map((listItem, itemIndex) => (
          <li key={itemIndex}>
            <FooterListLink href={listItem.href}>{listItem.text}</FooterListLink>
          </li>
        ))}
      </FooterUl>
    </div>
  );
}
