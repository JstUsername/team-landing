import '@fontsource/roboto';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gradients: Gradients;
  }

  interface PaletteOptions {
    gradients?: Gradients;
  }

  interface Gradients {
    blueGradient: string;
  }

  interface TypographyVariants {
    sectionHeader: React.CSSProperties;
    sectionSubHeader: React.CSSProperties;
    sectionDescription: React.CSSProperties;
    dropdownHeader: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    sectionHeader: React.CSSProperties;
    sectionSubHeader: React.CSSProperties;
    sectionDescription: React.CSSProperties;
    dropdownHeader: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    sectionHeader: true;
    sectionSubHeader: true;
    sectionDescription: true;
    dropdownHeader: true;
  }
}

export const theme = createTheme({
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
    divider: '#DDE1E6',
    gradients: {
      blueGradient: 'linear-gradient(180deg, #67C3F3 0%, #5A98F2 100%)',
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
      lineHeight: 1.4,
      letterSpacing: '0em',
    },
    button: {
      fontSize: 20,
      lineHeight: 1,
      letterSpacing: '0.03em',
    },
    sectionSubHeader: {
      fontSize: 20,
      lineHeight: 1,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: '#001D6C',
    },
    sectionHeader: {},
    sectionDescription: {},
    dropdownHeader: {},
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          sectionHeader: 'h2',
          sectionSubHeader: 'span',
          sectionDescription: 'p',
          dropdownHeader: 'h5',
        },
      },
    },
  },
});

theme.typography.sectionHeader = {
  ...theme.typography.h2,
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.h4.fontSize,
  },
};

theme.typography.sectionDescription = {
  ...theme.typography.body1,
  [theme.breakpoints.down('md')]: {
    ...theme.typography.body2,
  },
};

theme.typography.dropdownHeader = {
  ...theme.typography.h5,
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.h6.fontSize,
  },
};

export default theme;
