import loginImage from "../../assets/others/authentication2.png"
import bgImage from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from "react";

const Login = () => {

  useEffect( () => {
    loadCaptchaEnginge(6); 
  } , [])

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  }
    return (
        <div className="hero min-h-screen "  style={{ backgroundImage: `url(${bgImage})` }}>
<div  style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}>

   <div className="hero-content flex-col lg:flex-row lg:gap-48">
  <div className=" flex-1" >
    <img className="m-16" src={loginImage} alt=""/>
    </div>  
    
    <div className="flex-1 w-full lg:mr-48 ">
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          
        </div>

        <div className="form-control">
          <label className="label">
         <LoadCanvasTemplate />
          </label>
          <input type="password" name="captcha" placeholder="Type the text above" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>


        <div className="form-control mt-6">
     
          <input className="btn bg-[#D1A054] border-0" type="submit" value="Sign in" />

          <p className="text-[#D1A054] text-center mt-8">New here? <span className=" font-bold">Create a New Account</span></p>

          <p className=" text-center text-[#444444] mt-8" >Or sign in with</p>

          <div></div>
        </div>
      </form>
    </div>
    
  </div>
 </div>
</div>
    );
};

export default Login;