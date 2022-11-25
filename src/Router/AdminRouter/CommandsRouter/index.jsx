import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import { AllCommandsPage, MenusOfDayPage, CommandCustomerPage } from "../../../pages/AdminPage/CommandsPage";
import { COMMANDS, COMMAND_CUSTOMER, MENU_OF_DAY } from "../../../settings/constants";


const CommandsRouter = () => {

    return (
        <>
            <Route path={MENU_OF_DAY} exact>
                <MainLayout><MenusOfDayPage /></MainLayout>
            </Route>
            <Route path={COMMANDS} exact>
              <MainLayout><AllCommandsPage/></MainLayout>
            </Route>
            <Route path={COMMAND_CUSTOMER} exact>
              <MainLayout><CommandCustomerPage/></MainLayout>
            </Route>
        </>
    )
}

export default CommandsRouter;