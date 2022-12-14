import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import CustomerPage from "../../../pages/AdminPage/CustomerPage";
import AddCustomerPage from "../../../pages/AdminPage/CustomerPage/AddCustomerPage";
import UpdateCustomerPage from "../../../pages/AdminPage/CustomerPage/UpdateCustomerPage";
import { CUSTOMER, CUSTOMER_NEW } from "../../../settings/constants";

const CustomerRouter = () => {

    return (
        <>
            <Route path={CUSTOMER} exact>
                <MainLayout><CustomerPage /></MainLayout>
            </Route>
            <Route path={CUSTOMER_NEW} exact>
                <MainLayout><AddCustomerPage /></MainLayout>
            </Route>
            <Route path={CUSTOMER + '-:id'} exact>
                <MainLayout><UpdateCustomerPage /></MainLayout>
            </Route>
        </>
    )
}


export default CustomerRouter;