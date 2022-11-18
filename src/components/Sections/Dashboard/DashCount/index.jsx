import React from "react";
import Icon from "../../../Icon";
import { formatToMoney } from "../../../../Utils/FormatNumber";

const DashCount = () => {

    return (
        <div className="dash-count">
            <div className="dash-item student-item">
                <div>
                    <p className="dash-number"> {formatToMoney(120000)} </p>
                    <p className="dash-title">Ventes</p>
                </div>
                <div>
                    <span className="dash-icon student-icon"><Icon name="sale" /></span>
                </div>
            </div>
            <div className="dash-item university-item">
                <div>
                    <p className="dash-number">{formatToMoney(120000)}</p>
                    <p className="dash-title">Commandes</p>
                </div>
                <div>
                    <span className="dash-icon university-icon"><Icon name="command" /></span>
                </div>
            </div>
            <div className="dash-item theme-item">
                <div>
                    <p className="dash-number">{formatToMoney(120000)}</p>
                    <p className="dash-title">Clients</p>
                </div>
                <div>
                    <span className="dash-icon theme-icon"><Icon name="subscipber" /></span>
                </div>
            </div>


            <div className="dash-item">
                <div>
                    <p className="dash-number">{formatToMoney(120000)}</p>
                    <p className="dash-title">Menus</p>
                </div>
                <div>
                    <span className="dash-icon"><Icon name="resto" /></span>
                </div>
            </div>
        </div>
    )
}

export default DashCount;