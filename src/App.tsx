import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Knowledge from './components/Knowledge/Knowledge';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Knowledge />
      </div>
    </ThemeProvider>
  );
}

export default App;
