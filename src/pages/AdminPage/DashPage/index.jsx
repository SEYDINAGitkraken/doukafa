import React from "react";
import DashCount from "../../../components/Sections/Dashboard/DashCount";
import HistoDay from "../../../components/Sections/Dashboard/HistoDay";
import HistoSale from "../../../components/Sections/Dashboard/HistoSale";
import SaleTotal from "../../../components/Sections/Dashboard/SaleTotal";
import ListCustomer from "../../../components/Sections/Dashboard/ListCustomer";
import StatFidelity from "../../../components/Sections/Dashboard/StatFidelity";
import Separator from "../../../components/Separator";

const DashPage = () =>{

    return (
        <>
            <div className="grid2 container">
                <DashCount/>
                <StatFidelity/>
            </div>
            <Separator/>
            <div className="histoSale container">
                <div>
                    <HistoDay/>
                </div>
                <SaleTotal/>
            </div>
            <HistoSale/>
            <div className="container">
                <ListCustomer/>
            </div>
            <Separator/>
        </>
        
    )
}

export default DashPage