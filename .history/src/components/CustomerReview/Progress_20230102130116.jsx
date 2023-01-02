import React from "react";
import Chart from "react-apexcharts";


const Progress = () => {
  const data = {
    series: [
      {
        name: "Weight",
        data: [152, 155, 155, 154, 156, 157, 160],
      },
    ],
    options: {
      chart: {
        type: "smooth",
        height: "auto",
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      title: {
        text: '',
        align: 'left'
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          style: {
            colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']
          }
        },
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-20T01:30:00.000Z",
          "2018-09-21T02:30:00.000Z",
          "2018-09-22T03:30:00.000Z",
          "2018-09-23T04:30:00.000Z",
          "2018-09-24T05:30:00.000Z",
          "2018-09-25T06:30:00.000Z",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#ffffff']
          }
        },
        show: true
      },
      toolbar:{
        show: false
      }
    },
  };
  return <div className="Progress">
        <Chart options={data.options} series={data.series} type="area" />
  </div>;
};

export default Progress;
