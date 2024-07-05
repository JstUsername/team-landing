import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import PriceList from './components/PriceList/PriceList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <PriceList />
      </div>
    </ThemeProvider>
  );
}

export default App;
