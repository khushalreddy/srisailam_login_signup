import React,{useState} from 'react'
import img from '../../logos/image.png'
import '../layout/main.css'

import SuccessfulLogin from '../pages/SuccessfulLogin';
const Register = (props) => {
    const [user,setUser] = useState({
        name :"",
        mobilenumber:"",
        password1:"",
        password2:""

    })
    const[alerts,setalerts] = useState({name:false,mobilenumber:false,password1:false,password2:false})

    const { name,mobilenumber,password1,password2} = user;
    const[loggedIn,setLoggedIn] = useState(false)

    const onChange = e => {setUser({ ...user, [e.target.name]: e.target.value });setalerts({mobilenumber:false,password1:false,password2:false,name:false})}

    const onSubmit = e =>{
        e.preventDefault();
        alert(mobilenumber)
        alert(password1)
        if(name== "" && mobilenumber == "" && password1 == "" && password2 == ""){
            setalerts({name:true,mobilenumber:true,password1:true,password2:true})
        }
        else
        {
            props.history.push('/success')
            setLoggedIn(true)
        }
        console.log("Register Submit");
    }
  return (
      <div className='wide'>
           {loggedIn?<SuccessfulLogin></SuccessfulLogin>:
    <div className='signup-main'>
        <div className='signin-left'>
            <h2>Sign Up</h2>
            <h3>Create an Account</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Display Name<span className='redcolor'>*</span></label>
                    <input type = "text" name='name' value={name} onChange={onChange} />
                </div>
                {alerts['name']?<p style = {{color:"red"}}> please provide valid name</p>:null}
                <div className='form-group'>
                    <label htmlFor='mobilenumber'>Mobile Number<span className='redcolor'>*</span></label>
                            <input type="tel" name="mobilenumber" value={mobilenumber} onChange={onChange} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" oninvalid="this.setCustomValidity('Not Valid')" oninput="setCustomValidity(' ')" />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password<span className='redcolor'>*</span></label>
                    <input type="password" name="password1" value ={password1} onChange ={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Confirm Password<span className='redcolor'>*</span></label>
                    <input type="password" name="password2" value ={password2} onChange ={onChange} />
                </div>
                <div class="form-check"><br/><p class="sd-errorr"></p><label className="form-check-label" for="exampleCheck1">By signing up, you agree to the I agree to the <a style={{color:'#2f3193', fontStyle:'bold'}}>Terms &amp; Conditions</a> and the<a> Privacy Policy</a></label></div>
                <input type="submit" value="Register >"  className="button-login" />
            </form>
            <div class="l-left-bottom"><p>Already have an account ?<a href=""><a style={{color: 'rgb(47, 50, 147)', fontWeight: "600"}}>Sign In</a></a></p></div>
        </div>
        <div className='s-right'>
        <img  className ="image-class" src={img} />
        </div>
    </div>
}
    </div>
  )
}

export default Register