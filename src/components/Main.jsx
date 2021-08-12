import React from 'react';
import image from '../assets/image.png';
import { makeStyles, Grid, Typography } from '@material-ui/core';

import CountrySelectContainer from '../containers/CountrySelectContainer';
import InfoCardGridContainer from '../containers/InfoCardGridContainer';
import MapContainer from '../containers/MapContainer';
import CountriesTableContainer from '../containers/CountriesTableContainer';
import GraphContainer from '../containers/GraphContainer';

const useStyles = makeStyles({
  container: { margin: '2em' },
  leftCol: { marginBottom: '3em' },
  logo: { width: '220px' }
});

export default function Main({ country }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid item container direction='row' spacing={3}>
        <Grid item container direction='column' lg={9} xs={12}>
          <Grid
            item
            container
            direction='row'
            justifyContent='space-between'
            className={classes.leftCol}
          >
            <Grid item>
              <img className={classes.logo} src={image} alt='Logo' />
            </Grid>
            <Grid item>
              <CountrySelectContainer />
            </Grid>
          </Grid>
          <Grid item className={classes.leftCol}>
            <InfoCardGridContainer />
          </Grid>
          <Grid item>
            <MapContainer />
          </Grid>
        </Grid>

        <Grid item lg={3} xs={12}>
          <Typography component='h3'>Live Cases by Country</Typography>
          <CountriesTableContainer />
          <Typography component='h3' style={{ margin: '1em 0 0.5em 0' }}>
            {country.length ? country : 'Worldwide'} Cases
          </Typography>
          <GraphContainer />
        </Grid>
      </Grid>
    </div>
  );
}
