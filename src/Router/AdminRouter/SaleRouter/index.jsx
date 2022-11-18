import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import SalePage from "../../../pages/AdminPage/SalePage";
import { SALE } from "../../../settings/constants";

const SaleRouter = () =>{

    return (
        <>
            <Route path={SALE} exact>
              <MainLayout><SalePage/></MainLayout>
            </Route>
        </>
    )

}

export default SaleRouter