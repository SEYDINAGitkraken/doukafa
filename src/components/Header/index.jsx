import React, {useState}  from "react";
import { Link } from "react-router-dom";

import FormInput from "../Forms/FormInput";
import Icon from "../Icon";

import img from "../../assets/images/ib.jpg"
import tot from "../../assets/images/29.jpg"

import { signOutUserStart } from "../../redux/User/user.action";
import { useDispatch, useSelector } from "react-redux";
import { COMMANDS, MENU_OF_DAY, PROFILE_SETTING } from "../../settings/constants";

const mapState = ({cart}) => ({
    currentCart: cart.currentCart,
    quantity: cart.quantity
})
const Header = ()=>{

    const [search, setSearch] = useState('');

    const [toggle, setToggle] = useState(false);
    const [toggleThow, setToggleThow] = useState(false);
    const { currentCart, quantity } = useSelector(mapState);

    const dispatch = useDispatch();

    const handleToggle = ()=>{
        if(toggle){
            setToggle(false)
        }else{
            setToggle(true)
        }
    }

    const handleToggleThow = ()=>{
        if(toggleThow){
            setToggleThow(false)
        }else{
            setToggleThow(true)
        }
    }

    const handleLevel = (level) =>{
        level = parseInt(level)
        if(level<30) return 'text-danger';
        if(level<60 && level>30) return 'text-success';
        if(level<80 && level>60) return 'text-complete';
        return 'text-primary'
    }

    const signOut = () => {
        dispatch(signOutUserStart())
    }

    const handleThinkCart = () => {
        let leng = currentCart.length > 3 ? 3: currentCart.length
        for (let i = 0; i < leng; i++) {
            return currentCart.map(c=>{
                return <div className="notif-toggle-body" key={c.id}>
                    <div className="notives-img">
                        <img src={tot} alt="" />
                    </div>
                    <div>
                        <h3 className="notives-title">Tot</h3>
                        <p>Your website's active users count increased by <span className={handleLevel('28%')}>28%</span> in the last week. Great job!</p>
                    </div>
                    <div className="notif-toggle-price">{c.price} fr</div>
            </div>
            })
            
        }
    }

    return(
        <header className="header">
            <div className="head-item">
                <Link to={MENU_OF_DAY} className="btn btn-add">Faire une commande</Link>
            </div>
            <div className="head-item head-notify" >
                <div className="head-notif" onClick={handleToggleThow}>
                    <span className="notif-icon"><Icon name="panier"/></span>
                    <span className="notif-number">{quantity}</span>
                    <div className={ toggleThow ? "notif-toglle toggle": "notif-toglle notoggle"}>
                        {currentCart && (
                            <>
                                {handleThinkCart()}
                            </>
                        )}
                        <div className="notif-toggle-foot">
                            <Link to={COMMANDS} className="btn-notives">View all notifications</Link>
                        </div>
                    </div>
                </div>
                <div className="head-user flex" onClick={handleToggle}>
                    <div className="head-picture">
                        <img src={img} alt="SI Traor??" />
                    </div>
                    <div className="head-name">
                        SI Traor?? <Icon name="down"/>
                    </div>
                    <div className={ toggle ? "notif-togllethow toggle": "notif-togllethow notoggle"}>
                        <ul className="head-notif-items">
                            <li><Link to='' className="head-notif-link" > <Icon name="user" /> Profile </Link></li>
                            <li><Link to={PROFILE_SETTING}  className="head-notif-link"> <Icon name="setting" /> Setting </Link></li>
                        </ul>
                        <div className="notif-togllethow-foot"><span onClick={signOut} className='logout'> <Icon name="logout"/> Logout </span></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header