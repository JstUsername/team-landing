import '@fontsource/roboto';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    bodyS: {
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
    };
    buttonS: {
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: string;
    };
    articleMainTitle: React.CSSProperties;
    articleTitle: React.CSSProperties;
    articleDescription: React.CSSProperties;
    articleLinkText: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    bodyS: {
      fontSize?: number;
      fontWeight?: number;
      lineHeight?: number;
    };
    buttonS?: {
      fontSize?: number;
      fontWeight?: number;
      lineHeight?: number;
      letterSpacing?: string;
    };
    articleMainTitle: React.CSSProperties;
    articleTitle: React.CSSProperties;
    articleDescription: React.CSSProperties;
    articleLinkText: React.CSSProperties;
  }

  interface PaletteColor {
    loading?: string;
  }

  interface TypeBackground {
    loading?: string;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    articleMainTitle: true;
    articleTitle: true;
    articleDescription: true;
    articleLinkText: true;
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
      paper: '#F2F4F8',
      default: '#FFFFFF',
      loading: '#F3F7FF',
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
    bodyS: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.4,
    },
    button: {
      fontSize: 20,
      lineHeight: 1,
      letterSpacing: '0.03em',
    },
    buttonS: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: '0.5px',
    },
    caption: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: 1,
    },
    articleMainTitle: {},
    articleTitle: {},
    articleDescription: {},
    articleLinkText: {},
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          articleMainTitle: 'h2',
          articleTitle: 'h5',
          articleDescription: 'p',
        },
      },
    },
  },
});

theme.typography.articleMainTitle = {
  ...theme.typography.h2,
  [theme.breakpoints.down('sm')]: {
    ...theme.typography.h4,
  },
};

theme.typography.articleTitle = {
  ...theme.typography.h5,
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: 1.1,
  },
};

theme.typography.articleDescription = {
  ...theme.typography.body2,
  [theme.breakpoints.down('sm')]: {
    ...theme.typography.bodyS,
  },
};

theme.typography.articleLinkText = {
  ...theme.typography.button,
  [theme.breakpoints.down('sm')]: {
    ...theme.typography.buttonS,
  },
};

export default theme;
