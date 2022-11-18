import React from "react";
import ButtonAdding from "../../../components/ButtonAdding";
import ListingMenu from "../../../components/Sections/Menus/ListingMenu";
import Separator from "../../../components/Separator";
import { MENU_NEW } from "../../../settings/constants";

const MenuPage = () => {

    return (
        <>
            <div className="container">
                <ButtonAdding link={MENU_NEW} />
                <Separator/>
                <ListingMenu/>
            </div>
        </>
    )
}

export default MenuPage