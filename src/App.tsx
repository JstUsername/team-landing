import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme, { GlobalStyles } from './theme';
import { Global } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={GlobalStyles} />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage typeLogin={'authorization'} />} />
            <Route path="/registration" element={<LoginPage typeLogin={'registration'} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
