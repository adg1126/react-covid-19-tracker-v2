import React, { useEffect } from 'react';
import _ from 'lodash';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import { Grid } from '@material-ui/core';

const buildChartData = (data, caseType) => {
  const chartData = [];
  let lastDataPoint;

  for (let date in data[caseType]) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[caseType][date]
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[caseType][date];
  }

  return chartData;
};

const options = {
  legend: { display: false },
  element: {
    point: { radius: 0 }
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: (tooltipItem, data) => numeral(tooltipItem.value).format('+0,0')
    }
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          format: 'MM/DD/YY',
          tooltipFormat: 'll'
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          callback: (val, index, vals) => numeral(val).format('0a')
        },
        stacked: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    ]
  }
};

export default function Graph({ graphData, country, fetchGraphDataStart }) {
  useEffect(() => {
    fetchGraphDataStart(country);
  }, [fetchGraphDataStart, country]);

  return (
    <Grid container justifyContent='center'>
      <Grid item style={{ width: '100%' }}>
        {!_.isEmpty(graphData) ? (
          <Line
            options={options}
            label={Object.keys(graphData?.cases)}
            style={{ height: '45vh' }}
            data={{
              datasets: [
                {
                  data: buildChartData(graphData, 'cases'),
                  label: 'Infected',
                  borderColor: '#3333ff',
                  fill: true
                },
                {
                  data: buildChartData(graphData, 'deaths'),
                  label: 'Deaths',
                  borderColor: 'red',
                  backgroundColor: 'rgba(255, 0, 0, 0.5)',
                  fill: true
                },
                {
                  data: buildChartData(graphData, 'recovered'),
                  label: 'Recovered',
                  borderColor: 'green',
                  backgroundColor: 'rgba(0, 255, 0, 0.5)',
                  fill: true
                }
              ]
            }}
          />
        ) : null}
      </Grid>
    </Grid>
  );
}
