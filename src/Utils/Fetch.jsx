import React from "react";

const Fetch =({
    BASEURL = "http://134.122.255.141/",
    PATH_SEARCH,
    PATH_METHOD,
    PATH_QUERY = "",
    PATH_PERPAGE = "",
    formData = null,
    initialData = null
}) =>{

    const headers = {'Content-Type': 'application/json'};


    const requestOptions = {
        method: PATH_METHOD,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    };


    const fetchResults = (formData, searchPerPage = 0, page = 0) => {
        
        return new Promise((resolve, reject) =>{
            fetch("http://134.122.25.141/"+PATH_SEARCH, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                resolve(json);
                // console.log(json);
            })
            .catch(err => {
                reject(err)
            })
            
        })
   }

    return fetchResults(formData)
}

export default Fetch;