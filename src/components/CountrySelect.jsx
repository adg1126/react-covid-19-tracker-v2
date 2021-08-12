import React from 'react';
import { makeStyles, FormControl, NativeSelect } from '@material-ui/core';

const useStyles = makeStyles({
  formControl: { minWidth: 120 }
});

export default function CountrySelect({
  countriesArr,
  country,
  setCountry,
  setCoordinates,
  setZoom
}) {
  const classes = useStyles();

  const handleCountryChange = e => {
    setCountry(e.target.value);
    countriesArr.forEach(({ country, coords }) => {
      if (country === e.target.value) {
        setCoordinates(coords);
      }
    });
    setZoom(5);
  };

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect value={country || ''} onChange={handleCountryChange}>
        <option value=''>Worldwide</option>
        {countriesArr.map(({ country }, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
