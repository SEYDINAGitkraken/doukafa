import React from "react";
import { ToastContainer } from "react-toastify";
import FormCheckbox from "../../../Forms/FormCheckbox";
import FormTextArea from "../../../Forms/FormTextArea";
import Icon from "../../../Icon";

const FormMenu = ({id, link}) => {

    const [description ,setDescription] = useState('description ...')
    const [name, setName] = useState('')
    const [platform, setPlatform] = useState('')
    const [options, setOptions] = useState([])
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
        <section className="section-newuser">
            <form action="" className="form-newuser" onSubmit={handleSubmit}>
                <div  className="newuser-items ">
                    <div className="form-content">
                        <div className="form-wrap">
                            <FormInput
                                placeholder="Nom"
                                type = "text"
                                value={name}
                                onChange={ e => setName(e.target.value) }
                            >
                                <Icon name='edit'/>
                            </FormInput>
                            <FormInput
                                placeholder="Prix"
                                type = "text"
                                value={platform}
                                onChange={ e => setPlatform(e.target.value) }
                            >
                                <Icon name='money'/>
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
                    <div className="newuser-item ">
                        <div className="head-newuser">
                            <h3>Fonctions</h3>
                        </div>
                        <div className="body-newuser newuser-spacing">
                            <FormCheckbox 
                                label= 'Midi'
                                onChange={e => handleOption(e)}
                                name = 'midi'
                            />
                            <FormCheckbox 
                                label = 'Boisson'
                                name = 'boissont' 
                                onChange={e => handleOption(e)}
                            />
                        </div>
                        
                    </div>
                </div>
            </form>

            <div className="foot-newuser form-thow">
                <form action="" className="newuser-form2" onSubmit={handleSubmitOp} >
                    <div className="form2-group">
                        <input type="text" className="form2-input" placeholder="catégorie" onChange={e =>setNameOp(e.target.name)} />
                        <button className="btn-form2"> <Icon name="plus"  /> </button>
                   </div>
                </form>
           </div>
           <ToastContainer />
        </section>
    )
}

export default FormMenu;