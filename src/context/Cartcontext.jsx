import axios from 'axios';
import { useState, createContext } from 'react';
import { toast } from 'react-hot-toast';
export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cartnum, setCartnum] = useState(0);
    const[cartItem,setCartItem] = useState([])
    const [Total,setTotal] =useState()
    const [cartId,setcartId] = useState()

    async function addtocart(id) {
        try {
            const res = await axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
                productId: id,
            }, {
                headers: {
                    token: localStorage.getItem('token'),
                }
            });

            setCartnum(res.data.numOfCartItems);
            console.log('cartnum:', cartnum);
            toast.success('add Successfully to cart');

        } catch (err) {
            console.log(err);
        }
    }

    async function getcartItem() {


        try{

            const res = await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{

                headers:{
                    token:localStorage.getItem('token')
                }
            })
            console.log(res)
            console.log(res.data.cartId)
            setCartItem(res.data.data.products)
            setTotal(res.data.data.totalCartPrice)
            setCartnum(res.data.numOfCartItems)
            setcartId(res.data.cartId)

        }
        catch(err){
            console.log(err)
        }
    }
    async function updateItemCart(id,count){
        try{
        
        
        const res = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
        
          count
        },{
        
          headers:{
            token:localStorage.getItem('token')
          }

        })
        console.log(res)
        setCartItem(res.data.data.products)
        setTotal(res.data.data.totalCartPrice)
        setCartnum(res.data.numOfCartItems)


        }
        catch (err){
        console.log(err)
        
        
        }
        }

        async function removeCartItem(id) {

            try{

const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{

    headers:{
        token:localStorage.getItem('token')
    }
})
console.log(res)
setCartItem(res.data.data.products)
setTotal(res.data.data.totalCartPrice)
setCartnum(res.data.numOfCartItems)

}
            catch(err){

console.log(err)
            }
            
        }
        async function clearAll(){
 
            console.log('clear all')
          try{
            const res = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart',{
              headers:{
                token:localStorage.getItem('token')
              }
            })
            console.log(res)
            setCartItem([])
            setTotal()
            setCartnum()
          }catch(err){
            console.log(err)
          
          }
          }

    return (
        <CartContext.Provider value={{ setCartnum,cartnum,clearAll, addtocart ,getcartItem, cartItem,updateItemCart,Total,removeCartItem,cartId}}>
            {children}
        </CartContext.Provider>
    );
}
