'use client'

import { AuthContext } from "@/component/AuthProvider/AuthContext";
import PrivateRoute from "@/component/PrivateRoute";
import { use, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { toast } from "react-toastify";

function page() {
     const {user} = use(AuthContext);
    const [loading, setLoading] = useState(false);

      if(loading){
    return (
      <div className='wrap-anywhere'>
        <ClimbingBoxLoader className="text-center mx-auto" color="#db6a69" />
      </div>
    )
  }

      const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      title: e.target.title.value,
      genre: e.target.genre.value,
      releaseYear: Number(e.target.releaseYear.value),
      director: e.target.director.value,
      cast: e.target.cast.value,
      duration: Number(e.target.duration.value),
      rating: Number(e.target.rating.value),
      language: e.target.language.value,
      country: e.target.country.value,
      plotSummary: e.target.plotSummary.value,
      fullDescription: e.target.fullDescription.value,
      posterUrl: e.target.posterUrl.value,
      addedBy: user.email
    }
    // console.log(formData);

    fetch('http://localhost:4000/movies', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data=> {
      // console.log(data)
      setLoading(false);
      toast.success('successfully added');
    })
    .catch(err => {
      // console.log(err)
      toast.error('cound not add');
    })
   

  }
  return (
    <PrivateRoute>
    <div>
      <div className="card border mt-10 border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl wrap-anywhere">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Movie</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* title Field */}
          <div>
            <label className="label font-medium">Title</label>
            <input
              type="text"
              name="title"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter title"
            />
          </div>

          {/* genre Field */}
          <div>
            <label className="label font-medium">Genre</label>
            <input
              type="text"
              name="genre"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter genre"
            />
          </div>
          {/* releaseYear Field */}
          <div>
            <label className="label font-medium">ReleaseYear</label>
            <input
              type="number"
              name="releaseYear"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter releaseYear"
            />
          </div>
          {/* director Field */}
          <div>
            <label className="label font-medium">Director</label>
            <input
              type="text"
              name="director"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter director"
            />
          </div>
          {/* cast Field */}
          <div>
            <label className="label font-medium">Cast</label>
            <input
              type="text"
              name="cast"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter cast"
            />
          </div>
          {/* rating Field */}
          <div>
            <label className="label font-medium">Rating</label>
            <input
              type="number"
              name="rating"
              step="any"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter rating"
            />
          </div>
          {/* duration Field */}
          <div>
            <label className="label font-medium">Duration</label>
            <input
              type="number"
              step="any"
              name="duration"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter duration"
            />
          </div>
          {/* language Field */}
          <div>
            <label className="label font-medium">Language</label>
            <input
              type="text"
              name="language"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter language"
            />
          </div>
          {/* country Field */}
          <div>
            <label className="label font-medium">Country</label>
            <input
              type="text"
              name="country"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter country"
            />
          </div>
          


          {/* plotSummary Textarea */}
          <div>
            <label className="label font-medium">PlotSummary</label>
            <textarea
              name="plotSummary"
              required
              rows="3"
             className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter plotSummary"
            ></textarea>
          </div>

          {/* fullDescription Textarea */}
          <div>
            <label className="label font-medium">FullDescription</label>
            <textarea
              name="fullDescription"
              required
              rows="3"
             className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter fullDescription"
            ></textarea>
          </div>

          

          {/* posterUrl */}
          <div>
            <label className="label font-medium">PosterUrl</label>
            <input
              type="url"
              name="posterUrl"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>
         

                  {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full btn-error"
          >
            Submit Movie
          </button>
        </form>
      </div>
    </div>
    </div>
    </PrivateRoute>
  )
}

export default page
