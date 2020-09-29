import React from 'react';
import './App.css';
import { RecoilRoot, useRecoilValue } from 'recoil';
import Login from './pages/Login.page';
import { CssBaseline, ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { themeState } from './recoil/atoms';
import Signup from './pages/Signup.page';



function App() {

  const themeOption = useRecoilValue(themeState);
  
  const theme = unstable_createMuiStrictModeTheme({
    palette: {
      type: themeOption.mode,
      primary: {
        main: themeOption.color
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div>
        {/* <Login /> */}
        <Signup/>
      </div>
    </ThemeProvider>
  );
}

export default () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
