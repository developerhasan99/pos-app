import {
    Coins,
    LucideIcon,
    MessageSquareMore,
    ShoppingCart,
    UsersRound,
} from "lucide-react";

function SummeryCards() {
    return (
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <Card
                color="text-orange-500 dark:text-orange-100 dark:bg-orange-500"
                title="Total clients"
                value={"6389"}
                Icons={UsersRound}
            />
            <Card
                color="text-green-500 dark:text-green-100 dark:bg-green-500"
                title="Account Balance"
                value="$ 46,760.89"
                Icons={Coins}
            />
            <Card
                color="text-blue-500 dark:text-blue-100 dark:bg-blue-500"
                title="New sales"
                value="376"
                Icons={ShoppingCart}
            />
            <Card
                color="text-teal-500 dark:text-teal-100 dark:bg-teal-500"
                title="Pending contacts"
                value="35"
                Icons={MessageSquareMore}
            />
        </div>
    );
}

export default SummeryCards;

const Card = ({
    Icons,
    title,
    value,
    color,
}: {
    Icons: LucideIcon;
    title: string;
    value: string;
    color: string;
}) => {
    return (
        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <div className={`p-3 mr-4 bg-orange-100 rounded-full ${color}`}>
                <Icons className="w-5 h-5" />
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {title}
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {value}
                </p>
            </div>
        </div>
    );
};
