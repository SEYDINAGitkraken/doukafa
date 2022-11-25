import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import FormInput from "../../../Forms/FormInput";
import FormTextArea from "../../../Forms/FormTextArea";
import Icon from "../../../Icon";

const FormCustomer = ({id, link}) =>{

    const [description ,setDescription] = useState('description ...')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState()
    const [errors, setErrors] = useState('')
    const [nameOp, setNameOp] = useState('')

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

    const handleSubmitOp = e =>{
        e.preventDefault()
        setErrors('')
        if(nameOp.trim().length !==0){
            let formData = {
                nameOp
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
            setErrors('Remplissez le champs option!')
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
        <>
            <section className="section-newuser">
                <form action="" className="form-newuser" onSubmit={handleSubmit}>
                    <div  className="newuser-items ">
                        <div className="form-content">
                            <div className="form-wrap">
                                <FormInput
                                    placeholder="Prénom"
                                    type = "text"
                                    value={firstname}
                                    onChange={ e => setFirstname(e.target.value) }
                                >
                                    <Icon name='user-form'/>
                                </FormInput>
                                <FormInput
                                    placeholder="Nom"
                                    type = "text"
                                    value={lastname}
                                    onChange={ e => setLastname(e.target.value) }
                                >
                                    <Icon name='user-form'/>
                                </FormInput>
                            </div>
                            <div className="form-wrap">
                                <FormInput
                                    placeholder="E-mail"
                                    type = "text"
                                    value={email}
                                    onChange={ e => setEmail(e.target.value) }
                                >
                                    <Icon name='envelop'/>
                                </FormInput>
                                <FormInput
                                    placeholder="Téléphone"
                                    type = "text"
                                    value={phone}
                                    onChange={ e => setPhone(e.target.value) }
                                >
                                    <Icon name='telephone'/>
                                </FormInput>
                            </div>
                            
                            <div className="form-toggle">
                                <FormTextArea cols="30" rows="5"
                                    value={description}
                                    onChange={e=>setDescription(e.target.value)}
                                >   
                                </FormTextArea>
                            </div>
                        </div>
                    </div>
                    <div className="newuser-items">
                        <div className="newuser-item">
                            <div className="head-newuser">
                                <h3>Enrégistrement</h3>
                            </div>
                            
                            <div className="foot-newuser">
                                <button className="btn-save btn">Enregister</button>
                                <button className="btn-publish btn">Publié</button>
                            </div>
                        </div>
                        
                    </div>
                </form>

            <ToastContainer />
            </section>
        
        </>
    )
}

export default FormCustomer;