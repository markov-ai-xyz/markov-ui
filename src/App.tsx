import React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from './components/AppBar';
import Hero from './components/Hero';
import Integration from './components/Integration';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Footer from './components/Footer';
import Markov from './components/Markov';
import './App.css';

function App() {
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

export default App;
