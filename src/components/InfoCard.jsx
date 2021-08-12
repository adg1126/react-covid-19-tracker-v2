import React from 'react';
import _ from 'lodash';
import CountUp from 'react-countup';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: { cursor: 'pointer' },
  casesCard: {
    borderBottom: '10px solid rgb(65, 105, 225)'
  },
  recoveredCard: {
    borderBottom: '10px solid rgb(41, 171, 135)'
  },
  deathsCard: {
    borderBottom: '10px solid rgb(204, 16, 52)'
  },
  casesText: {
    color: 'rgb(65, 105, 225)'
  },
  recoveredText: {
    color: 'rgb(41, 171, 135)'
  },
  deathsText: {
    color: 'rgb(204, 16, 52)'
  }
}));

export default function InfoCard({
  caseType,
  title,
  date,
  p1,
  p1Num,
  p2,
  p2Num,
  setCaseType
}) {
  const classes = useStyles();

  return (
    <Card
      className={
        !_.isEmpty(caseType)
          ? [classes[`${caseType}Card`], classes.card].join(' ')
          : ''
      }
      onClick={() => (!_.isEmpty(caseType) ? setCaseType(caseType) : null)}
    >
      <CardContent>
        <Typography
          className={!_.isEmpty(caseType) ? classes[`${caseType}Text`] : ''}
        >
          {title}
        </Typography>
        {date && (
          <Typography color='textSecondary'>UPDATED ON: {date}</Typography>
        )}
        {!_.isEmpty(p1) ? (
          <Typography color='textSecondary' variant='h6'>
            {p1} <CountUp start={0} end={p1Num} duration={2.5} separator=',' />
          </Typography>
        ) : null}
        <Typography variant='body1'>
          {p2} <CountUp start={0} end={p2Num} duration={2.5} separator=',' />
        </Typography>
      </CardContent>
    </Card>
  );
}
