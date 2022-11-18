import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import face from "./../../assets/images/sociaux/facebook.png";
import inst from "./../../assets/images/sociaux/instagram.png";
import tweet from "./../../assets/images/sociaux/tweeter.png";
import yout from "./../../assets/images/sociaux/youtub.png";

const Footer = ()=>{

    const handleLink = (name, target='_blank') => {
        window.open(name, target);
    }

    return(
        <footer className="footer reveal">
            <div className="foot-head container">
                <h2 className="foot-title reveal_1">Get in touch with us</h2>
                <p className="foot-para reveal_2">We are an insight and behavior-drivenn creative digital enterprise. A full services 
Digital Creative enterprise Specializingin: Video Production, wed Design, Branding, ... </p>
            </div>
            <div className="foot-body grid3 container">
                <div className="foot-body-item reveal_3">
                    <h2 className="foot-title2">SANSOFTIC</h2>
                    <ul>
                        <li className="foot-item"><Link to='/' className="foot-nav-link trans-border1">Accueil</Link></li>
                        <li className="foot-item"><Link to='#services' className="foot-nav-link trans-border1">Services</Link></li>
                        <li className="foot-item"><Link to='#contacts' className="foot-nav-link trans-border1">Contacts</Link></li>
                        <li className="foot-item"><Link to='#abouts' className="foot-nav-link trans-border1">About</Link></li>
                        <li className="foot-item"><Link to='' className="foot-nav-link trans-border1">Blog</Link></li>
                    </ul>
                </div>
                <div className="foot-body-item reveal_4">
                    <h2 className="foot-title2">Contact us</h2>
                    <ul>
                        <li className="foot-item"><Link to='' className="foot-icon"><Icon name='telephone' /><span className="foot-contact">+ (223) 91 92 32 37</span></Link></li>
                        <li className="foot-item"><Link to='' className="foot-icon"><Icon name='envelop'/><span className="foot-contact">ib@sansoftic.net</span></Link></li>
                        <li className="foot-item"><Link to='' className="foot-icon"><Icon name='map'/><span className="foot-contact">Yirimadjo Daillobougou</span> </Link></li>
                    </ul>
                </div>
                <div className="foot-body-item reveal_5">
                    <h2 className="foot-title2">Reseaux sociaux</h2>
                    <ul className="foot-social">
                        <li><Link to=""><img src={face} alt="" className="foot-img" /></Link> </li>
                        <li><Link to="" ><img src={inst} alt="" /></Link> </li>
                        <li><Link to="" ><img src={tweet} alt="" /></Link> </li>
                        <li><Link to="" ><img src={yout} alt="" /></Link> </li>
                    </ul>
                    <h2 className="foot-title2">Langues</h2>
                    <ul className="foot-social">
                        <li><span className="foot-social-link" onClick={()=>handleLink("https://sansoftic.net", "_self")}>Français</span> </li>
                        <li><span className="foot-social-link foot-social-en" onClick={()=>handleLink("https://en.sansoftic.net", "_self")}>English</span> </li>
                    </ul>
                </div>
            </div>
            <div className="foot-footer container reveal_6">
                <div>SANSOFTIC</div>
                <div>@2022 copyrith sansoftic</div>
            </div>
            
        </footer>
    );
}

export default Footer;