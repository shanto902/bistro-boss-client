import loginImage from "../../assets/others/authentication2.png";
import bgImage from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const captchaRef = useRef();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const value = captchaRef.current.value;
    console.log(value);

    if (validateCaptcha(value) == true) {
      signIn(email, password)
        .then((result) => {
          Swal.fire("Success", "User Logged in Successfully", "success");
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire(`Error ${errorCode}`, `${errorMessage}`, "error");
        });
      navigate(from, { replace: true });
    } else {
      Swal.fire("Captcha Error", "Please Recheck Captcha", "error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}>
          <div className="hero-content flex-col lg:flex-row lg:gap-48">
            <div className=" flex-1">
              <img className="m-16" src={loginImage} alt="" />
            </div>

            <div className="flex-1 w-full lg:mr-48 ">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label mt-2">
                    <LoadCanvasTemplate />
                  </label>

                  <input
                    ref={captchaRef}
                    type="text"
                    name="captcha"
                    placeholder="Type the text above"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#D1A054] border-0"
                    type="submit"
                    value="Sign in"
                  />

                  <p className="text-[#D1A054] text-center mt-8">
                    New here?{" "}
                    <Link to="/signup">
                      <span className=" font-bold">Create a New Account</span>
                    </Link>
                  </p>

                  <p className=" text-center text-[#444444] mt-8">
                    Or sign in with
                  </p>

                  <div></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
