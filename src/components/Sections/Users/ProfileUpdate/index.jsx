import React, { useState } from "react";
import FormInput from "../../../Forms/FormInput";
import FormTextArea from "../../../Forms/FormTextArea";
import FormTextareaTags from "../../../Forms/FormTextareaTags";
import Icon from "../../../Icon";
import img from '../../../../assets/images/ib.jpg'
import Separator from "../../../Separator";

const ProfileUpdate = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLasname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [bio, setBio] = useState('Bio')

    return (
        <>
            <div className="container ">
                <Separator/>
                <form className="wrap-profile card">
                    <div className="wrap-profile-head">
                        <div className="profiled-img">
                            <img src={img} alt="" className="img" />
                        </div>
                        <div className="profiled-file">
                            <Icon name="user"/>
                            <span className="profile-file-text">backgound image</span>
                        </div>
                    </div>
                    <div className="wrap-profile-body">
                        <div className="wrapper-profile">
                            <div>
                                <div className="form-wrap">
                                    <div>
                                        <FormInput
                                            placeholder="Nom"
                                            label='Nom'
                                            type = "text"
                                            value={firstname}
                                            onChange={ e => setFirstname(e.target.value) }
                                        />
                                    </div>
                                    <div>
                                        <FormInput
                                            placeholder="Prénom"
                                            label='Prénom'
                                            type = "text"
                                            value={lastname}
                                            onChange={ e => setLasname(e.target.value) }
                                        />
                                    </div>                         
                                </div>
                                <div className="form-wrap">
                                    <div>
                                        <FormInput
                                            placeholder="Email"
                                            label='Email'
                                            type = "text"
                                            value={email}
                                            onChange={ e => setEmail(e.target.value) }
                                        />
                                    </div>
                                    <div>
                                        <FormInput
                                            placeholder="Téléphone"
                                            label='Téléphone'
                                            type = "text"
                                            value={phone}
                                            onChange={ e => setPhone(e.target.value) }
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="profile-head-item">
                                <div className="profile-view-img">
                                    <img src={img} alt="" />
                                </div>
                                <h2 className="title">Seydina Traoré</h2>
                            </div>
                        </div>
                        <div className="form-wrap">
                            <div>
                                <FormTextArea label='Bio' onChange={e => setBio(e.target.value)} />
                            </div>
                            
                        </div>
                        <div className="form-wrap-foot">
                            <FormInput
                                placeholder="ancien mot de passe"
                                type = "password"
                                value={email}
                                onChange={ e => setEmail(e.target.value) }
                            />
                            <FormInput
                                placeholder="nouveau mot de passe"
                                type = "password"
                                value={phone}
                                onChange={ e => setPhone(e.target.value) }
                            />
                            <FormInput
                                placeholder="confimer le mot de passe"
                                type = "password"
                                value={phone}
                                onChange={ e => setPhone(e.target.value) }
                            />
                        </div>
                        
                    </div>
                    <div className="wrap-profile-foot">
                        <div className="btn-padding">
                            <button className="btn btn-add">Changer</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </>
        
    )
}

export default ProfileUpdate