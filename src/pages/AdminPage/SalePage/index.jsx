import React from "react";
import ButtonAdding from "../../../components/ButtonAdding";
import ListingVentes from "../../../components/Sections/Ventes/ListingVentes";
import Separator from "../../../components/Separator";
import { SALE_NEW } from "../../../settings/constants";


const SalePage = () => {
    return(
        <>
            <div className="container">
                <ButtonAdding link={SALE_NEW} />
                <Separator/>
                <ListingVentes/>
            </div>
        </>
    )
}

export default SalePage