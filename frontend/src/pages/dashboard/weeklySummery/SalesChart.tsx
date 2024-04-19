import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartOptions, ChartData } from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
);

const options: ChartOptions<"line"> = {
    plugins: {
        tooltip: {
            intersect: false,
            mode: "index",
        },
    },
};

const data: ChartData<"line"> = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
        {
            label: "Last Week",
            backgroundColor: "#0694a2",
            borderColor: "#0694a2",
            data: [43, 48, 40, 54, 67, 73, 70],
            fill: false,
            cubicInterpolationMode: "monotone",
        },
        {
            label: "This Week",
            fill: false,
            backgroundColor: "#7e3af2",
            borderColor: "#7e3af2",
            data: [24, 50, 64, 74, 52, 51, 65],
            cubicInterpolationMode: "monotone",
        },
    ],
};

function SalesChart() {
    return (
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                    <div className=""></div>
                </div>
                <div className="chartjs-size-monitor-shrink">
                    <div className=""></div>
                </div>
            </div>
            <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                Weekly Sales
            </h4>
            <Line options={options} data={data} />
            <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                    <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
                    <span>Last Week</span>
                </div>
                <div className="flex items-center">
                    <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
                    <span>This Week</span>
                </div>
            </div>
        </div>
    );
}

export default SalesChart;
