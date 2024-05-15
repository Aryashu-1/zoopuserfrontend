import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import {useNavigate,NavLink} from 'react-router-dom' 

function Signup() {
    let {register, handleSubmit,formState:{errors}}= useForm();
    let navigate = useNavigate()
   
   async function registerSubmit(newUser){

      console.log(newUser)
      try{
        
    let res =await  axios.post("http://127.0.0.1:8000/user/signup",newUser)
    console.log("user added",res)
      }
      catch(err){
          console.log(err)
      }
    navigate('/signin')

    }
  return (
    <div className='m-6'>
        <div className='text-center '>
         <h1 className='font-semibold text-2xl'> ZOOP</h1>        
        </div>

        <div className=' border-black rounded-md my-4 border-2 w-96 m-auto '>
            <h1 className='text-3xl font-semibold m-3 mx-4'>Create Account</h1>
            <form className='px-10' onSubmit={handleSubmit(registerSubmit, ()=>{console.log('error')})}>
            <div className='my-4'>
            <h1 className='font-semibold'>Enter UserName</h1>
            <input   placeholder='First and last name' className='w-full  shadow-sky-600 shadow-md border-gray-500 border-2  text-black p-1 rounded-sm' type='' {...register('name', {required:true})}></input>
            {errors.name?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Enter your name</h3>)}
            </div>
            <div className='my-4'>
            <h1 className='font-semibold ' >Mobile Number</h1>
            <div className='flex'>
            <select className='w-20 mx-4 rounded-md shadow-md bg-slate-200'>
                <option> +91</option>
            </select>
            <input   placeholder='Mobile Number' className='border-gray-500 border-2  shadow-sky-600 shadow-md text-black p-1 rounded-sm' type='' {...register('phoneNumber', {required:true, maxLength:10,minLength:10})}></input>
           
            </div >  
            <div>
            {errors.phoneNumber?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Enter your mobile number</h3>)}
            {errors.phoneNumber?.type=== 'minLength' && (<h3 className='px-1 text-sm  text-red-600'>*required 10 numbers </h3>)}
            {errors.phoneNumber?.type=== 'maxLength' && (<h3 className='px-1 text-sm  text-red-600'>*required 10 numbers </h3>)}
            </div>
           
            </div>
            <div className='my-4'>
            <h1 className='font-semibold '>Email</h1>
            <input   className='w-full border-gray-500 border-2 shadow-sky-600 shadow-md text-black p-1 rounded-sm' type='email' {...register('email', {required:true, minLength:8})}></input>
            {errors.email?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Enter your email</h3>)}
            </div>
            <div className='my-4'>
            <h1 className='font-semibold m-2'>Password</h1>
            <input  id='password' className='w-full border-gray-500 border-2 s shadow-sky-600 shadow-md text-black p-1 rounded-sm' type='password' {...register('password', {required:true, minLength:8})}></input>
            {errors.password?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Enter your password</h3>)}
            {errors.password?.type=== 'minLength' && (<h3 className='px-1 text-sm  text-red-600'>Password must be atleat 8 cahracters</h3>)}
            </div>
          { /* <div className='my-4'>
            <h1 className='font-semibold m-2 '> Re-Enter Password</h1>
            <input  id='Pass' className='w-full border-gray-500 border-2  shadow-sky-600 shadow-md text-black p-1 rounded-sm' type='password' {...register('Pass', {required:true, minLength:8})}></input>
            {errors.Pass?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Enter your password</h3>)}
            {errors.Pass?.type=== 'minLength' && (<h3 className='px-1 text-sm  text-red-600'>Password must be atleat 8 cahracters</h3>)}
            </div>
            <div>*/}
                <div><p className='my-10'>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
            </div>
            <div className='text-center'>
            <button type='submit' className=' bg-gray-600 text-lg rounded-xl p-3 text-white hover:bg-sky-600     '>Sign Up</button>
            </div>
            
            </form>
            <p className='text-center text-lg py-3'>Already Registered !
              <NavLink to='/login' className='underline px-3 text-blue-700 font-semibold text-lg'>Login</NavLink>
            </p>
                    </div>
    </div>
  )
}

export default Signup