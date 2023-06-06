import loginImage from "../../assets/others/authentication2.png";
import bgImage from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser} = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email,data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
  };

  return (
  <>
  <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
    <div
      className="hero min-h-screen "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}>
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-48">
          <div className=" flex-1">
            <img src={loginImage} alt="" />
          </div>

          <div className="flex-1 w-full lg:ml-48 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type Here"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className=" text-red-600 mt-2">
                    Please Enter your Name
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className=" text-red-600 mt-2">Email is required</span>
                )}
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 30,
                    pattern:
                    /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])/
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className=" text-red-600 mt-2">
                    Password is required
                  </span>
                )}

                {errors.password?.type === "minLength" && (
                  <span className=" text-red-600 mt-2">Minimum 6 Digits</span>
                )}

                {errors.password?.type === "maxLength" && (
                  <span className=" text-red-600 mt-2">Maximum 30 Digits</span>
                )}
                 {errors.password?.type === "pattern" && (
                  <span className=" text-red-600 mt-2">Password is too easy </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054] border-0"
                  type="submit"
                  value="Sign Up"
                />

                <p className="text-[#D1A054] text-center mt-8">
                  Already registered?{" "}
                  <Link to="/login">
                    <span className=" font-bold">Go to log in</span>
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
    </div></>
  );
};

export default SignUp;
