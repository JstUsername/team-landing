import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login.tsx';

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
      <h1>Add your component here</h1>
    </div>
  );
}

export default App;
