import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

const comprehensiveSolutionItems = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Use our SDKs',
    description:
      'Install the Markov AI SDK from PyPI or NPM, and programmatically supply content across multiple modalities.',
  },
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Upload content on our portal',
    description:
      `Navigate to our customer portal. Upload files and external links for ingestion.`,
  },
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Embed one line of code',
    description:
      'Request for an AI agent on our customer portal and embed the generated url in your web application.',
  },
];

export default function Integration() {
  return (
    <Box
      id="integration"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Typography component="h2" variant="h4">
          Integration
        </Typography>
        <Grid container spacing={2.5}>
          {comprehensiveSolutionItems.map((item, index) => (
            <Grid item xs={6} sm={4} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
