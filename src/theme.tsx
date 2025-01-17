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
    blueGradient: string;
  }
  interface Gradients {
    blueGradient: string;
  }
  interface TypographyVariants {
    formHeader: CSSProperties;
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
    buttonM: {
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: string;
    };
    articleMainTitle: CSSProperties;
    articleTitle: CSSProperties;
    articleDescription: CSSProperties;
    articleLinkText: CSSProperties;
    sectionHeader: CSSProperties;
    sectionSubHeader: CSSProperties;
    sectionDescription: CSSProperties;
    dropdownHeader: CSSProperties;
    formTitle: CSSProperties;
    formSubTitle: CSSProperties;
    popupTitle: CSSProperties;
  }
  interface TypographyVariantsOptions {
    formHeader: CSSProperties;
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
    buttonM?: {
      fontSize?: number;
      fontWeight?: number;
      lineHeight?: number;
      letterSpacing?: string;
    };
    articleMainTitle: CSSProperties;
    articleTitle: CSSProperties;
    articleDescription: CSSProperties;
    articleLinkText: CSSProperties;
    sectionHeader: CSSProperties;
    sectionSubHeader: CSSProperties;
    sectionDescription: CSSProperties;
    dropdownHeader: CSSProperties;
    formTitle: CSSProperties;
    formSubTitle: CSSProperties;
    popupTitle: CSSProperties;
  }
  interface PaletteColor {
    loading?: string;
    underline: string;
  }
  interface TypeBackground {
    loading?: string;
    underline?: string;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    formHeader: true;
    articleMainTitle: true;
    articleTitle: true;
    articleDescription: true;
    articleLinkText: true;
    sectionHeader: true;
    sectionSubHeader: true;
    sectionDescription: true;
    dropdownHeader: true;
    formTitle: true;
    formSubTitle: true;
    popupTitle: true;
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
      loading: '#F3F7FF',
      underline: '#C1C7CD',
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
      blueGradient: 'linear-gradient(180deg, #67C3F4 0%, #5A98F2 100%)',
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
    bodyS: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.4,
    },
    button: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: '0.03em',
    },
    buttonM: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: '0.5px',
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
    formHeader: {},
    articleMainTitle: {},
    articleTitle: {},
    articleDescription: {},
    articleLinkText: {},
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
    formTitle: {},
    formSubTitle: {},
    popupTitle: {},
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          formHeader: 'h2',
          articleMainTitle: 'h2',
          articleTitle: 'h5',
          articleDescription: 'p',
          sectionHeader: 'h2',
          sectionSubHeader: 'span',
          sectionDescription: 'p',
          dropdownHeader: 'h5',
          formTitle: 'h2',
          formSubTitle: '',
          popupTitle: 'h3',
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

theme.typography.articleMainTitle = {
  ...theme.typography.h2,
  [theme.breakpoints.down('sm')]: {
    ...theme.typography.h4,
  },
};

theme.typography.formTitle = {
  ...theme.typography.h2,
  [theme.breakpoints.down('sm')]: {
    ...theme.typography.h3,
  },
};

theme.typography.formSubTitle = {
  ...theme.typography.body1,
  [theme.breakpoints.down('sm')]: {
    ...theme.typography.body2,
  },
};

theme.typography.popupTitle = {
  ...theme.typography.h3,
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

export const GlobalStyles = css`
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  *::-webkit-scrollbar-track {
    background: ${theme.palette.background.default};
    border-radius: 4px;
  }
  *::-webkit-scrollbar-thumb {
    background: ${theme.palette.secondary.main};
    border-radius: 4px;
  }
  @supports not selector(::-webkit-scrollbar) {
    * {
      scrollbar-color: ${theme.palette.secondary.main} ${theme.palette.background.default};
    }
  }
`;

export default theme;
