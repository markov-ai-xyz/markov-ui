import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ToggleBar from './ToggleBar';
import Drawer from './Drawer';
import Copyright from './Copyright';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

export default function Dashboard() {
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem('markovPortalJwt'));

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/portal');
  //   }
  // }, [token, navigate]);

  const verifyToken = useCallback(async () => {
    try {
      const response = await axios.post('/validate-login', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.data) {
        navigate('/portal');
      }
    } catch (error) {
      navigate('/portal');
    }
  }, [token, navigate]);

  // useEffect(() => {
  //   verifyToken();
  // }, [token, navigate, verifyToken]);

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ToggleBar title='Dashboard' open={open} toggleDrawer={toggleDrawer} />
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
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
}
