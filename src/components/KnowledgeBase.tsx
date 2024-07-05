import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import ToggleBar from './ToggleBar';
import Drawer from './Drawer';
import Copyright from './Copyright';
import FileUpload from './FileUpload'


export default function KnowledgeBase() {

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ToggleBar title='Supply Knowledge' open={open} toggleDrawer={toggleDrawer} />
      <Drawer open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar sx={{ py: 2 }} /> 
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FileUpload title="Written Content" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FileUpload title="Visual Media" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FileUpload title="Audio Recordings" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FileUpload title="Video Footage" />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
}
