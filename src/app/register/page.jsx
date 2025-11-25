"use client";

import React, { use, useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import Link from "next/link";
import { AuthContext } from "@/component/AuthProvider/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Register() {
  const { signInWithGoogle,setLoading,createUser,setUser,setTotaluser,totaluser } = use(AuthContext);
  const [see, setSee] = useState(false);
  const router = useRouter();

  const handleGoogle=()=>{
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user)

             setLoading(false)
        toast.success("Registration successful");
        
         router.push("/");

        })
        .catch(err => {
             toast.error(err.message);
        })

  }

   const submithandle = (e) => {
    e.preventDefault();
    setLoading(true)
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    console.log(name, email, photo, password);

    const regexpass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regexpass.test(password)) {
      toast.error(
        "password must contain at leatest one uppercase letter, one lowercase letter and be at least 6 characters long"
      );
      return;
    }

    console.log(name, email, photo, password);

     createUser(email, password)
     .then((res) => {
      const user = res.user;
      setLoading(false);

      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          console.log(user);

 toast.success("successfully login")
 router.push("/");

        })
        .catch((e) => {
          setLoading(false)
          toast.error(e.message);
        });


    });

  };




  return (
    <div className="flex break-all justify-center items-center  min-h-screen">
    

      <div className="flex flex-col md:flex-row gap-15 rap-anywhere">
       

        <div className="card bg-red-300 w-full max-w-sm shrink-0 shadow-2xl rap-anywhere">
        <div className="card-body text-orange-600">
<h1 className="text-red-700 text-2xl font-semibold">Please Register</h1>
          
           <form onSubmit={submithandle}>
            <fieldset className="fieldset">
             
                           <label className="label text-orange-800">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />

              <label className="label text-orange-800">PhotoURL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />

              <label className="label text-orange-800">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              <div className="relative text-start">
                <label className="block text-orange-800 text-sm mb-1">
                  Password
                </label>

                            <input
                  type={see ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered w-full bg-white  focus:outline-none focus:ring-2 focus:ring-pink-400"
                />

                <span
                  onClick={() => setSee(!see)}
                  className="absolute right-[13px] top-[39px] cursor-pointer z-2"
                >
                  {see ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

<button type="submit" className="btn  mt-10 btn-error">Register</button>
 </fieldset>
          </form>


              <button onClick={handleGoogle}   className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

               <p>Already have an account? please {" "}
              <Link  href="/login">
              <span className="text-blue-600">Login</span></Link>
            </p>

           
          
        </div>
      </div>

      </div>

    </div>
  )
}

 

export default Register
