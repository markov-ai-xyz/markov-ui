import React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from './AppBar';
import Hero from './Hero';
import Integration from './Integration';
import Pricing from './Pricing';
import Features from './Features';
import Footer from './Footer';
import Markov from './Markov';
import '../App.css';

const Home: React.FC = () => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Features />
        <Divider />
        <Integration />
        <Divider />
        <Pricing />
        <Divider />
        <Footer />
        <Markov />
      </Box>
    </ThemeProvider>
  );
}

export default Home;