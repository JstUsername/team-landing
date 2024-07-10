import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Form from './components/Form/Form';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Form />
      </div>
    </ThemeProvider>
  );
}

export default App;
