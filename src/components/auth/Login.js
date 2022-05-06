import React, { useContext, useState } from 'react'
import img from '../../logos/image.png'
import '../layout/main.css'
import alertContext from '../../context/alert/alertContext'
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import {useForm} from 'react-hook-form'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import SuccessfulLogin from '../pages/SuccessfulLogin';
const Login = (props) => {
    const[alerts,setalerts] = useState({mobilenumber:false,password:false})
    const [user, setUser] = useState({
        mobilenumber: "",
        password: "",
        showPassword: false,
    })
    const { register, handleSubmit, errors } = useForm() 
    //const alertContext = useContext(alertContext)
    
    //const {setAlert} = alertContext
    const { mobilenumber, password } = user;

    const handleClickShowPassword = () => {
        setUser({ ...user, showPassword: !user.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handlePasswordChange = (prop) => (event) => {
        {setUser({ ...user, [prop]: event.target.value });setalerts({password:false})}
    };


    const onChange = e => {setUser({ ...user, [e.target.name]: e.target.value });setalerts({mobilenumber:false,password:false})}
    const[loggedIn,setLoggedIn] = useState(false)
    const onSubmit = e => {
        e.preventDefault();
        alert(mobilenumber)
        alert(password)
        if(mobilenumber == "" && password == ""){
            setalerts({mobilenumber:true,password:true})
        }
        else
        {
            props.history.push('/success')
            setLoggedIn(true)
        }
        
    
}
    return (
        <div className='wide'>
            {loggedIn?<SuccessfulLogin></SuccessfulLogin>:
            <div className='signup-main'>
                <div className='signin-left'>
                    <h2>Sign In</h2>
                    <h3>Login to your Account</h3>
                    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>

                        <div className='form-group'>

                            <label htmlFor='mobilenumber'>Mobile Number<span className='redcolor'>*</span></label>
                            <input type="tel" name="mobilenumber"  maxLength = "10" value={mobilenumber} onChange={onChange}  />
                        </div>
                        {alerts['mobilenumber']?<p style = {{color:"red"}}> please provide valid input number</p>:null}
                        <div className='form-group'>
                            <label htmlFor='password'>Password<span className='redcolor'>*</span></label>
                            <Input
                                type={user.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange("password")}
                                value={user.password}
                            
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]).{8,}"
                                endAdornment={
                                    <InputAdornment position="end"> 
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {user.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            
                        </div>
                        {alerts['password']?<p style = {{color:"red"}}> please provide password</p>:null}
                        <div className='forgot-password'>
                            <a href="#" style={{ color: "rgb(47, 50, 147)", fontweight: "600" }}>Forgot password?</a>
                        </div>
                        <input type="submit" value="Login >" className="button-login" />
                        <p style={{ color: "rgb(24, 24, 24)" }}>Have trouble signing in ?<span style={{ marginLeft: '5px' }}><a href="" style={{ color: "rgb(47, 50, 147)", fontWeight: "600" }}>Get Help</a></span></p>
                    </form>
                    <div class="l-left-bottom"><p>Dont have an account ? <a href='/register'>Sign Up</a></p></div>
                </div>
                <div className='s-right'>
                    <img className="image-class" src={img} />
                </div>
            </div>}
        </div>
    )
}

export default Login