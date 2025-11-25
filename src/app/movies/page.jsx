"use client"
import React,{use, useEffect, useState} from 'react'

import { toast } from 'react-toastify';
import { ClimbingBoxLoader } from 'react-spinners';
import { AuthContext } from '@/component/AuthProvider/AuthContext';
import MovieCard from '@/component/MovieCard';

function AllMovies() {
   
       const {loading,setLoading,user} = use(AuthContext);
         const [data, setData] = useState([])

        useEffect(()=>{
           setLoading(true);
       fetch("https://movie-next-server.vercel.app/movies")
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

          if(loading){
    return (
      <div>
        <ClimbingBoxLoader className="text-center mx-auto" color="#db6a69" />
      </div>
    )
  }


  return (
  
<div>

        <div  className="text-4xl pt-10 wrap-anywhere  font-bold text-red-500 mb-4 text-center">Browse All Movies</div>
        <p className='mb-10 wrap-anywhere '>Discover our vast collection of movies from every genre and era.
Browse through thousands of films including classics and new releases.
Use advanced filters to find movies by genre, year, or rating.
Save your favorites to personal watchlists for later viewing.
Start exploring now and find your next cinematic adventure!</p>


<label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search Movie" />
</label>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
         {data.map(movie => <MovieCard key={movie._id} movie={movie}/>)}

      </div>

    </div>

  )
}

export default AllMovies;
