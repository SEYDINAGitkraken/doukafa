import React, { useState } from "react";
import Asider from "../../components/Asider";
import Header from "../../components/Header";
import Icon from "../../components/Icon";

const MainLayout = (props) => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () =>{
        if(toggle) {
            setToggle(false)
            return;
        }
        setToggle(true)
    }

    return (
        <div className="main-layout">
                <div className={toggle ? "main-aside asid-toggle" : "main-aside"}>
                    <span className="asid-menu" onClick={handleToggle}>
                        <Icon name="menu"/>
                    </span>
                    <Asider/>
                </div>
                <div className="main-head">
                    <Header/>
                </div>
                <div className="main-content">
                    { props.children }
                </div>
            </div>
    )
}

export default MainLayout