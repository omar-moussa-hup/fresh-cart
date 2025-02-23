import { useContext } from 'react';
import sora from '../../assets/images/favicon.png';

import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/athoucontext';
import { CartContext } from '../../context/Cartcontext';

export function Navbar() {
const navigate =useNavigate()

const {cartnum} = useContext(CartContext)
let {token,setToken} = useContext(Authcontext)
 
function logout(){

localStorage.removeItem('token')
setToken(null)
navigate('/login')

}


  return (<>
  
  
  

<nav className="bg-white border-gray-200 dark:bg-green-900">
  <div className="  container mx-auto flex justify-around items-center p-4">
 <div className='ms-14 flex '>
    <img src={sora} alt="logo" className="w-full h-11" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
fresh cart
</span>
 </div>

     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>  
<div className="links me-24 flex justify-center items-center md:w-auto md:flex-grow md:space-x-8 md:space-y-0 md:justify-end md:items-center" id="navbar-default">
<div>


<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 me-24 -gray-100 -lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
        <li>
          <Link to="home" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</Link>
        </li>
        {token ? <>
        
          <li>
          <Link to="cart" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart:{cartnum}</Link>
        </li>
        <li>
        </li>
        <li>
          <Link to="catigories" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Categories</Link>
        </li>
        <li>
          <Link to="brands" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brands</Link>
        </li>
        <li>
          <Link to="order" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Order</Link>
        </li>
        </>:null}


      </ul>
      </div>

     <div className='hidden md:flex w-72 justify-between items-center'>
{token?   <button  onClick={logout} type="button" class="ms-9 w-36 mt-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">log out</button>
: <ul className=' flex justify-between w-full items-center'>


<li>
       <Link to="register" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</Link>
     </li>
     <li>
       <Link to="login" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
     </li>
        </ul>}

  

        </div> 


  
  
  
  
  
  </div>    
  </div>
</nav>

  
  

  
  
  </>);
}