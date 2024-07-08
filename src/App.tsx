import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage.tsx';
import HomePage from './components/HomePage/HomePage.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage typeLogin={'authorization'} />} />
          <Route path="/registration" element={<LoginPage typeLogin={'registration'} />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
