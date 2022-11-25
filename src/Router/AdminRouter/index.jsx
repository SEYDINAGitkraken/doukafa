import React from "react";
import DashRouter from "./DashRouter";
import MenuRouter from "./MenuRouter";
import SaleRouter from "./SaleRouter";
import CustomerRouter from './CustomerRouter'
import CommandsRouter from "./CommandsRouter";

const AdminRouter = () => {
    
    return (
        <>
            <DashRouter/>
            <CustomerRouter/>
            <SaleRouter/>
            <MenuRouter/>
            <CommandsRouter/>
        </>
    )
}

export default AdminRouter