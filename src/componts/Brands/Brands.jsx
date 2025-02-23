import axios from "axios"
import { useEffect, useState } from "react"

export function Brands() {
  const [brand,setbrand]= useState([])
  
  async function getBrands() {

try{

  const res = await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
console.log(res.data.data)
setbrand(res.data.data)
}catch(err){
  console.log(err+'errrr' )}


  }


useEffect(() => {
getBrands()

}, [])
  
  
  return (<>
  <div className=" container  mx-auto py-5 bg-gray-900 grid grid-cols-3">
  {brand.map((item)=>  {
    return <div className="mx-auto text-white" key={item._id}> 

    <div className="" key={item._id}>
      <img src={item.image} alt={item.name}/>
            <h1>{item.name}</h1>


    </div>

    </div> 
   
})}
    </div>

  
  
  </>);
}