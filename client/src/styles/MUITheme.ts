import { createTheme } from '@mui/material/styles';

export const getTheme = (colorTheme: string) => {
  return createTheme({
    palette: {
      mode: colorTheme === 'dark' ? 'dark' : 'light',
      primary: {
        main: colorTheme === 'dark' ? '#00B8D4' : '#32AAFF'
      },
      secondary: {
        main: colorTheme === 'dark' ? '#D6E3ED' : '#282828'
      },
      error: {
        main: '#FF0000'
      },
      warning: {
        main: '#FF9800'
      },
      info: {
        main: colorTheme === 'dark' ? '#00B8D4' : '#32AAFF'
      },
      success: {
        main: '#4CAF50'
      },
      background: {
        default: colorTheme === 'dark' ? '#282828' : '#D6E3ED',
        paper: colorTheme === 'dark' ? '#282828' : '#D6E3ED'
      },
      text: {
        primary: colorTheme === 'dark' ? '#D6E3ED' : '#282828',
        secondary: colorTheme === 'dark' ? '#D6E3ED' : '#757575',
        disabled: colorTheme === 'dark' ? '#6B6B6B' : '#BDBDBD',
      },
      action: {
        active: colorTheme === 'dark' ? '#282828' : '#D6E3ED',
        hover: colorTheme === 'dark' ? '#282828' : '#ECEFF1',
        selected: colorTheme === 'dark' ? '#ECEFF1' : '#ECEFF1',
        disabled: colorTheme === 'dark' ? '#6B6B6B' : '#BDBDBD',
        disabledBackground: colorTheme === 'dark' ? '#424242' : '#F5F5F5'
      }
    },
  });
};
