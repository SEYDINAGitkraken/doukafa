import React from "react";
import { formatToMoney } from "../../../../Utils/FormatNumber";


const SaleTotal = () => {

    return (
        <div className="card saleTotal">
            <h1 className="title">Ventes du jour (fr)</h1>
            <div className="saleTotal-prix"><p className="dash-number"> {formatToMoney(120000)} </p></div>
        </div>
    )
}

export default SaleTotal