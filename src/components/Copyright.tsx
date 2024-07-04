import React from 'react';
import Typography from '@mui/material/Typography';

interface CopyrightProps {
  [key: string]: any;
}

export default function Copyright(props: CopyrightProps) {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      {new Date().getFullYear()}
      &nbsp;
      Markov AI
    </Typography>
  );
}
