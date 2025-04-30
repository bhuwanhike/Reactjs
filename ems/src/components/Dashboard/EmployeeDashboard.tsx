import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard() {
  return (
    <div className="p-10 bg-zinc-700 h-screen">
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
}

export default EmployeeDashboard;
