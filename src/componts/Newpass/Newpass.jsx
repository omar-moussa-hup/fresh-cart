import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';


export function Newpass() {
const[Mes,setMes]= useState()
const navigate = useNavigate()

    const schema = yup.object().shape({
    
    
    email:yup.string().email('email is not valid').required('email is required'),
    newPassword: yup.string().matches(/^[A-z0-9]{6,20}$/,'password must be 6-20 characters').required('password is required'),
    
    })


const formik = useFormik({

initialValues:{


    email:"",
    newPassword:"",





},
onSubmit:newPassword,

validationSchema:schema,


})

async function newPassword(values) {
console.log('helooooo')
     try{


         const res = await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',{

             email:values.email,
             newPassword:values.newPassword
         },{
             headers:localStorage.getItem('token')
         })
         console.log(res)
setMes(true)
         setTimeout(()=>{
          navigate('/login')

         },1000)
     }catch(err){
setMes(false)
         console.log(err,'errrrrrrr')
     }
    
}

  return (<>
  
  
    
  <div className=" py-8 h-screen bg-gray-100 dark:bg-gray-800">
 

<form onSubmit={formik.handleSubmit} className="max-w-md mx-auto mt-44  bg-slate-200 w-full p-6 rounded-lg shadow-xl dark:bg-gray-900">



  <div className="relative z-0 w-full mb-5 group">

      <input onBlur={formik.handleBlur} onChange={formik.handleChange}  type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  {formik.errors.email && formik.touched.email ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.email}
</div>:null} 
  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange}  type="password" name="newPassword" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""  />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Password</label>
  </div>
  
  {formik.errors.newPassword && formik.touched.newPassword ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.newPassword}
</div>:null} 
{Mes? <><div className="text-white">correct</div></>:null}

<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">submit</button>

</form>
</div>
  
  </>);
}