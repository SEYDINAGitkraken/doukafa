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

const HistoSale = () => {

    const labels = ['Janv', 'Févr', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sepr', 'Oct', 'Nov', 'Déc'];
    const options = { 
        fillColor: 'rgba(98, 20, 201, 0.719)', 
        strokeColor: 'rgba(98, 20, 201, 0.119)',
        scales:{
            x:{
                grid:{
                    display:true
                }
            },
            y:{
                grid:{
                    display: true
                }
            }
        }
    };

    const data = {
        labels: labels,
        datasets: [
          {
            label: "Vente de periode",
            backgroundColor: "rgb(50, 110, 240)",
            borderColor: "rgb(16, 72, 190)",
            data: [0, 10, 5, 2, 20, 30, 45],
          }
        ],
    };

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Menu du jour</h1>
                <Bar options={options} data={data}  />
            </div>
            
        </div>
    )
}

export default HistoSale;