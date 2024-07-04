import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Leads</Title>
      <Typography component="p" variant="h4">
        78
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {new Date().toString()}
      </Typography>
    </React.Fragment>
  );
}
