import React from 'react';
import _ from 'lodash';
import { Grid } from '@material-ui/core';
import InfoCard from './InfoCard';

export default function InfoCardGrid({ countryData, setCaseType }) {
  const cardContent = () => {
    if (!_.isEmpty(countryData)) {
      const {
        cases,
        deaths,
        recovered,
        todayCases,
        todayDeaths,
        todayRecovered,
        tests,
        population,
        updated
      } = countryData;

      return [
        {
          caseType: 'cases',
          title: 'Infected',
          date: new Date(updated).toDateString(),
          p1: 'TODAY: ',
          p1Num: todayCases,
          p2: 'TOTAL: ',
          p2Num: cases
        },
        {
          caseType: 'recovered',
          title: 'Recovered',
          date: new Date(updated).toDateString(),
          p1: 'TODAY: ',
          p1Num: todayRecovered,
          p2: 'TOTAL: ',
          p2Num: recovered
        },
        {
          caseType: 'deaths',
          title: 'Deaths',
          date: new Date(updated).toDateString(),
          p1: 'TODAY: ',
          p1Num: todayDeaths,
          p2: 'TOTAL: ',
          p2Num: deaths
        },
        {
          title: countryData.country || 'Worldwide',
          p1: 'POPULATION:',
          p1Num: population,
          p2: 'TESTED: ',
          p2Num: tests
        }
      ];
    }
  };

  return (
    <Grid container justifyContent='space-between' spacing={4}>
      {cardContent()?.map((c, i) => (
        <Grid item key={i} style={{ flexGrow: 1 }}>
          <InfoCard {...c} setCaseType={setCaseType} />
        </Grid>
      ))}
    </Grid>
  );
}
