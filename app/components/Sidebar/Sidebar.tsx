import React from "react";
import AccountToggle from "./AccountToggle";
import Search from "./Search";
import RouteSelect from "./RouteSelect";
import Plan from "./Plan";

export default function Sidebar() {
    return <div className="text-3xl bg-gray-100 shadow h-[100vh]">
        <div>
            
        {/* Main Sidebar Content */}
        <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
            <AccountToggle />
            <Search />
            <RouteSelect />
        </div>
        <Plan />
</div>
       



  </div>;
}
