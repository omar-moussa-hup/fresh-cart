import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/Cartcontext";

export function ProductDetils() {
  const{addtocart}= useContext(CartContext)
const [detils,setdetils]= useState()
const x = useParams()

async function getDetils() {


    try{

const res = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)

console.log(res.data.data)
setdetils(res.data.data)

    }
catch(err){

console.log(err+'errrr')
}


}

useEffect(() => {

getDetils()
},[])
console.log(detils)

return (<>

 <div className=" grid grid-cols-6">

<div className="col-span-2">

<img src={detils?.imageCover} alt="" />

</div>


<div className="col-span-4">

<h2 className="font-bold" >{detils?.title }</h2>

<p> {detils?.description }</p>
<p> {detils?.price } $ </p>



<button  onClick={()=>{addtocart(x.id)}} type="button" class="ms-9 w-full mt-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add To Cart</button>
</div>
</div> 


  
  
  
  
  
  </>);
}