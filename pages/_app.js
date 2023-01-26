import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// css
// import '../styles/globals.css'

// utils
import theme from '../utils/theme';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix landing page" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
