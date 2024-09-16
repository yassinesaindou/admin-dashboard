import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Page() {
  return (
    <main className="grid bg-stone-100 text-stone-950 grid-cols-[220px_1fr] gap-4 rounded-lg">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
