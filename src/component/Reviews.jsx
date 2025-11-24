'use client'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Reviewscard from './ReviewCard';
import { use, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider/AuthContext';
// import { AuthContext } from "@/component/AuthProvider/AuthContext";
// import { AuthContext } from './AuthProvider/AuthContext';
// import Reviewscard from './Reviewscard';
// import Reviewscard from './Reviewscard';

function Reviews() {
//    const reviews = use(cmnt);
    // console.log(cmnt);
    const {loading,setLoading,user} = use(AuthContext);
    //   const [swiperKey, setSwiperKey] = useState(0);
      const [skey,setSkey]= useState(0)
    
       const [cmnt, setCmnt] = useState([])

     useEffect(()=>{
                 setLoading(true);
             fetch("http://localhost:4000/comments")
             .then(res=>res.json())
             .then(data =>{
              //  console.log(data)
               setCmnt(data)
               setLoading(false);
               setSkey(p=> p+1)
                // setSwerKey(prev => prev + 1);
              //  toast.success("Show all movie");
             })
             .catch(err =>{
               console.log(err);
              //  toast.error("could not show all movie")
             })
               },[])

               console.log(cmnt);
  return (
      <div className=''>
            <div className='text-center mb-10'>
                <h3 className="text-3xl text-center font-bold">Review</h3>
                <p>Discover what our community is saying about their experience</p>
            </div>

          <div>
              <Swiper
            //    key={swiperKey}
               key={skey}
                loop={true}
                // loop={cmnt.length >= 3}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                 pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    cmnt.map(review => <SwiperSlide key={review.id}>
                        <Reviewscard review={review}></Reviewscard>
                    </SwiperSlide>)
                }
            </Swiper>
          </div>

        </div>
    
  )
}

export default Reviews
