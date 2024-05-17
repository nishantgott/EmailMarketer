import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";


ChartJS.register(
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);

const BarChart = ({ labelss, dataa1, dataa2 }) => {
    // console.log(labelss, dataa1, dataa2);
    const barChartData = {
        labels: labelss,
        datasets: [
            {
                label: "Opened",
                data: dataa1,
                backgroundColor: ["rgba(255,99,132,0.2)"],
                borderColor: ["rgba(54,162,253,1)"],
                borderWidth: 1
            },
            {
                label: "Clicked",
                data: dataa2,
                backgroundColor: ["rgba(132,2,132,0.2)"],
                borderColor: ["rgba(54,3,1,1)"],
                borderWidth: 1
            }
        ]
    };
    const options = {};
    return <Bar options={options} data={barChartData} />
}

export default BarChart;