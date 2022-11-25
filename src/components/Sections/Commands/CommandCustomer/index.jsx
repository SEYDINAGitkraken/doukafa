import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { formatToMoney } from "../../../../Utils/FormatNumber";
import FormInput from "../../../Forms/FormInput";
import Icon from "../../../Icon";
import Separator from "../../../Separator";
import img from '../../../../assets/images/29.jpg';
import { cartAddOne } from "../../../../redux/Cart/cart.action";
import { COMMAND_BOTH } from "../../../../settings/constants";
import { Link } from "react-router-dom";

const CommandCustomer = () => {

    const [firstname, setfirstName] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const  [phone, setPhone] = useState('')
    const [toggle, setToggle] = useState(1)
    const dispatch = useDispatch()
    const data = [
        {
            'id':1,
            'price':'20',
            'name':'menu1'
        },
        {
            'id':2,
            'price':'25',
            'name':'menu2'
        },
        {
            'id':3,
            'price':'10',
            'name':'menu3'
        },
        {
            'id':4,
            'price':'5',
            'name':'menu4'
        }

    ]

    const handleAddCart = (_id) => {
        const cart = data.find(
            cartItem => cartItem.id === _id
        )
        dispatch(cartAddOne(cart))
    }

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
        <div className="customer-both">
            <Separator/>
            <div className="customer-both-head cart">
                <h1 className="title">Le prix de la commande</h1>
                <p>Les copyright du restaurant</p>
                <ul>
                    <li>regle 1</li>
                    <li>regle 2</li>
                    <li>regle 3</li>
                </ul>
            </div>
            <div className="customer-both-body">
                
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
                                <Link to={COMMAND_BOTH} className="btn-publish btn">Suivant</Link>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
            <div>
                <h1 className="title">Complètez votre commande!</h1>
            <div className="menusofday-toggle-head">
                    <nav className="menusofday-nav">
                        <div className={toggle==1 ? "menusofday-nav-link menusofday-istoggle":"menusofday-nav-link"} onClick={() => setToggle(1)}>Main</div>
                        <div className={toggle==2 ? "menusofday-nav-link menusofday-istoggle":"menusofday-nav-link"} onClick={() => setToggle(2)}>Lunsh</div>
                        <div className={toggle==3 ? "menusofday-nav-link menusofday-istoggle":"menusofday-nav-link"} onClick={() => setToggle(3)}>Dinner</div>
                        <div className={toggle==4 ? "menusofday-nav-link menusofday-istoggle":"menusofday-nav-link"} onClick={() => setToggle(4)}>Drinks</div>
                    </nav>

                </div>
                <div className="menusofday-toggle-content">
                    <div className={toggle==1 ? "grid2 cart menusofday-iscontent": "grid2 cart menusofday"}>
                        <div className="menusofday-item">
                            <div className="menusofday-item-head">
                                <img src={img} alt="" />
                            </div>
                            <div className="menusofday-item-body">
                                <h2 className="title2">menu1</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non alias quae aspernatur molestiae quis.</p>
                            </div>
                            <div className="menusofday-item-foot">
                                <div className="menusofday-price">{formatToMoney(Number(50))} fr</div>
                                <div className="menusofday-cart" onClick={() => {handleAddCart(1)}}>
                                    <Icon name="cart"/>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                        <div className="menusofday-item">
                            <div className="menusofday-item-head">
                                <img src={img} alt="" />
                            </div>
                            <div className="menusofday-item-body">
                                <h2 className="title2">menu1</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non alias quae aspernatur molestiae quis.</p>
                            </div>
                            <div className="menusofday-item-foot">
                                <div className="menusofday-price">{formatToMoney(Number(50))} fr</div>
                                <div className="menusofday-cart" onClick={() => {handleAddCart(2)}}>
                                    <Icon name="cart"/>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                        <div className="menusofday-item">
                            <div className="menusofday-item-head">
                                <img src={img} alt="" />
                            </div>
                            <div className="menusofday-item-body">
                                <h2 className="title2">menu1</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non alias quae aspernatur molestiae quis.</p>
                            </div>
                            <div className="menusofday-item-foot">
                                <div className="menusofday-price">{formatToMoney(Number(50))} fr</div>
                                <div className="menusofday-cart" onClick={() => {handleAddCart(3)}}>
                                    <Icon name="cart"/>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggle==2 ? "grid2 cart menusofday-iscontent": "grid2 cart menusofday"}>
                        <div className="menusofday-item">
                            <div className="menusofday-item-head">
                                <img src={img} alt="" />
                            </div>
                            <div className="menusofday-item-body">
                                <h2 className="title2">menu1</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non alias quae aspernatur molestiae quis.</p>
                            </div>
                            <div className="menusofday-item-foot">
                                <div className="menusofday-price">{formatToMoney(Number(10050))} fr</div>
                                <div className="menusofday-cart">
                                    <Icon name="cart"/>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                        <div className="menusofday-item">
                            <div className="menusofday-item-head">
                                <img src={img} alt="" />
                            </div>
                            <div className="menusofday-item-body">
                                <h2 className="title2">menu1</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non alias quae aspernatur molestiae quis.</p>
                            </div>
                            <div className="menusofday-item-foot">
                                <div className="menusofday-price">{formatToMoney(Number(10000))} fr</div>
                                <div className="menusofday-cart">
                                    <Icon name="cart"/>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                        <div className="menusofday-item">
                            <div className="menusofday-item-head">
                                <img src={img} alt="" />
                            </div>
                            <div className="menusofday-item-body">
                                <h2 className="title2">menu1</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non alias quae aspernatur molestiae quis.</p>
                            </div>
                            <div className="menusofday-item-foot">
                                <div className="menusofday-price">{formatToMoney(Number(1500))} fr</div>
                                <div className="menusofday-cart">
                                    <Icon name="cart"/>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                        <div className="menusofday-item">
                            <div className="menusofday-item-head">
                                <img src={img} alt="" />
                            </div>
                            <div className="menusofday-item-body">
                                <h2 className="title2">menu1</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non alias quae aspernatur molestiae quis.</p>
                            </div>
                            <div className="menusofday-item-foot">
                                <div className="menusofday-price">{formatToMoney(Number(1000))} fr</div>
                                <div className="menusofday-cart">
                                    <Icon name="cart"/>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CommandCustomer