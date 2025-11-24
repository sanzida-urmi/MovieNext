'use client'
import Image from "next/image";
import { PiStarDuotone } from "react-icons/pi";
import localData from '@/Data/data.json'; 
// import cmnt from '@/Data/cmnt.json'; 
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Autoplay,Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Reviews from "@/component/Reviews";
import MovieCard from "@/component/MovieCard";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { AuthContext } from "@/component/AuthProvider/AuthContext";
import { toast } from "react-toastify";
import {motion} from 'framer-motion';



export default function Home() {
const {loading,setLoading,user} = use(AuthContext);
   const [data, setData] = useState([])




   
         
  
  
          useEffect(()=>{
             setLoading(true);
         fetch("http://localhost:4000/movies")
         .then(res=>res.json())
         .then(data =>{
          //  console.log(data)
           setData(data)
           setLoading(false);
           toast.success("Show all movie");
         })
         .catch(err =>{
          //  console.log(err);
           toast.error("could not show all movie")
         })
           },[])


  return (
    <div className="">
      <div className="flex justify-center mb-20">
      
        <Swiper
        key={localData.length}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="h-96 w-2/3 rounded-lg"
      >
        {localData.map((movie) => (
          <SwiperSlide
            key={movie._id}
            className="flex justify-center items-center h-full"
          >
            <img 
              src={movie.posterUrl}
              alt={movie.title}
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
       
  <div>
      <h1 className="text-4xl font-bold text-red-500 mb-4 text-center">Discover Your Next Favorite Movie</h1>
    <p className="text-center p-10">Explore thousands of films, create watchlists, and share your cinematic journey with friends. MovieMaster Pro is a smart movie management system that lets users easily browse, filter, and organize their favorite movies. You can explore films by genre, rating and even create your own personal collections and watchlist.It is a complete movie management web application.</p>
  </div>


             {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
         {recentmovie.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div> */}


             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
         {data.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>


    <p  className="text-4xl pt-10 font-bold text-red-500 mb-4 text-center">Explore movies by your favorite categories</p>

    <div className='flex flex-col md:flex-row gap-30 mx-auto justify-center items-center'>

  <div className=' wrap-anywhere ani'>
  <motion.img
   transition={{
    repeat: Infinity,
    duration: 2,
    ease: "linear",
  }}
      
   animate={{scale: [1,2,1], rotate:360, x: [0,100,-100,0]}}  className='h-10 sm:h-20' src="/starr.png" alt="" />
</div>



  <div>
     
    <ul className='wrap-anywhere'>
  <li className='flex items-center gap-2'><PiStarDuotone /> Action</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Adventure</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Comedy</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Drama</li>
  </ul>
  <ul className='wrap-anywhere'>
  <li className='flex items-center gap-2'><PiStarDuotone /> Fantasy</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Horror</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Romance</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Thriller</li>
</ul></div>
</div>


     {/* <div className="flex justify-evenly">
    
      <ul className='wrap-anywhere '>
  <li className='flex items-center gap-2'><PiStarDuotone /> Action</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Adventure</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Comedy</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Drama</li>
  </ul>
  <ul className='wrap-anywhere'>
  <li className='flex items-center gap-2'><PiStarDuotone /> Fantasy</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Horror</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Romance</li>
  <li className='flex items-center gap-2'><PiStarDuotone /> Thriller</li>
</ul></div> */}


 <div className="text-center p-10">
  <Link href='/movies' className="btn btn-error">Explore All Movies</Link>

 </div>


     <Reviews></Reviews>
     {/* <Reviews cmnt={cmnt}></Reviews> */}

    </div>
  );
}
