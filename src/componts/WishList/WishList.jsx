import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Cartcontext";

export function WishList() {


  const{addtocart,deleteWishItem}= useContext(CartContext)
const{getWishList,wishItem}= useContext(CartContext)
  



  useEffect(()=>{
    getWishList()
     },[])
  return (<>
  
  
  



  <div className="container mx-auto my-8 gap-5 grid grid-cols-3">

      {wishItem.map((product) => {

  return <div className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-green-800 dark:border-gray-700">

    
  <div>

      <img className="p-8 rounded-t-lg w-full" src={product.imageCover} alt="product image" />


  <div className="px-5 pb-5">
      <Link  to={`/detils/${product._id}`}>
          <h5 className="text-xl font-semibold tracking-tight  text-gray-900 dark:text-white">{product.title}</h5>
      </Link>
      <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
          
     
          </div>
      </div>
      <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
        
      </div>
  </div>
</div>

       
      <button onClick={()=>{addtocart(product._id)}} className="text-white my-3 bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">Add to cart</button>

      <button onClick={()=>{deleteWishItem(product._id)}} className="text-white my-3 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>

</div>
      })}
  
   
    
  
 
 

</div>

  </>);
}