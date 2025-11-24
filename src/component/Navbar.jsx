'use client'
import Link from "next/link"
import { use } from "react";
import { AuthContext } from "./AuthProvider/AuthContext";
// import { AuthContext } from "./AuthProvider/AuthContext";
import { DotLoader, HashLoader } from "react-spinners";

 

function Navbar() {
   const { user, setUser, signOutUser, loading, setLoading } =
    use
    (AuthContext);

     const links = <>
    <li className='font-semibold'><Link   href ="/">Home</Link></li>
     <li className='font-semibold'><Link href ="/movies" 
    //   className={({isActive})=> isActive ? "active" : ""}
       >All Movies</Link></li>
 
       
      
        <li className='font-semibold'><Link
        //  className={({isActive})=> isActive ? "active" : ""} 
          href ="/mycollection">My Collections</Link></li>

        <li className='font-semibold'><Link
        //  className={({isActive})=> isActive ? "active" : ""} 
          href ="/addmovie" >Add Movie</Link></li>

        <li className='font-semibold'><Link 
        // className={({isActive})=> isActive ? "active" : ""}
          href ="/login" >Login</Link></li>

     </>

           const signouthandle = () => {

        console.log("k")
        setLoading(true);
    signOutUser()
      .then(() => {
        setLoading(false);
        // toast.success("successfully signout");
        setUser(null);
        // navigate("/");
      })
      .catch((e) => {
        // toast.error(e.message);
        console.log(e.message);
      });

  };


  return (
    <div  className="navbar shadow-sm   bg-base-300 rounded-2xl mt-0 mb-10 flex flex-col md:flex-row items-start gap-3 md:items-stretch">

       <div className="navbar-start nav  flex flex-col  sm:flex-row justify-start items-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex flex-col sm:flex-row justify-center items-start '>
      
      <img className='h-10 sm:h-20 ' src="/logo.png" alt="" />

    <p className="sm:mt-6 text-sm sm:text-2xl wrap-anywhere sm:word-wrap ">movieMaster Pro</p>

    </div>
  </div>


  <div className="navbar-center navv hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>



<div className="navbar-end flex flex-col sm:flex-row gap-3 items-start sm:items-center sm:justify-start md:justify-end">
    
    
     {loading ? (
          <DotLoader color='#8b0000' className='mr-2' />
        ) : user ? 
        
                 (
                  <div className='flex flex-col gap-3 sm:flex-row justify-start items-start'>
            <div className='dropdown drawer-end z-50 '>


                       <div tabIndex={0} role="button" className='btn btn-ghost btn-circle avatar'>
              <div className='w-9 border-2 border-red-300 rounded-full'>
                <img referrerPolicy='no-referrer' src={user?.photoURL || "https://via.placeholder.com/88"} alt="" />

              </div>
            </div>

                     <ul
           tabIndex="-1"
           className='menu menu-sm dropdown-content bg-red-300 rounded-box z-50 mt-3 w-52 p-2 shadow'>


              <div className='pb-3 border-b border-b-red-300'>
                <li className='text-sm font-bold'>{user.displayName}</li>
                <li className='text-xs'>{user.email}</li>
               

              </div>

              </ul>
</div>

              <button onClick={signouthandle} className="btn wrap-anywhere  btn-error sm:ml-3 md:ml-7">
             <Link href="/login">Logout</Link>
           </button>  

              </div>

         )
        
        
        : (
         
          <button className="btn btn-error">
            <Link href="/login">Login</Link>
          </button>

        )}

    {/* <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle ml-3"/> */}
  </div>



    </div>
  )
}

export default Navbar
