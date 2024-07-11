import { CSSProperties } from 'react';
import '@fontsource/roboto';
import { createTheme } from '@mui/material/styles';
import { css } from '@emotion/react';

declare module '@mui/material/styles' {
  interface Palette {
    gradients: Gradients;
    divider2: string;
  }
  interface PaletteOptions {
    gradients?: Gradients;
    divider2: string;
  }
  interface Gradients {
    mainGradient: string;
  }
  interface TypographyVariants {
    formHeader: CSSProperties;
  }
  interface TypographyVariantsOptions {
    formHeader: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    formHeader: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#458FF6',
      dark: '#001D6C',
    },
    secondary: {
      main: '#A2A9B0',
      light: '#F2F4F8',
      dark: '#697077',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F2F4F8',
    },
    text: {
      primary: '#21272A',
      secondary: '#697077',
    },
    info: {
      main: '#458FF6',
    },
    success: {
      main: '#25A249',
    },
    error: {
      main: '#DA1E28',
    },
    divider: '#DDE1E6',
    divider2: '#C1C7CD',
    gradients: {
      mainGradient: 'linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%)',
    },
  },
  typography: {
    h1: {
      fontSize: 54,
      lineHeight: 1.1,
      letterSpacing: '0em',
      fontWeight: 700,
    },
    h2: {
      fontSize: 42,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '0em',
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '0em',
    },
    h5: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h6: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.1,
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: 1.4,
      letterSpacing: '0em',
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '0em',
    },
    body1: {
      fontSize: 18,
      lineHeight: 1.4,
      letterSpacing: '0em',
    },
    body2: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0em',
    },
    button: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: '0.03em',
    },
    formHeader: {},
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          formHeader: 'h2',
        },
      },
    },
  },
});

theme.typography.formHeader = {
  ...theme.typography.h2,
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.h2.fontSize,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h3.fontSize,
  },
};

export const GlobalStyles = css`
  body {
    --sb-track-color: ${theme.palette.background.default};
    --sb-thumb-color: ${theme.palette.secondary.main};
    --sb-size: 8px;
  }
  body::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  body::-webkit-scrollbar-track {
    background: ${theme.palette.background.default};
    border-radius: 4px;
  }
  body::-webkit-scrollbar-thumb {
    background: ${theme.palette.secondary.main};
    border-radius: 4px;
  }
  body *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  body *::-webkit-scrollbar-track {
    background: ${theme.palette.background.default};
    border-radius: 4px;
  }
  body *::-webkit-scrollbar-thumb {
    background: ${theme.palette.secondary.main};
    border-radius: 4px;
  }
  @supports not selector(::-webkit-scrollbar) {
    body {
      scrollbar-color: ${theme.palette.secondary.main} ${theme.palette.background.default};
    }
  }
`;

export default theme;
