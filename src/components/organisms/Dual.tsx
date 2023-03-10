import React from 'react';
import { Grid } from '@mui/material';

interface IDualProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const Dual = ({ left, right }: IDualProps): JSX.Element => (
  <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
      {left}
    </Grid>
    <Grid item xs={12} md={6}>
      {right}
    </Grid>
  </Grid>
);
