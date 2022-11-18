import React from "react";
import { Link } from "react-router-dom";

import Icon from "../Icon";

const ButtonAdding = ({ link }) =>{

    return (
        <div className="btn-adding">
            <Link to={link} className="btn-add"><span>nouveau</span> <Icon name="plus"/></Link>
        </div>
    );

}

export default ButtonAdding;