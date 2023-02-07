import { PaletteMode } from '@mui/material';

/*= ============================================
=            LIGHT THEME            =
============================================= */

/* ----------  Primary ----------*/
const PRIMARY_MAIN_COLOR_LIGHT_THEME = '#051014';
// const PRIMARY_LIGHT_COLOR_LIGHT_THEME = '#00204F';
// const PRIMARY_DARK_COLOR_LIGHT_THEME = '#00204F';
// const PRIMARY_CONTRAST_TEXT_COLOR_LIGHT_THEME = '#fff';

/* ----------  Secondary  ----------*/
const SECONDARY_MAIN_COLOR_LIGHT_THEME = '#EFD28D';
// const SECONDARY_LIGHT_COLOR_LIGHT_THEME = '#5272AC';
// const SECONDARY_DARK_COLOR_LIGHT_THEME = '#00204F';

/* ----------  Action  ----------*/
const ACTION_ACTIVE_COLOR_LIGHT_THEME = '#00204F';
const ACTION_HOVER_COLOR_LIGHT_THEME = '#5272AC';
// eslint-disable-next-line no-unused-vars
const ACTION_DISABLED_COLOR_LIGHT_THEME = '#00204F';
// const ACTION_DISABLED_BACKGROUND_COLOR_LIGHT_THEME = '#00204F';
// const ACTION_FOCUS_COLOR_LIGHT_THEME = '#00204F';

/* ----------  Background  ----------*/
const BACKGROUND_DEFAULT_COLOR_LIGHT_THEME = '#fff';
const BACKGROUND_PAPER_COLOR_LIGHT_THEME = '#e4e4e4';

/* ----------  Text  ----------*/
// const TEXT_PRIMARY_COLOR_LIGHT_THEME = '#00204F';
// const TEXT_SECONDARY_COLOR_LIGHT_THEME = '#00204F';
// const TEXT_DISABLED_COLOR_LIGHT_THEME = '#00204F';
// const TEXT_HINT_COLOR_LIGHT_THEME = '#00204F';
// const TEXT_CONTRAST_TEXT_COLOR_LIGHT_THEME = '#00204F';

/*= ====  End of LIGHT THEME  ====== */

/*= ============================================
=            DARK THEME            =
============================================= */

/* ----------  Primary ----------*/
// 4782da

const PRIMARY_MAIN_COLOR_DARK_THEME = '#4782da';
// const PRIMARY_LIGHT_COLOR_DARK_THEME = '#5272AC';
// const PRIMARY_DARK_COLOR_DARK_THEME = '#00204F';
const PRIMARY_CONTRAST_TEXT_COLOR_DARK_THEME = '#F3F4F5';

/* ----------  Secondary  ----------*/
const SECONDARY_MAIN_COLOR_DARK_THEME = '#333333';
// const SECONDARY_LIGHT_COLOR_DARK_THEME = '#5272AC';
// const SECONDARY_DARK_COLOR_DARK_THEME = '#00204F';
/* ----------  Error  ----------*/
const ERROR_MAIN_COLOR_DARK_THEME = '#E57373';
// const SECONDARY_LIGHT_COLOR_DARK_THEME = '#5272AC';
// const SECONDARY_DARK_COLOR_DARK_THEME = '#00204F';

/* ----------  Action  ----------*/
const ACTION_ACTIVE_COLOR_DARK_THEME = '#5272AC';
const ACTION_HOVER_COLOR_DARK_THEME = '#5272AC';
// const ACTION_DISABLED_COLOR_DARK_THEME = '#D3D3D3';
// const ACTION_DISABLED_BACKGROUND_COLOR_DARK_THEME = '#696969';
// const ACTION_FOCUS_COLOR_DARK_THEME = '#00204F';

/* ----------  Background  ----------*/
const BACKGROUND_DEFAULT_COLOR_DARK_THEME = '#1B2635';
const BACKGROUND_PAPER_COLOR_DARK_THEME = '#233044';

