import { Typography, styled } from '@mui/material';
import { keyframes } from '@emotion/react';

export const ArticleListItem = styled('li')`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 8px;
  max-width: 308px;
  overflow: hidden;
  padding: 0;
`;

export const ArticleTitle = styled(Typography)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 16px;
    line-height: 1.1;
  }
`;

export const ArticleDescription = styled(Typography)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    ${({ theme }) => theme.typography.bodyS};
  }
`;

export const ArticleLinkText = styled(Typography)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 14px;
    line-height: 1.1;
  }
`;

export const ArticleLoad = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
`;

const rotateGradient = keyframes`
  0% {
    background: conic-gradient(
      from 0deg,
      rgba(69, 143, 246, 0),
      rgba(69, 143, 246, 1),
      rgba(69, 143, 246, 0)
    );
  }
  9% {
    background: conic-gradient(
      from 30deg,
      rgba(69, 143, 246, 0),
      rgba(69, 143, 246, 1),
      rgba(69, 143, 246, 0)
    );
  }
  18% {
    background: conic-gradient(
      from 60deg,
      rgba(69, 143, 246, 0),
      rgba(69, 143, 246, 1),
      rgba(69, 143, 246, 0)
    );
  }
  27% {
    background: conic-gradient(
      from 90deg,
      rgba(69, 143, 246, 0),
      rgba(69, 143, 246, 1),
      rgba(69, 143, 246, 0)
    );
  }
  38% {
    background: conic-gradient(
      from 120deg,
      rgba(69, 143, 246, 0),
      rgba(69, 143, 246, 1),
      rgba(69, 143, 246, 0)
    );
  }
  45% {
    background: conic-gradient(
      from 150deg,
      rgba(69, 143, 246, 0),
      rgba(69, 143, 246, 1),
      rgba(69, 143, 246, 0)
    );
  }
  54% {
    background: conic-gradient(
      from 180deg,
      rgba(69, 143, 246, 0),
      rgba(69, 143, 246, 1),
      rgba(69, 143, 246, 0)
    );
  }
  63% {
    background: conic-gradient(
      from 210deg,
      rgba(69, 143, 246, 0),
      rgba(69, 143, 246, 1),
      rgba(69, 143, 246, 0)
    );
  }
  72% {
    background: conic-gradient(
      from 240deg,
      rgba(69, 143, 246, 0),
      rgba(69, 143, 246, 1),
      rgba(69, 143, 246, 0)
    );
  }
  81% {
    background: conic-gradient(
      from 270deg,
      rgba(69, 143, 246, 0),
      rgba(69, 143, 246, 1),
      rgba(69, 143, 246, 0)
    );
  }
  90% {
    background: conic-gradient(
      from 300deg,
      rgba(69, 143, 246, 0),
      rgba(69, 143, 246, 1),
      rgba(69, 143, 246, 0)
    );
  }
  100% {
    background: conic-gradient(
      from 330deg,
      rgba(69, 143, 246, 0),
      rgba(69, 143, 246, 1),
      rgba(69, 143, 246, 0)
    );
  }
`;

export const ArticleLoadBox = styled('div')`
  width: 56px;
  height: 37px;
  position: relative;
  animation: ${rotateGradient} 1s infinite;
`;

export const ArticleLoadCenter = styled('div')`
  width: 50px;
  height: 31px;
  background-color: ${({ theme }) => theme.palette.background.loading};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
