import React from 'react';
import './Map.css';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { caseTypeColors } from '../../utils';

const useStyles = makeStyles({
  popUpContainer: { width: '250px' },
  r1: { flex: 0.4 },
  r1Img: {
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  r2: { flex: 0.6 },
  r2Text: { marginLeft: '1em' }
});

export default function MapCircles({ countriesData, caseType }) {
  const classes = useStyles();

  return countriesData.map(country => (
    <Circle
      key={country.country}
      center={{ lat: country.countryInfo.lat, lng: country.countryInfo.long }}
      fillOpacity={0.4}
      color={caseTypeColors[caseType].rgba}
      fillColor={caseTypeColors[caseType].rgba}
      radius={
        Math.sqrt(country[caseType]) * caseTypeColors[caseType].multiplier
      }
    >
      <Popup className={classes.popUpContainer}>
        <Grid container direction='column'>
          <Grid item container direction='row' alignItems='center'>
            <Grid item className={classes.r1}>
              <img
                className={classes.r1Img}
                src={country.countryInfo.flag}
                alt='flag'
              />
            </Grid>
            <Grid item className={classes.r2}>
              <Typography
                className={classes.r2Text}
                variant='h6'
                noWrap={false}
              >
                {country.country}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction='column'>
            <Grid item>
              <Typography variant='body1' style={{ margin: '10px 0 2px 0' }}>
                Infected: {numeral(country.cases).format('0,0')}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' style={{ margin: '2px 0' }}>
                Recovered: {numeral(country.recovered).format('0,0')}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' style={{ margin: '2px 0' }}>
                Deaths: {numeral(country.deaths).format('0,0')}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Popup>
    </Circle>
  ));
}
