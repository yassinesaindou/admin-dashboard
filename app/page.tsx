import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Page() {
  return (
    <div className="grid bg-white grid-cols-">
      <Dashboard />
      <Sidebar />
    </div>
  );
}
