import {useFormik} from 'formik';
import React, { useContext, useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/athoucontext';
export function Login() {

const {setToken} = useContext(Authcontext)
  const navigate =useNavigate()

const schema = yup.object().shape({


email:yup.string().email('email is not valid').required('email is required'),
password: yup.string().matches(/^[A-z0-9]{6,20}$/,'password must be 6-20 characters').required('password is required'),

})
let[loading,setloading] = useState(false)

 let [pass,setpass] = useState(null)

async function Login(values){

setloading(true)
try{
  setmsg(null)
const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
console.log(res)

setToken(res.data.token)
localStorage.setItem('token',res.data.token)
setpass(res.data.message)
setTimeout(()=>{navigate('/')},1000) 

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


    email:"",
    password:"",





},
onSubmit:Login,

validationSchema:schema,


})
  return (<>
  
  
  <div className=" py-8 h-screen bg-gray-100 dark:bg-gray-800">
 

<form onSubmit={formik.handleSubmit} className="max-w-md mx-auto bg-slate-200 w-full p-6 rounded-lg shadow-xl dark:bg-gray-900">



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
  <div className="text-white ">

{pass? <div className='text-white '> {pass}</div>:null}  
  </div>  {msg?<div className="p-4 py-8 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Danger alert!</span> {msg}
</div>:null}
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading? 'loading...':'submit '}</button>
 
</form>

</div>

  </>);
 }