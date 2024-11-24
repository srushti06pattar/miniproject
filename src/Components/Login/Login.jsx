import React,{useState} from 'react'
import './Login.css'
import '../../App.scss'
import {Link,Navigate} from 'react-router-dom'
import video from '../../LoginAssets/video.mp4'
import Logo from '../../LoginAssets/logo.png'
import { doSignInWithEmailAndPassword,doSignInWithGoogle } from '../../firebase/auth'
import { useAuth } from '../../Context/authContext'

//Import Icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {

  const { userLoggedIn }=useAuth()

  const [email, setEmail]=useState('')
  const [password, setPassowrd]=useState('')
  const [isSigningIn, setIsSigningIn]=useState(false)
  const [errorMessage, setErrorMessage]=useState('')

  const onSubmit=async (e)=>{
    e.preventDefault()
    if(!isSigningIn){
      setIsSigningIn(true)
      await doSignInWithEmailAndPassword(email,password)
    }
  }

  const onGoogleSignIn=(e)=>{
    e.preventDefault()
    if(!isSigningIn){
      setIsSigningIn(true)
      doSignInWithGoogle().catch(err => {
        setIsSigningIn(false)
      })
    }

    const onGoogleSignIn=(e)=>{
      e.preventDefault()
      if(!isSigningIn){
        setIsSigningIn(true)
        doSignInWithGoogle().catch(err => {
          setIsSigningIn(false)
        })
      }
    }
  }
  return (
    <div>{userLoggedIn && (<Navigate to={'/home'} replace={true}/>)}
    
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create and shell Extradoniary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>
          
          <div className="footerDiv flex">
            <span className="text">Don't Have an Account?</span>
            <Link to={'/register'} >
            <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="header Div">
            <img src={Logo} alt='Login Logo'/>
            <h1>Welcome Back!</h1>
          </div>

          <form action='' className='form grid'>
            <span className='showMessage'>Login Status will go here</span>
            <div className='inputDiv'>
              <label htmlFor='username'>UserName</label>
              <div className='inputflex'>
                <FaUserShield className="icon"/>
                <input type='text' id='username' placeholder='Enter Username'/>
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
              <span>Login</span>
              <AiOutlineSwapRight className ="icon"/>
            </button>
            <span className='forgot password'>
              Forgot Your Password? <a href=''>Click here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
  

}
export default Login