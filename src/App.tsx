import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import FAQComponent from './components/FAQ/FAQ';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <FAQComponent></FAQComponent>
      </div>
    </ThemeProvider>
  );
}

export default App;
