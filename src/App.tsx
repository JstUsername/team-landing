import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login.tsx';
import Header from './components/Header/Header.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/login" element={<Login typeLogin={'authorization'} />} />
          <Route path="/registration" element={<Login typeLogin={'registration'} />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

function AppContent() {
  return (
    <div className="AppContent">
      <Header />
    </div>
  );
}

export default App;
