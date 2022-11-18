import React from "react";
import NewCustomer from "../../../../components/Sections/Customers/NewCustomer";
import Separator from "../../../../components/Separator";

const AddCustomerPage = () => {

    return (
        <>
            <div className="container">
                <Separator/>
                <NewCustomer/>
            </div>
        </>
    )
}

export default AddCustomerPage;