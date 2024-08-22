import React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from './AppBar';
import Hero from './Hero';
import YoutubeCarousel from './YoutubeCarousel';
import Integration from './Integration';
import Pricing from './Pricing';
import FeaturesLeft from './FeaturesLeft';
import FeaturesRight from './FeaturesRight';
import Footer from './Footer';
import '../App.css';

const Home: React.FC = () => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const videos = [
    {
      id: 'QHlAEmLur9U',
      title: 'AI Agent - recruiter',
      description: 'A fast-paced journey through the history of the world, created by Bill Wurtz.',
    },
    {
      id: 'V1-bFUvuDiQ',
      title: 'AI Agent - shopping assistant',
      description: 'The iconic opening theme song for The Muppet Show.',
    },
    {
      id: 'BkGfotWFkek',
      title: 'ETL - console',
      description: 'The first video uploaded to YouTube, featuring YouTube co-founder Jawed Karim at the San Diego Zoo.',
    },
    {
      id: 'H-9d3di7ygg',
      title: 'ETL - SDK',
      description: 'The classic music video for Rick Astley\'s 1987 hit "Never Gonna Give You Up".',
    },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <FeaturesLeft />
        <FeaturesRight />
        <Divider />
        <YoutubeCarousel videos={videos} />
        <Integration />
        <Divider />
        <Pricing />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Home;
