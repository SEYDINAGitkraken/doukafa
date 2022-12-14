import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import MenuPage from "../../../pages/AdminPage/MenuPage";
import AddMenuPage from "../../../pages/AdminPage/MenuPage/AddMenuPage";
import UpdateMenuPage from "../../../pages/AdminPage/MenuPage/UpdateMenuPage";
import { MENUS, MENU_NEW } from "../../../settings/constants";


const MenuRouter = () => {

    return (
        <>
            <Route path={MENUS} exact>
                <MainLayout><MenuPage /></MainLayout>
            </Route>
            <Route path={MENU_NEW} exact>
                <MainLayout><AddMenuPage /></MainLayout>
            </Route>
            <Route path={MENUS +'-:id'} exact>
                <MainLayout><UpdateMenuPage /></MainLayout>
            </Route>
        </>
    )
}

export default MenuRouter;