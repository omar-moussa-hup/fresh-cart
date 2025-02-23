import {useFormik} from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function Register() {

const schema = yup.object().shape({

name: yup.string().min(3,'min charts is 3').max(20,'max chart is 20').required('name is required'), 

email:yup.string().email('email is not valid').required('email is required'),
password: yup.string().matches(/^[A-z0-9]{6,20}$/,'password must be 6-20 characters').required('password is required'),
rePassword: yup.string().oneOf([yup.ref('password'),null],'passwords do not match').required('password is required'),
phone: yup.string().matches(/^01[1250][0-9]{8}$/,'phone is not valid').required('phone is required'),
})

const navigate =useNavigate()


let[loading,setloading] = useState(false)

 let [pass,setpass] = useState(null)

async function register(values){

setloading(true)
try{
  setmsg(null)
const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
console.log(res)
setpass(res.data.message)
setTimeout(()=>{navigate('/login')},1000) 
}

catch(err){
  setpass(null)
console.log('error')
setmsg(err.response.data.message)}
finally{

setloading(false)
}
} 


let [msg,setmsg] = useState(null)

const formik = useFormik({

initialValues:{

  
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:"",




},
onSubmit:register,

validationSchema:schema,


})
  return (<>
  
  
  <div className=" py-8 h-screen bg-gray-100 dark:bg-gray-800">
 

<form onSubmit={formik.handleSubmit} className="max-w-md mx-auto bg-slate-200 w-full p-6 rounded-lg shadow-xl dark:bg-gray-900">
  
  <h2 className="font-bold text-white py-8 	">register now
  </h2>
  <div className="relative z-0 w-full mb-5 group">

<input onBlur={formik.handleBlur} onChange={formik.handleChange} type="name" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
<label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
</div>
{formik.errors.name && formik.touched.name ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.name}
</div>:null} 

  <div className="relative z-0 w-full mb-5 group">

      <input onBlur={formik.handleBlur} onChange={formik.handleChange}  type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  {formik.errors.email && formik.touched.email ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.email}
</div>:null} 
  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange}  type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  
  {formik.errors.password && formik.touched.password ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.password}
</div>:null} 
  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange}  type="password" name="rePassword" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  {formik.errors.rePassword && formik.touched.rePassword ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.rePassword}
</div>:null} 
  <div className="">
    <div className="relative z-0 w-full mb-5 group">
        <input onBlur={formik.handleBlur} onChange={formik.handleChange}  type="tel" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number </label>
    </div>
    {formik.errors.phone && formik.touched.phone ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.phone}
</div>:null}

{pass? <div className='text-white '> {pass}</div>:null}  
  </div>  {msg?<div className="p-4 py-8 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Danger alert!</span> {msg}
</div>:null}
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading? 'loading...':'submit '}</button>
 
</form>

</div>

  </>);
 }