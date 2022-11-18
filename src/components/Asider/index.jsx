import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import Icon from "../Icon";

import img from '../../assets/logo.png';
import { CUSTOMER, MENUS, SALE } from "../../settings/constants";


const Asider = () =>{
    const url = useLocation();
    const dispatch = useDispatch();

    const handleActive = (subpath) =>{

        const path = url.pathname
        const bool = path.indexOf(subpath)
        if(bool!==-1) return true
        return false
    }

    

    useEffect(() =>{
        
    }, [])

    return (
        <aside className="asidBar">
            <div className="asid-logo">
                <Link to='/'>
                    <img src={img} alt="" className="asid-img img" />
                </Link>
                
            </div>
            <nav className="asid-nav">
                <div className="nav-item">
                    <h2 className="nav-title"><span className="asid-text">dashboard</span></h2>
                    <ul className="asid-items">
                        <li className="asid-item">
                            <Link to={MENUS} className={handleActive(MENUS) ? "asid-link active-nav" : "asid-link"}>
                                <Icon name="resto"/> <span className="asid-text">Menus</span>
                            </Link>
                        </li>
                        <li className="asid-item">
                            <Link to={SALE} className={handleActive(SALE) ? "asid-link active-nav" : "asid-link"}>
                                <Icon name="sale"/> <span className="asid-text">Ventes</span>
                            </Link>
                        </li>
                        <li className="asid-item">
                            <Link to= {CUSTOMER} className={handleActive(CUSTOMER) ? "asid-link active-nav" : "asid-link"}>
                                <Icon name="customer"/> <span className="asid-text">Clients</span>
                            </Link>
                        </li>
                    </ul>
                </div>                
                
            </nav>
        </aside>
    );
}

export default Asider;