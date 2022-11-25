import React, { useState } from "react";
import Icon from "../../../Icon";
import Separator from "../../../Separator";
import img from '../../../../assets/images/29.jpg';
import { formatToMoney } from "../../../../Utils/FormatNumber";
import { cartAddOne } from "../../../../redux/Cart/cart.action";
import { useDispatch } from "react-redux";


const MenusOfDay = () => {
    
    const [toggle, setToggle] = useState(1)
    const dispatch = useDispatch()
    const data = [
        {
            'id':1,
            'price':20,
            'name':'menu1'
        },
        {
            'id':2,
            'price':25,
            'name':'menu2'
        },
        {
            'id':3,
            'price':10,
            'name':'menu3'
        },
        {
            'id':4,
            'price':5,
            'name':'menu4'
        }

    ]

    const handleAddCart = (_id) => {
        const cart = data.find(
            cartItem => cartItem.id === _id
        )
        dispatch(cartAddOne(cart))
    }

    return (
        <>
            <Separator/>
            <div className="container">
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
                                <div className="menusofday-price">{formatToMoney(Number(50))} fr</div>
                                <div className="menusofday-cart">
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
        </>
        
    )
}

export default MenusOfDay