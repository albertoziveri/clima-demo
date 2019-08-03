/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react";

import ReactApexChart from "react-apexcharts";

class RadialChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          radialBar: {
            offsetY: -10,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '20%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,

              },
              value: {
                show: false,
              }
            }
          }
        },
        colors: ['#EE7A7A', '#A2E464', '#E5E5E5', '#3FBCEA'],
        labels: ['Stress', 'Welfare', 'Timing', 'General'],
        legend: {
          show: true,
          floating: true,
          fontSize: '20px',
          position: 'left',
          offsetX: 200, 
          offsetY: 10,
          labels: {
              useSeriesColors: true,
          },
          markers: {
              size: 0
          },
          formatter: function(seriesName, opts) {
              return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
              horizontal: 1,
          }
        },
        responsive: [{
            breakpoint: 600,
            options: {
                legend: {
                    show: true,
                    offsetX:10
                }
            }
        }]
      },
      series: [76, 67, 61, 90],
    }
  }

  render() {
    return (
      

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height="350" />
      </div>


    );
  }
}
export default RadialChart
