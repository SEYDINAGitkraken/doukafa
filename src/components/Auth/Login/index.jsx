import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import  {DASH} from "../../../settings/constants";

//image
import img from "../../../assets/logo.png"

// components
import Icon from '../../Icon';
import FormInput from '../../Forms/FormInput';
import { useDispatch, useSelector } from 'react-redux';

const mapState = ({user}) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
})

const Login = () =>{
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const  [btn, setBtn] = useState(false);
    const [error, setError] = useState('');
    const { currentUser, userErr } = useSelector(mapState);

    const navigate = useHistory(); 
    const dispatch = useDispatch()

    const resetForm = () =>{
        setPseudo('')
        setPassword('')
    }

    const handleTest = () =>{
        
        const promise = Fetch({
            headers:{'Content-Type': 'application/json'},
            PATH_SEARCH: 'cartes',
            PATH_METHOD: 'GET'
        })
        promise
        .then(result =>{
            console.log(result)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    useEffect(() =>{
        if(false){
            resetForm()
            navigate.push('/')
        }
        if(password !=='' && pseudo !==''){
            setBtn(true)
        }else if(btn){
            setBtn(false)
        }
    },[pseudo, password, btn, currentUser])

    const handleSubmit = (e) => {
        if(password !=='' && pseudo !==''){
            e.preventDefault()
            dispatch(emailSignInStart({email:pseudo, password:password}))
            
        }else{
            setError('Identifiant ou mot de passe incorrecte')
        }
    };


    return (
        <div className='login'>
            <div className='login-logo'>
                <img src={img} alt="holilink" />
            </div>
            <h1 className='title'>Access Your Account</h1>
            <form onSubmit={handleSubmit} className='form'>

                <FormInput
                    placeholder="Identifiant"
                    type = "text"
                    onChange={ e => setPseudo(e.target.value) }
                    label="username"
                >
                    <Icon name='user-form'/>
                </FormInput>
                <FormInput
                    label="mot de passe"
                    placeholder="Mot de passe"
                    type = 'password'
                    onChange={e=> setPassword(e.target.value)}
                >
                    <Icon name='lock'/>
                </FormInput>
                <div className="register-btn">
                    <button disabled={!btn} className="btn">Se connecter</button>
                </div>
            </form>
            
        </div>
    );
}

export default Login