import React from 'react';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const num1 = 1;
const num2 = 2;
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

function JSXVariables() {
  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h3>
            This site is built with React and with it I can calculate pi and circumference with JSX variables:
            {Math.PI.toFixed(2)}, and
             {calculateCircumference(5)},
          </h3>
          <hr/>
          <h3>Over the course of the last four months the percentage of Javascript in completed challenges and projects has increased considerably! This chart is built using the chartjs npm packages.</h3>
          <Bar 
data={{
labels: ["1","2","3", "4", "5", "6", "7", "8", "9", "10"],
datasets:[
{
	label: "HTML",
	data: [85.9, 62.9, 50.4, 65.2, 8.8, 58.4, 18.4, 15.7, 0, 20.3]
},
{
	label: "CSS",
	data: [5.8, 37.1, 49.6, 34.8, 0, 7.3, 32.9, 34.4, 0, 0]
},
{
	label: "Javascript",
	data: [8.3, 0, 0, 0, 91.2, 34.3, 48.7, 49.9, 100, 79.7]
},
] 
}
}
/>
  <subscript>Data taken from my github account.</subscript>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
