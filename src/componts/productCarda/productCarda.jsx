import { useContext } from "react";
import { Link } from "react-router-dom";
import { array, reach } from "yup";
import { CartContext } from "../../context/Cartcontext";

export function ProductCarda(prpos) {
    console.log(prpos)
    let product = prpos.product

const ratingsAverage = Math.floor(product.ratingsAverage) 

const {addtocart} = useContext(CartContext)
const {addToWish} = useContext(CartContext)


  return (<>
            
  
  

<div className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-green-800 dark:border-gray-700">

    
    <div>
<Link to={`/detils/${product._id}`}>

        <img className="p-8 rounded-t-lg w-full" src={product.imageCover} alt="product image" />

</Link>

    <div className="px-5 pb-5">
        <Link  to={`/detils/${product._id}`}>
            <h5 className="text-xl font-semibold tracking-tight  text-gray-900 dark:text-white">{product.title}</h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {Array.from({length: ratingsAverage},(_, index) => {return          <svg  key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                })}
       
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{product.ratingsAverage}</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          
        </div>
    </div>
</div>

         
            <button onClick={()=>{addToWish(product._id)}} className="text-white w-full bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Add to wish list</button>
        <button onClick={()=>{addtocart(product._id)}} className="text-white my-3 bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">Add to cart</button>


</div>
  
  
  
  </>);
}