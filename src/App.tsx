import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Login from './components/Login/Login.tsx';
import { useState } from 'react';

function App() {
  const [openLogin, setOpenLogin] = useState(true);
  const [typeLogin, setTypeLogin] = useState('authorization');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {openLogin ? (
          <Login typeLogin={typeLogin} setTypeLogin={setTypeLogin} setOpenLogin={setOpenLogin} />
        ) : (
          'Add the components here'
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
