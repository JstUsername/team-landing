import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Login from './components/Login.tsx';
import Header from './components/Header/Header.tsx';
import { useState } from 'react';

function App() {
  const [openLogin, setOpenLogin] = useState(false);
  const [typeLogin, setTypeLogin] = useState('authorization');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {openLogin ? (
          <Login typeLogin={typeLogin} setTypeLogin={setTypeLogin} setOpenLogin={setOpenLogin} />
        ) : (
          <Header setOpenLogin={setOpenLogin} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
