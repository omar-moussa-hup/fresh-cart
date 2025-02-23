import axios from "axios";
import { use, useContext, useEffect, useState } from "react";
import { ProductCarda } from "../productCarda/productCarda";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from 'swiper/react';
import { RotatingLines } from 'react-loader-spinner'
import slider1 from '../../assets/images/slider-image-1.jpeg'
import slider2 from '../../assets/images/slider-image-2.jpeg'
import blockImage1 from '../../assets/images/blog-img-1.jpeg'
import blockImage2 from '../../assets/images/blog-img-2.jpeg'


export function Home() {
  
 
   const [loading,setloading]= useState(null)

const[posts, setPosts] = useState([])

const [catigories, setCatigories] = useState([])
 

async function getCatigories() {

try{

  const res = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
console.log(res)
setCatigories(res.data.data)

}
catch(err){

  console.log(err+'errrr' )
}

}

useEffect(() => {


getCatigories()
}, [])
console.log(catigories)

const {data,isLoading}= useQuery({

  queryKey: 'posts',
  queryFn:  getPosts,
  cacheTime: 1000 * 60 * 5,
})
// console.log(data?.data.data)

 async function getPosts() {
setloading(true)
  const res = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
  console.log(res)
  setPosts(res.data.data)
setloading(false)
 }
 useEffect(() => {

getPosts()

 }, [])
 
 
 
 return (<>

{/* 
<Swiper slidesPerView={2}>

  <SwiperSlide>hello1  </SwiperSlide>
  <SwiperSlide>hello2 </SwiperSlide>
  <SwiperSlide>hello3  </SwiperSlide>

</Swiper> */}

<div className="grid grid-cols-6">

<div className="bg-red-500 col-span-4">
  <div>
    
  </div>
<Swiper style={{height: "100%"}} loop={true}>

<SwiperSlide>
  
  
  <img src={slider1} className="w-full h-full block" alt="" />

   </SwiperSlide>
<SwiperSlide>

<img className="w-full h-full block" src={slider2} alt="" />

  
</SwiperSlide>

</Swiper>



</div>
<div className="bg-green-500 col-span-2" >




<img src={blockImage1} className=" h-1/2 block" alt="" />

<img src={blockImage2} className=" h-1/2 block" alt="" />

</div>



</div>
<div className="">
  <Swiper slidesPerView={6} loop={true}> 

{catigories.map((cat)=>{

return<SwiperSlide>

<img src={cat.image} className="h-52 w-full" alt="" />
<div>
  {cat.name}
</div>

</SwiperSlide>

})}


</Swiper> 
</div>

 {isLoading?
<div className="flex justify-center items-center h-screen">
<RotatingLines
  visible={true}
  height="96"
  width="96"
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
     </div>


  :<div className="py-5 grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">

{posts.map((post) => <ProductCarda key={post._id} product={post}/>)}

</div>}



  </>);
}