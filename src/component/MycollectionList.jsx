"use client";

import { use } from "react";
import { AuthContext } from "./AuthProvider/AuthContext";
import Link from "next/link";
import PrivateRoute from "./PrivateRoute";
import Swal from "sweetalert2";

function MycollectionList({movie}) {
  const { posterUrl, genre, rating, title, _id, releaseYear } = movie;
  const { refetch, setRefecth } = use(AuthContext);
//   const navigate = useNavigate();

 const handleDlete = (_id) => {

      Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
         
    
        
        fetch(`http://localhost:4000/movies/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(res => res.json())
        .then(data=> {
          // console.log(data)
          setRefecth(!refetch)
          // navigate('/movies')
    
             Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        })
        .catch(err => {
          console.log(err)
        })
    
    
     
      }
    });

     }

  return(
    <PrivateRoute>
    <div>
         <ul className="list bg-base-200 rounded-box shadow-md wrap-anywhere">  
  <li className="list-row">
    <div className=' items-start justify-center flex flex-col'>
      <img className="size-10 rounded-box" src={posterUrl}/></div>
    <div className=' items-start justify-center flex flex-col'>
      <div>{title}</div>
      <div className="text-xs uppercase font-semibold opacity-60">{genre}</div>
    </div>
    <div className='flex flex-col sm:flex-row gap-4'>
      <Link href={`/movies/${_id}`} className="btn btn-active  btn-error">View</Link>

          <button onClick={()=>handleDlete(_id)} className="btn btn-error">Delete</button>
    </div>

  </li>
  
</ul>
    </div>
    </PrivateRoute>
  )
  ;
}

export default MycollectionList;
