import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { COMMAND_BOTH } from "../../../../settings/constants";
import { formatToMoney } from "../../../../Utils/FormatNumber";
import FormInput from "../../../Forms/FormInput";
import Icon from "../../../Icon";

const mapState = ({cart}) => ({
    currentCart: cart.currentCart,
    quantity: cart.quantity,
    totals: cart.totals
})
const CommandValid = () => {

    const [phone, setPhone] = useState('')
    const { currentCart, quantity, totals } = useSelector(mapState);

    const handleSubmit = e =>{
        e.preventDefault()
        setErrors('')
        const btn = e.nativeEvent.submitter.innerText
        let publishing = false
        if (btn==="Publié") {
            console.log("Publié")
            publishing = true
        }else if (btn==="Enregister") {
            publishing = false
            console.log("Enregister")
        }
        
        if(name.trim().length !==0 && price.trim().length !==0 && description.trim().length !==0){
            let formData = {
                name, description, price, options, publish: publishing
            }
            
            const promise = APIFetch({
                headers:{'Content-Type': 'application/json'},
                BASEURL: 'http://localhost:9000/api/o',
                PATH_SEARCH: 'personnels/create',
                PATH_METHOD: 'POST',
                formData
            })
            promise
            .then(result =>{
                setResults(result)
                //setIsloading(isLoading)
                toast.success('Adding user',{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: false,
                    bodyClassName:"toastify-color"
                })
                resetForm()
                navigate(PLANS)
            })
            .catch(err =>{
                setErrors(err)
                
            })

            
        }else{
            setErrors('Remplissez touts les champs!')
        } 

        if (errors!=='') {
            toast.error('Error user',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: false,
                bodyClassName:"toastify-color"
            })
        }
        

    }

    return (
        <div>
            <form action="" className="form-newuser" onSubmit={handleSubmit}>
                    <div  className="newuser-items ">
                        <div className="form-content">
                            
                            <div className="form-wrap">
                                <FormInput
                                    placeholder="Téléphone"
                                    type = "text"
                                    value={phone}
                                    onChange={ e => setPhone(e.target.value) }
                                >
                                    <Icon name='tel'/>
                                </FormInput>
                            </div>
                            
                        </div>
                    </div>
                    <div className="newuser-items">
                        <div className="newuser-item">
                            <div className="head-newuser">
                                <h3>Payement</h3>
                            </div>
                            <div className="head-newuser">
                                {totals && (
                                    <span className="title">Totals: {formatToMoney(totals)} fr</span>
                                )}
                                <p>Vous pouvez <span className="text-primary">valider</span> ou <span className="text-complete">enrégister</span> la commande</p>
                            </div>
                            
                            <div className="foot-newuser">
                                <button className="btn-save btn">Enregister</button>
                                <Link to={COMMAND_BOTH} className="btn-publish btn">Valider</Link>
                            </div>
                        </div>
                        
                    </div>
                </form>
            <ToastContainer />
        </div>
    )
}

export default CommandValid