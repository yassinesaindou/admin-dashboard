import Grid from "./Grid";
import { RecentTransactions } from "./RecentTransaction";
import TopBar from "./TopBar";

 

export default function Dashboard( ) {
    return <div className="text-3xl h-[200vh] rounded-lg shadow-md mt-6 pb-6">
        <TopBar />
        <Grid />
        <RecentTransactions />
    </div>
}
