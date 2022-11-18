import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import DashPage from "../../../pages/AdminPage/DashPage";
import { HOME } from "../../../settings/constants";

const DashRouter = () => {

    return (
        <>
            <Route path={HOME} exact>
              <MainLayout><DashPage/></MainLayout>
            </Route>
        </>
    )
}

export default DashRouter;