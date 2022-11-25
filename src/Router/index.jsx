import React from "react";
import { LoginRouter } from "./UserRouter";
import AdminRouter from './AdminRouter'

const Router = () =>{
    return (
        <>
            <LoginRouter/>
            <AdminRouter/>
        </>
    );
}

export default Router;