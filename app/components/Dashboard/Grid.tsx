 
import ActivityGraph from "./ActivityGraph";
import StatCards from "./StatCards";
import { UsageRadar } from "./UsageRadar";

 
export default function Grid() {
    

    return (
        <div className="px-4 grid gap-3 grid-cols-12">
            <StatCards />
<ActivityGraph />
            <UsageRadar />
        </div>
    )
}
 