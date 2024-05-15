import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext/UserContext";


function Signin() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

let [user,setUser]= useContext(UserContext)


  function handleFormSubmit(User) {
    console.log(User)
    
    setUser(User)
    navigate('/')
  }
  return (
    <div className=" h-screen ">
      <div className="flex h-screen">
        <div className="w-[60%] bg-[url('https://images.unsplash.com/photo-1586515779592-d94f096e4c41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        
        </div>
      
      
      <div className="w-[40%] rounded-md m-auto ">
        <div className="text-center"> <h1 className=" mx-6 my-3 font-semibold text-2xl">Sign In</h1></div>
        
        <form className="px-10 m-2" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="py-3">
            {" "}
            <h1 className="text-xl font-semibold">Username</h1>
            <input
              className=" w-full p-2 rounded-md border-2 border-black"
              type="text"
              {...register("username", { required: true })}
            ></input>
          </div>
          {errors.Username?.type === "required" && (
            <h3 className=" text-red-700">*required</h3>
          )}
          <div className="py-3">
            <h1 className="text-xl font-semibold">Password</h1>
            <input
              id="Pass"
              className=" w-full p-2 rounded-md border-2 border-gray-500"
              type="password"
              {...register("password", { required: true, minLength: 8 })}
            ></input>
            {errors.Pass?.type === "required" && (
              <h3 className=" text-red-700">*required</h3>
            )}
            {errors.Pass?.type === "minLength" && (
              <h3 className=" text-red-700">
                Password must be atleat 8 cahracters
              </h3>
            )}
          </div>
          <div className="text-center p-4">
           <button
              type="submit"
              className=" bg-blue-600 w-[50%] text-lg rounded-xl p-3 text-white hover:bg-blue-700 "
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-lg py-3">
          Don't have an account ?
          <NavLink
            to="/Signup"
            className="underline px-3 text-blue-500 font-semibold text-lg"
          >
            Sign up
          </NavLink>
        </p>
      </div>
      </div>
    </div>
  );
}

export default Signin;