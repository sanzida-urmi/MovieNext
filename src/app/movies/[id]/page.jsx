

import Back from "@/component/Back";
import { headers } from "next/headers";

async function page({params}) {

  const hList = await headers();
  const referer = hList.get('referer')

    const {id} = await params;
    
   const res = await fetch(`http://localhost:4000/movies/${id}`);
  const data = await res.json();
  const movie = data.result;

   

  return (
   <div className=' wrap-anywhere'>
      <div className="card bg-base-100 w-full gap-15 shadow-sm flex flex-col sm:flex-row justify-center items-center mx-auto">
 
 <div className='w-full md:w-2/5'> <figure>
    <img
    className='h-200 w-full'
      src={movie.posterUrl}
      alt="Shoes" />
  </figure></div>

  
  <div className="card-body wrap-anywhere w-3/5">
    <h2 className="card-title text-red-700 text-4xl font-semibold mb-5 mx-auto">{movie.title}</h2>
    <p>Genre: {movie.genre}</p>
    <p className='wrap-anywhere'>ReleaseYear: {movie.releaseYear}</p>
    <p>Director: {movie.director}</p>
    <p>Cast: {movie.cast}</p>
    <p>Rating: {movie.rating}</p>
    <p>Duration: {movie.duration}</p>
    <p>Language: {movie.language}</p>
    <p>Country: {movie.country}</p>
    <p>Language: {movie.language}</p>
    <p>AddedBy: {movie.addedBy}</p>
    <p>PlotSummary: {movie.plotSummary}</p>
    <p >FullDescription: {movie.fullDescription}</p>


<Back referer={referer}></Back>
  </div>

</div>

    </div>
  )
}

export default page
