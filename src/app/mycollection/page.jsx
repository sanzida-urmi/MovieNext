"use client";

import { AuthContext } from "@/component/AuthProvider/AuthContext";
import PrivateRoute from "@/component/PrivateRoute";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function page() {
  const { user, refetch, setRefecth } = use(AuthContext);
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);

    if (!user?.email) {
      return;
    }

    fetch(`https://movie-next-server.vercel.app/mycollection?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCollection(data);

        // console.log(data[0]);
        setLoading(false);
        toast.success("Show collection");
      })
      .catch((err) => {
        //  console.log(err);
        toast.error("could not show collection");
      });
  }, [user, refetch]);

  console.log(collection);

  if (loading) {
    return (
      <div>
        <ClimbingBoxLoader className="text-center mx-auto" color="#db6a69" />
      </div>
    );
  }

  if (collection.length === 0) {
    return (
      <PrivateRoute>
      <div className="text-red-300">
        <p className="text-red-400 wrap-anywhere  font-bold text-center text-5xl">
          No Movie in Your Collection
        </p>
      </div>
      </PrivateRoute>
    );
  }

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
           
      
          
          fetch(`https://movie-next-server.vercel.app/movies/${_id}`, {
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

  return (
    <PrivateRoute>
    

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Movie Name</th>
        <th>genre</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

     {
      collection.map((movie)=>(
         <tr>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={movie.posterUrl} />
              </div>
            </div>
            <div>
              <div className="font-bold">{movie.title}</div>
              <div className="text-sm opacity-50">{movie.rating}</div>
            </div>
          </div>
        </td>
        <td>
         {movie.genre}
        </td>
        <td>
          <button onClick={()=>handleDlete(movie._id)} className="btn btn-error">Delete</button>
        </td>
        <th>
         <Link href={`/movies/${movie._id}`} className="btn btn-active  btn-error">View</Link>
        </th>
      </tr>
      ))
     }
     
    </tbody>
   
  </table>
</div>
    </PrivateRoute>
  );
}

export default page;
