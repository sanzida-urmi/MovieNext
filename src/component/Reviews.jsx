'use client'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Reviewscard from './ReviewCard';
import { use, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider/AuthContext';


function Reviews() {

    const {loading,setLoading,user} = use(AuthContext);
      const [skey,setSkey]= useState(0)
    
       const [cmnt, setCmnt] = useState([])

     useEffect(()=>{
                 setLoading(true);
             fetch("https://movie-next-server.vercel.app/comments")
             .then(res=>res.json())
             .then(data =>{
               setCmnt(data)
               setLoading(false);
               setSkey(p=> p+1)
              
             })
             .catch(err =>{
               console.log(err);
             })
               },[])

               console.log(cmnt);
  return (
      <div className=''>
            <div className='text-center mb-10'>
                <h3 className="text-3xl text-center font-bold wrap-anywhere  text-red-400">Reviews</h3>
                <p className='wrap-anywhere '>Discover what our community is saying about their experience</p>
            </div>

          <div>
              <Swiper
               key={skey}
                loop={true}
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
