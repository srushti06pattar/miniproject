import React, { useState } from 'react'
import './Register.css'
import '../../App.scss'
import {Link,NavLink} from 'react-router-dom'
import video from '../../LoginAssets/video.mp4'
import Logo from '../../LoginAssets/logo.png'
import {useAuth} from '../../../contexts/authContext'
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth'

//Import Icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'

const Login = () => {

  const navigate=useNavigate()

  const [email,setEmail]=useState('')
  const [password,setPassowrd]=('')
  const [confirmPassword, setconfirmPassword]=useState('')
  const [isRegistering, setIsRegistering]=useState('')
  const [errorMessage, setErrorMessage]=('')

  const onSubmit=async (e)=>{
    e.preventDefalut()

  }

  return (
    <>
    {userLogged && (<Navigate to={'/home'} replace={true}/>)}
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create and shell Extradoniary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>
          
          <div className="footerDiv flex">
            <span className="text">Have an Account?</span>
            <Link to={'/home'} >
            <button className='btn'>Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="header Div">
            <img src={Logo} alt='Login Logo'/>
            <h1>Let us Know you!</h1>
          </div>

          <form action='' className='form grid'>
           
            <div className='inputDiv'>
              <label htmlFor='username'>UserName</label>
              <div className='inputflex'>
                <FaUserShield className="icon"/>
                <input type='text' id='username' placeholder='Enter Username'/>
              </div>
            </div>
            
            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className='inputflex'>
                <MdMarkEmailRead className="icon"/>
                <input type='email' id='email' placeholder='Enter Your Email'/>
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='inputflex'>
                <BsFillShieldLockFill className="icon"/>
                <input type='password' id='password' placeholder='Enter Password'/>
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Register</span>
              <AiOutlineSwapRight className ="icon"/>
            </button>
            <span className='forgot password'>
              Forgot Your Password? <a href=''>Click here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
export default Login
