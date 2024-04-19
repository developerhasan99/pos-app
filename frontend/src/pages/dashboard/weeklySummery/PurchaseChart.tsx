import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
        {
            label: "Last Week",
            backgroundColor: "#0694a2",
            borderWidth: 1,
            data: [3, 14, 52, 74, 33, 90, 70],
        },
        {
            label: "This Week",
            backgroundColor: "#7e3af2",
            borderWidth: 1,
            data: [66, 33, 43, 12, 54, 62, 84],
        },
    ],
};

function PurchaseChart() {
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
                Traffic
            </h4>

            <Bar data={data} />
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

export default PurchaseChart;
