import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { COMMAND_CUSTOMER, CUSTOMER, MENU_OF_DAY } from "../../../../settings/constants";
import { formatToMoney } from "../../../../Utils/FormatNumber";
import Icon from "../../../Icon";
import Separator from "../../../Separator";
import img from '../../../../assets/images/29.jpg';
import { cartAddOne, cartDeleteOne, cartRecete } from "../../../../redux/Cart/cart.action";



const mapState = ({cart}) => ({
    currentCart: cart.currentCart,
    quantity: cart.quantity
})
const CartCommands = () => {

    const dispatch = useDispatch()
    const { currentCart, quantity } = useSelector(mapState);

    const handleAddCart = (_id) => {
        const cart = currentCart.find(
            cartItem => cartItem.id === _id
        )
        dispatch(cartAddOne(cart))
    }

    const handleSubCart = (_id) => {
        const cart = currentCart.find(
            cartItem => cartItem.id === _id
        )
        dispatch(cartDeleteOne(cart))
    }

    const handleRecete = () => {
        dispatch(cartRecete())
    }

    const handleCarts = () =>{
        let i = 1
        return currentCart.map(c => {
            return <tr className="" key={c.id}>
            <td>{i++}</td>
            <td className="menusofday-item-head">
                <img src={img} alt="" />
            </td>
            <td className="menusofday-item-body">
                <h2 className="title2">{c.name}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non alias quae aspernatur molestiae quis.</p>
            </td>
            <td>{c.quantity}</td>
            <td className="command-foot">
                <div className="command-price">{formatToMoney(Number(c.price))} fr</div>
                <div className="command-cart" onClick={() => {handleAddCart(c.id)}}>
                    <Icon name="cart"/>
                    <span>+</span>
                </div>
                <div className="command-cart command-sub" onClick={() => {handleSubCart(c.id)}}>
                    <Icon name="cart"/>
                    <span>-</span>
                </div>
            </td>
        </tr>
        })
    }

    return (
        <>
            <Separator/>
            <div className="container">
                <div className="listing card">
                    <h1 className="title">Listes des clients</h1>
                    <div className="listing-head">
                        
                        <div>
                            
                        </div>
                    </div>
                    <div className="listing-body">
                        <table className="listing-table">
                            <thead className="listing-thead">
                                <tr>
                                    <th>#</th>
                                    <th>I.Plat</th>
                                    <th>C.Plat</th>
                                    <th>N.Plat</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="listing-tbody">
                                {currentCart && (
                                    <>{handleCarts()}</>
                                )}
                            </tbody>
                            
                        </table>
                    </div>
                    <div className="listing-foot">
                        <div>
                            <Link to={MENU_OF_DAY} className="btn btn-add">Touts Menus</Link>
                        </div>
                        <div>
                            <span className="btn btn-danger" onClick={() => {handleRecete()}}>Annuler la commande</span>
                        </div>
                        <div>
                            <Link to={COMMAND_CUSTOMER} className="btn">Suivant</Link>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
        
    )
}

export default CartCommands;