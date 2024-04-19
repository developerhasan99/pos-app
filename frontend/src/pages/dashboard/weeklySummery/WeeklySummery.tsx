import PurchaseChart from "./PurchaseChart";
import SalesChart from "./SalesChart";

function WeaklySummery() {
    return (
        <div className="grid gap-6 mb-8 md:grid-cols-2">
            <SalesChart />
            <PurchaseChart />
        </div>
    );
}

export default WeaklySummery;
