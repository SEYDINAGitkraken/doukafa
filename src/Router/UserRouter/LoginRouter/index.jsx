import React, { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import AuthLayout from "../../../layouts/AuthLayout";
import MainLayout from "../../../layouts/MainLayout";
import { LoginPage, ProfilePage } from "../../../pages/AuthPage";
import { LOGIN, PROFILE_SETTING } from "../../../settings/constants";


const LoginRouter = () => {

    return (
        <>
            <Route path={LOGIN} exact>
              <AuthLayout><LoginPage/></AuthLayout>
            </Route>
            <Route path={PROFILE_SETTING} exact>
              <MainLayout><ProfilePage/></MainLayout>
            </Route>
        </>
    )
}

export default LoginRouter;