import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Knowledge from './components/Knowledge/Knowledge';
import Swiper from './components/Swiper/Swiper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Swiper />
        <Knowledge />
      </div>
    </ThemeProvider>
  );
}

export default App;
