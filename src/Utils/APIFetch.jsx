import React from "react";
import axios from "axios";

const APIFetch =({
    BASEURL = "http://134.122.255.141/",
    PATH_SEARCH,
    PATH_METHOD,
    PATH_QUERY = "",
    PATH_PERPAGE = "",
    formData = null,
    initialData = null
}) =>{

    const headers = {'Content-Type': 'application/json'};

    const fetchResults = (formData, searchPerPage = 0, page = 0) => {
        
        return new Promise((resolve, reject) =>{
            axios({
                url: `${ BASEURL }${ PATH_SEARCH }`,
                method: PATH_METHOD,
                data: JSON.stringify(formData),
                headers
            })
            .then(result =>{
                resolve(result);
            })
            .catch(error =>{
                console.log(error);
                reject(error)
            })
        })
   }

    return fetchResults(formData)
}

export default APIFetch;