import { styled } from '@mui/material/styles';
import ShellsLogo from '../../assets/partners/SHELLS-logo.svg?react';
import SmartFinderLogo from '../../assets/partners/SmartFinder-logo.svg?react';
import ZoomerrLogo from '../../assets/partners/Zoomerr-logo.svg?react';
import ArtVenueLogo from '../../assets/partners/ArtVenue-logo.svg?react';
import KontrastrLogo from '../../assets/partners/kontrastr-logo.svg?react';
import WavesmarathonLogo from '../../assets/partners/WAVESMARATHON-logo.svg?react';

export default function Partners() {
  return (
    <PartnersSection>
      <PartnerItem>
        <ShellsLogo title={'SHELLS'} />
        <LogoTitle>SHELLS</LogoTitle>
      </PartnerItem>
      <PartnerItem>
        <SmartFinderLogo title={'SmartFinder'} />
        <LogoTitle>SmartFinder</LogoTitle>
      </PartnerItem>
      <PartnerItem>
        <ZoomerrLogo title={'Zoomerr'} />
        <LogoTitle>Zoomerr</LogoTitle>
      </PartnerItem>
      <PartnerItem>
        <ArtVenueLogo title={'ArtVenue'} />
        <LogoTitle>ArtVenue</LogoTitle>
      </PartnerItem>
      <PartnerItem>
        <KontrastrLogo title={'kontrastr'} />
        <LogoTitle>kontrastr</LogoTitle>
      </PartnerItem>
      <PartnerItem>
        <WavesmarathonLogo title={'WAVESMARATHON'} />
        <span style={{ display: 'inline-flex' }}>
          <LogoTitle style={{ fontSize: '18px', lineHeight: '1' }}>WAVES</LogoTitle>
          <LogoTitle style={{ fontSize: '18px', lineHeight: '1', fontWeight: '400' }}>MARATHON</LogoTitle>
        </span>
      </PartnerItem>
    </PartnersSection>
  );
}

const PartnersSection = styled('section')`
  display: flex;
  gap: 16px;
  row-gap: 32px;
  align-items: center;
  justify-content: center;
  padding: 80px;
  background: ${({ theme }) => theme.palette.gradients.mainGradient};
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
    column-gap: 32px;
    padding: 48px 16px;
  }
`;

const PartnerItem = styled('div')`
  width: 200px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: fit-content;
    justify-self: center;
    align-self: center;
  }
`;

const LogoTitle = styled('h4')`
  margin: 0;
  ${({ theme }) => theme.typography.h4}
  color: ${({ theme }) => theme.palette.background.default}
`;
