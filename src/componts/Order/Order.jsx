import { Formik, useFormik } from "formik";
import { useContext, useState } from "react";
import { CartContext } from "../../context/Cartcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function Order() {
 const {cartId}=   useContext(CartContext)
const navigate = useNavigate()
 console.log(cartId)


const[paymintWay,setpaymintWay]= useState()
    async function cashOrder(values){

        try{

     console.log('cash order')
       const res =await axios.post (`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, values, {
           headers: {
               token: localStorage.getItem('token')
           }
       }) 
    console.log(res)
setInterval(()=>{    navigate('/cart')},1000)



toast.success('Order Done');
        } catch(err){
            console.log(err)
        }

   


     
   
    }

    async function visaOrder(values){
        console.log('visa order')
try{

const res = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5176`,values,{
    headers:{
        token:localStorage.getItem('token')
    }
})
console.log(res)
window.open(res.data.session.url,'_blank')
}catch(err){
    console.log(err) 
}

    }

function handleSubmit(values){

console.log(values)
if(paymintWay === 'cash'){
    cashOrder(values)
            }else if(paymintWay === 'visa'){
                visaOrder(values)
            }
}

const formik = useFormik({

initialValues:{


    shippingAddress:{
        details: '',
        phone: '',
        city: '',
        }





},
onSubmit:handleSubmit,




})

  return (<>
  <form onSubmit={formik.handleSubmit} className="bg-gray-900" >  
  <div className="container mx-auto py-9">
  <div className="relative z-0 w-full mb-5 group">

      <input  onChange={(e)=>{formik.setFieldValue('shippingAddress.details',e.target.value)}}     type="text" name="details" id="floating_details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="floating_details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">details</label>
  </div>  
  <div className="relative z-0 w-full mb-5 group">

<input   onChange={(e)=>{formik.setFieldValue('shippingAddress.phone',e.target.value)}}   type="tel" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
<label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
</div>  

  <div className="relative z-0 w-full mb-5 group">

<input  onChange={(e)=>{formik.setFieldValue('shippingAddress.city',e.target.value)}}    type="text" name="city" id="floating_city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
<label htmlFor="floating_city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city</label>
</div> 
<button onClick={()=>{setpaymintWay('cash')}}   className=" w-full mt-2 focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-green-800">Cash Order</button>
<button  onClick={()=>{setpaymintWay('visa')}} className=" w-full mt-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-green-800">Visa Orrder</button>

  </div></form>


 
  </>);
}