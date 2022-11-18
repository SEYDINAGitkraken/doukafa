import React from "react";

const AuthLayout = (props) => {

    return (
        <div className="register-layout">
            <div className="register-children">
                { props.children }
            </div>
        </div>
    )
}

export default AuthLayout