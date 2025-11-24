"use client"

import { redirect } from "next/navigation";

function Back({referer}) {
     
console.log(referer);

  function back(){
    if(referer && referer.includes('/movies'))
    {
        redirect('/movies')
    } else if (referer && referer.includes('/mycollection')) {
      redirect('/mycollection')
    }
     else {
        redirect('/')
    }
  }

  return (
     <button onClick={back}  className="btn btn-error my-5">Back</button>
  )
}

export default Back
