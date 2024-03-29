// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
// import {
//   increment,
//   incrementAsync,
  
//   selectCount,
// } from '../authSlice';
import {selectLoggedInUser , createUserAsync} from '../authSlice'
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";



export default function Signup() {

  // const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useSelector(selectLoggedInUser)
  const notification =handleSubmit((data)=>{
      dispatch(createUserAsync({email:data.email , password:data.password,addresses:[]})).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Succesfull',
          text: 'Your Account Has been Created Succesfully',
          confirmButtonText: 'Okay',
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false
        });
      })
      .catch((error) => {
        console.error('Sign Up error:', error);
        // Handle login error if needed
      });
  
    })

  return (
      <div>
        <div>
        {user && <Navigate to='/' replace={true}></Navigate>}

        
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Create New Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form noValidate className="space-y-6" onSubmit={handleSubmit(notification)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", { required: "Email is Required",pattern:{value:/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,message:"Email is Not Valid"} })}
                  type="email"
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <p className=" text-red-500">
                {errors.email.message}
                </p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  
                  {...register("password", { required: "Password is Required",pattern: {
                    value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,message:`- at least 8 characters
                    - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                    - Can contain special characters`
                  } })}
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <p className=" text-red-500">
                {errors.password.message}
                </p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                 Confirm Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="confrimpassword"
                  {...register("confirmpassword", { required: "Confirm password is Require" ,validate: (value, formValues) => value === formValues.password || 'Password Is Not Matched'  })}
                  type="password"
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.confirmpassword && <p className=" text-red-500">
                {errors.confirmpassword.message}
                </p>}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already A Member?{' '}
            <Link to="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Log In
            </Link>
          </p>
        </div>
      </div>
        </div>
    </div>
  );
}



