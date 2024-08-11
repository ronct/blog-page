import React from 'react'
import gulfshoresbeach from '../assets/Images/gulfshoresbeach.jpg';

function IntroPost() {
  return (
    <div className='flex mt-7 ml-2 '>
      <img src= {gulfshoresbeach} />
      <p className='ml-4  mr-3 text-[20px]'>A trip to Gulf Shores Alabama is always very relaxing and laid back.
        We spend a lot of time at the beach and eating in some local restraunts.
      </p>
    </div>
  )
}

export default IntroPost