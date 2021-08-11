import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';

const Spinner = () => (
  <Grid
    style={{ height: '100vh' }}
    container
    justifyContent='center'
    alignContent='center'
    direction='column'
  >
    <Grid item>
      <CircularProgress size={100} style={{ color: 'green' }} />
    </Grid>
  </Grid>
);

export default Spinner;
