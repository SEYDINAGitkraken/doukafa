import React from "react";
import ButtonAdding from "../../../components/ButtonAdding";
import ListingCustomer from "../../../components/Sections/Customers/ListingCustomer";
import Separator from "../../../components/Separator";
import { CUSTOMER_NEW } from "../../../settings/constants";

const CustomerPage = () => {

    return (
        <>
            <div className="container">
                <ButtonAdding link={CUSTOMER_NEW} />
                <Separator/>
                <ListingCustomer/>
            </div>
        </>
    )
}

export default CustomerPage