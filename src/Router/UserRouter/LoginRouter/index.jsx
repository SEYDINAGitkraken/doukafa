import React, { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import AuthLayout from "../../../layouts/AuthLayout";
import { LoginPage } from "../../../pages/AuthPage";
import { LOGIN } from "../../../settings/constants";


const LoginRouter = () => {

    

    return (
        <>
            <Route path={LOGIN} exact>
              <AuthLayout><LoginPage/></AuthLayout>
            </Route>
        </>
    )
}

export default LoginRouter;