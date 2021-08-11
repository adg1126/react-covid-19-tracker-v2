import React from 'react';
import _ from 'lodash';
import CountUp from 'react-countup';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: { cursor: 'pointer' },
  cases: {
    borderBottom: '10px solid rgba(0, 0, 255, 0.5)'
  },
  recovered: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)'
  },
  deaths: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)'
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
        !_.isEmpty(caseType) ? [classes[caseType], classes.card].join(' ') : ''
      }
      onClick={() => (!_.isEmpty(caseType) ? setCaseType(caseType) : null)}
    >
      <CardContent>
        <Typography color='textSecondary'>{title}</Typography>
        {date && (
          <Typography color='textSecondary'>UPDATED ON: {date}</Typography>
        )}
        {!_.isEmpty(p1) ? (
          <Typography color='textSecondary' variant='h6'>
            {p1} <CountUp start={0} end={p1Num} duration={2.5} separator=',' />
          </Typography>
        ) : null}
        <Typography variant='h5'>
          {p2} <CountUp start={0} end={p2Num} duration={2.5} separator=',' />
        </Typography>
      </CardContent>
    </Card>
  );
}
