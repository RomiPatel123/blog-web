import React from 'react'
import Sidebar from '../components/sidebar'
import { Outlet } from "react-router-dom";
const DashboardHome = () => {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardHome