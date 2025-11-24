import Link from "next/link"

function MovieCard({movie}) {
    const {posterUrl,genre,rating,title,_id,releaseYear,plotSummary} = movie
  return (
    <div className='wrap-anywhere'>
      <div className="card bg-base-300 w-full h-110 shadow-sm">
  <figure>
    <img className='h-50 w-50 mt-10'
      src={posterUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mb-5">{title}</h2>
    <p className='font-semibold'>Genre: {genre}</p>
    <p className='font-semibold'>ReleaseYear: {releaseYear}</p>
    <p className='font-semibold'>Rating: {rating}</p>
    <p className='font-semibold'>Description: {plotSummary}</p>
    
    
    <div className="card-actions justify-end">
      {/* <button className="btn btn-active  btn-error">Details</button> */}
      <Link href={`/movies/${_id}`} className="btn btn-active  btn-error">Details</Link>

    </div>
  </div>
</div>
    </div>
  )
}

export default MovieCard
