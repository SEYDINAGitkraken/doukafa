import React from "react";
import { CustomerRouter, DashRouter, MenuRouter, SaleRouter } from "./AdminRouter";
import { LoginRouter } from "./UserRouter";

const Router = () =>{
    return (
        <>
            <LoginRouter/>
            <DashRouter/>
            <CustomerRouter/>
            <SaleRouter/>
            <MenuRouter/>
        </>
    );
}

export default Router;