import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from 'swiper/react';

export function Catigories() {

  const [catigories, setCatigories] = useState([])

  async function getCatigories() {

    try {

      const res = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      console.log(res)
      setCatigories(res.data.data)

    }
    catch (err) {

      console.log(err + 'errrr');
    }
  }

  useEffect(() => {

    getCatigories()
  },[])

return (<>

<div className="grid  container mx-auto grid-cols-3 ">
{catigories.map((catigory) => {

  return  <div>

    <img src={catigory.image} className="h-96 w-full " alt={catigory.name} />


    <p>{catigory.name}</p>
  </div>
})}

 </div>

  </>);
}