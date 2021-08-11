import React from 'react';
import image from '../assets/image.png';
import {
  makeStyles,
  Grid,
  FormControl,
  NativeSelect,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';

import InfoCardGridContainer from '../containers/InfoCardGridContainer';
import MapContainer from '../containers/MapContainer';
import CountriesTableContainer from '../containers/CountriesTableContainer';
import GraphContainer from '../containers/GraphContainer';

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  mainLeft: { flex: 0.9 },
  mainRight: {},
  header: { display: 'flex', marginBottom: 20 },
  formControl: { minWidth: 120 }
}));

export default function Main({ countries, country, setCountry }) {
  const classes = useStyles();

  const handleChange = e => setCountry(e.target.value);

  return (
    <div className={classes.main}>
      <div className={classes.mainLeft}>
        <Grid
          container
          className={classes.header}
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item>
            <img
              style={{ width: '220px' }}
              src={image}
              alt='COVID-19 Tracker'
            />
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <NativeSelect value={country || ''} onChange={handleChange}>
                <option value=''>Worldwide</option>
                {countries.map(({ country }, i) => (
                  <option key={i} value={country}>
                    {country}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>

        <InfoCardGridContainer />

        <MapContainer />
      </div>
      <Card className={classes.mainRight}>
        <CardContent>
          <Typography component='h3' style={{ margin: '0.5em 0 0.5em 0' }}>
            Live Cases by Country
          </Typography>
          <CountriesTableContainer />
          <Typography component='h3' style={{ margin: '1em 0 0.5em 0' }}>
            {country.length ? country : 'Worldwide'} Cases
          </Typography>
          <GraphContainer />
        </CardContent>
      </Card>
    </div>
  );
}
