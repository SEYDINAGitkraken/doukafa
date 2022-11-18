import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const HistoDay = () => {

    const labels = ['Menu1', 'Menu2', 'Menu3', 'Menu4', 'Menu5', 'Menu6', 'Menu7'];
    const data = {
        labels: labels,
        datasets: [
            {
              label: 'Low',
              backgroundColor: 'rgb(50, 110, 240)', // green
              data: [10, 3, 4, 0, 5],
              borderRadius: 0,
              borderSkipped: false,
              maxBarThickness: 16,
            },
            {
              label: 'Moderate',
              backgroundColor: 'rgb(164, 190, 247)', // yellow
              data: [5, 7, 8, 10, 5],
              borderRadius: {
                topLeft:5,
                topRight:5
              },
              borderSkipped: false,
              maxBarThickness: 16,
            },
            
          ]
    };
    const options = { 
        fillColor: 'rgba(98, 20, 201, 0.719)', 
        strokeColor: 'rgba(98, 20, 201, 0.119)',
        type: 'bar',
        data: data,
        plugins: {
            title: {
              display: true,
              text: 'Chart.js Bar Chart - Stacked'
            },
          },
          responsive: true,
          interaction: {
            intersect: false,
          },
        scales:{
            x:{
                stacked: true,
                grid:{
                    display:true,
                }
            },
            y:{
                stacked: true,
                grid:{
                    display: true,
                }
            }
        }
    };

    


    return (
        <>
            <div className="">
                <div className="card">
                    <h1 className="title">Statistique journalière</h1>
                    <Bar options={options} data={data}  />
                </div>
                
        </div>
        </>
    )
}

export default HistoDay;