import '@/styles/globals.css';
import { theme } from '../themes/theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
