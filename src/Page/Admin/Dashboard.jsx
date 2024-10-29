import React from "react";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import { Outlet } from "react-router-dom";
import { handleSideBarToggle } from "../../Components/Functions/handleSideBarToggle";
import AdminNavBar from "../../Components/Admin/AdminNavBar";
import AdminFooter from "../../Components/Admin/AdminFooter";


const Dashboard = () => {
  return (
    <>
      <AdminNavBar />
      <div className="page-content" onClick={handleSideBarToggle}>
        <AdminSideBar />
        <Outlet />
      </div>
      <AdminFooter />
    </>
  );
};

export default Dashboard;
