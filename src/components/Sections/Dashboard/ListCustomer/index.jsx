import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Icon from "../../../Icon";


const ListCustomer = () => {

    const handleCLassName = (word) =>{
        if(word==='Complete') return 'text-complete'
        if(word==='Cancelled') return 'text-danger'
        if(word==='Pending') return 'text-yellow'
        return 'text-primary'
    }

    const handleDelete = itemID =>{
        const promise = APIFetch({
            headers:{'Content-Type': 'application/json'},
            BASEURL: 'http://localhost:9000/api/o',
            PATH_SEARCH: 'personnels/'+itemID,
            PATH_METHOD: 'DELETE'
        })
        promise
        .then(result =>{
            // console.log(result)
            toast.error('Delete user ',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: false,
                bodyClassName:"toastify-color"
            })
            
        })
        .catch(err =>{
            console.log(err)
        })
    }


    return (
        <div className="listing card">
            <h1 className="title">Listes des clients</h1>
            <div className="listing-head">
                <div className="listing-show">
                    <form action="" className="form">
                        <label htmlFor="show" className="listing-label">Show</label>
                        <select name="" id="show" className="listing-select">
                            <option value="5">5 rows</option>
                            <option value="10">10 rows</option>
                            <option value="15">15 rows</option>
                            <option value="20">20 rows</option>
                            <option value="30">30 rows</option>
                        </select>
                    </form>
                </div>
                <div>
                    
                </div>
            </div>
            <div className="listing-body">
                <table className="listing-table">
                    <thead className="listing-thead">
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Abonnés</th>
                            <th>Prix (Fr)</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="listing-tbody">
                        <tr>
                            <td>1</td>
                            <td>Saturday, February 3rd, 2018</td>
                            <td>abonné 1</td>
                            <td>50 000</td>
                            <td><span className={handleCLassName('Cancelled')} >Cancelled</span></td>
                            <td>
                                <div className="table-action">
                                    <Link to="" className="listing-link listing-add">
                                        <Icon name="edit"/>
                                    </Link>
                                    <Link to='' className="listing-link listing-edit btn-edit" >
                                        <Icon name="check"/>
                                    </Link>
                                    <span className="listing-link listing-del btn-del" onClick={() =>{handleDelete(3)}} >
                                        <Icon name="del"/>
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
            <div className="listing-foot">
                <div>
                    <button className="btn btn-listing">Preview</button>
                </div>
                <div className="foot-middle">
                    <div>Page</div>
                    <div><input type="number" name="age" id="age" min="1" max="10" step="2" className="listing-rang"/></div>
                    <div>Of 5</div>
                </div>
                <div>
                    <button className="btn btn-listing">Preview</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ListCustomer