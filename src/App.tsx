import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import PartnerForm from './components/PartnerForm/PartnerForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <PartnerForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
