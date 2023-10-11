import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar01.jpg'
import AVTR2 from '../../assets/avatar02.jpg'
import AVTR3 from '../../assets/avatar03.jpg'
import AVTR4 from '../../assets/avatar04.jpg'
import AVTR5 from '../../assets/avatar05.jpg'
import AVTR6 from '../../assets/avatar06.jpg'

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const data = [

{
  avatar: AVTR1,
  name: 'Michael',
  review: 'I really appreciate the efforts of customer support in delivering the resolutions via remote support without waiting for the customer’s response, which not only satisfies the customer needs but also turn their experiences positive with us.'
},
{
  avatar: AVTR5,
  name: 'Claire',
  review: 'I am glad to have my product and services in the safe hands of one of the best QA who understand the client’s needs and believes in real-time executions to accomplish the business goals. In addition, I also admire the invaluable insights provided to us, useful in driving the new business. Thanks for your efforts and support.'
},
{
  avatar: AVTR3,
  name: 'Ryan',
  review: 'Very professional and definitely go the extra mile. Look forward to developing a partnership and continuing our relationship into the future.'
},
{
  avatar: AVTR6,
  name: 'Chandler',
  review: 'I am quite impressed with the efficiency and proficiency of team in successfully updating and implementing changes at 11th hour to meet the need of volatile requirements.'
}

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
          pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>                  
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials