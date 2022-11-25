import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import { AllCommandsPage, MenusOfDayPage } from "../../../pages/AdminPage/CommandsPage";
import { COMMANDS, MENU_OF_DAY } from "../../../settings/constants";


const CommandsRouter = () => {

    return (
        <>
            <Route path={MENU_OF_DAY} exact>
                <MainLayout><MenusOfDayPage /></MainLayout>
            </Route>
            <Route path={COMMANDS} exact>
              <MainLayout><AllCommandsPage/></MainLayout>
            </Route>
        </>
    )
}

export default CommandsRouter;