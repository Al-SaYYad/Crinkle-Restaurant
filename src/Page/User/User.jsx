import React from "react";
import UserSideBar from "../../Components/User/UserSideBar";
import "../../Styles/outlet.css";
import { Outlet } from "react-router-dom";
import AdminNavBar from "../../Components/Admin/AdminNavBar";
import AdminFooter from "../../Components/Admin/AdminFooter";

const User = () => {
  return (
    <>
      <AdminNavBar />
      <div className="page-content">
        <UserSideBar />
        <Outlet />
      </div>
      <AdminFooter />
    </>
  );
};

export default User;