/* ----------  Text  ----------*/
const TEXT_PRIMARY_COLOR_DARK_THEME = '#F3F4F5';
const TEXT_DARK_COLOR_DARK_THEME = '#407AD6';
// const TEXT_SECONDARY_COLOR_DARK_THEME = '#407AD6';
// const TEXT_DISABLED_COLOR_DARK_THEME = '#00204F';
// const TEXT_HINT_COLOR_DARK_THEME = '#00204F';
// const TEXT_CONTRAST_TEXT_COLOR_DARK_THEME = '#00204F';

/*= ====  End of DARK THEME  ====== */

const lightTheme = {
  palette: {
    mode: 'light' as PaletteMode,
    primary: {
      main: PRIMARY_MAIN_COLOR_LIGHT_THEME,
    },
    secondary: {
      main: SECONDARY_MAIN_COLOR_LIGHT_THEME,
    },
    action: {
      action: ACTION_ACTIVE_COLOR_LIGHT_THEME,
      hover: ACTION_HOVER_COLOR_LIGHT_THEME,
    },
    background: {
      default: BACKGROUND_PAPER_COLOR_LIGHT_THEME,
      row: '#f2f2f2',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // Outer bar background color
          '*::-webkit-scrollbar': {
            height: 8,
            width: 8,
          },
          // Inner track color
          '*::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.1)',
          },
          '*::-webkit-scrollbar-thumb': {
            borderRadius: 4,
            backgroundColor: PRIMARY_MAIN_COLOR_LIGHT_THEME,
          },
          // Scrollbar hover
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: ACTION_ACTIVE_COLOR_LIGHT_THEME,
          },
          // Makes intersecting scrollbars look better : ie both horizontal and vertical meet
          '*::-webkit-scrollbar-corner': {
            backgroundColor: BACKGROUND_DEFAULT_COLOR_LIGHT_THEME,
          },
        },
      },
    },
  },
  overrides: {
    MuiPickersMonth: {
      root: { height: '50px' },
    },
    MuiPickersBasePicker: {
      pickerView: { minHeight: '205px' },
    },
  },
};

const darkTheme = {
  palette: {
    mode: 'dark' as PaletteMode,
    primary: {
      main: PRIMARY_MAIN_COLOR_DARK_THEME,
      contrastText: PRIMARY_CONTRAST_TEXT_COLOR_DARK_THEME,
    },
    secondary: {
      main: SECONDARY_MAIN_COLOR_DARK_THEME,
    },
    action: {
      action: ACTION_ACTIVE_COLOR_DARK_THEME,
      hover: ACTION_HOVER_COLOR_DARK_THEME,
    },
    background: {
      paper: BACKGROUND_PAPER_COLOR_DARK_THEME,
      default: BACKGROUND_DEFAULT_COLOR_DARK_THEME,
      row: '#1e2837',
    },
    text: {
      primary: TEXT_PRIMARY_COLOR_DARK_THEME,
      dark: TEXT_DARK_COLOR_DARK_THEME,
    },
    error: {
      main: ERROR_MAIN_COLOR_DARK_THEME,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          //  Outer bar background color
          '*::-webkit-scrollbar': {
            height: 8,
            width: 8,
          },
          // Inner track color
          '*::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.1)',
          },
          '*::-webkit-scrollbar-thumb': {
            borderRadius: 4,
            backgroundColor: PRIMARY_MAIN_COLOR_DARK_THEME,
          },
          // Scrollbar hover
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: ACTION_ACTIVE_COLOR_DARK_THEME,
          },
          // Makes intersecting scrollbars look better : ie both horizontal and vertical meet
          '*::-webkit-scrollbar-corner': {
            backgroundColor: SECONDARY_MAIN_COLOR_DARK_THEME,
          },
        },
      },
    },
  },
};

export default {
  light: lightTheme,
  dark: darkTheme,
};
