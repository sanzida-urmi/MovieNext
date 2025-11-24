"use client"

import { AuthContext } from "@/component/AuthProvider/AuthContext";
import MycollectionList from "@/component/MycollectionList";
import { use, useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { toast } from "react-toastify";

function page() {
  const { user, refetch, setRefecth } = use(AuthContext);
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(user);

  useEffect(() => {
    setLoading(true);

    if (!user?.email) {
      return;
    }

    fetch(`http://localhost:4000/mycollection?email=${user.email}`)
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
  return (
    <div>

             <div className="grid grid-row gap-5 mt-10">
 {collection.map(movie => <MycollectionList key={movie._id} movie={movie}/>)}

          </div>
    </div>
  );
}

export default page;
