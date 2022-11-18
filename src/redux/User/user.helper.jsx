import APIFetch from "../../Utils/APIFetch"
import Fetch from "../../Utils/Fetch"

export const loginUser = async( username, password ) => {
    const data = {username, password}
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch('http://134.122.25.141/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                return {
                    user: {
                        userRoles: data.roles,
                        ...data
                    }
                }
            })
            .catch(err=>{
                return {
                    error: err
                }
            })
    
}