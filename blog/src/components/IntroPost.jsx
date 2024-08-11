import React from 'react'
import gulfshoresbeach from '../assets/Images/gulfshoresbeach.jpg';

function IntroPost() {
  return (
    <div>
      <div className='mt-7 grid grid-cols-1 md:grid-cols-2 px-5 '>
        <img src= {gulfshoresbeach} className='h-[500px] ' />
        <p className='mr-3 text-[20px]'> I love going to Alabama beaches for gorgeous vacations with lots of
          sun and white sandy beaches. With a laid-back beach vibe and plenty of sunshine its a perfect place to
          relax and unwind. My favorite place to stay is Gulf State Park, located in Gulf Shores Alabama. The 
          campground is just minutes away from the beaches either by bike or vehicle. There is bike and walking 
          paths to the beach and through out the campground. Their website states 29 miles of paved and boardwalk 
          trails. They Have a pier theyre that has some of the best sunsets found anywhere and the sunrise is 
          not bad either. The campground has 496 full hook up sites and 8 primitive tent sites. They have 11 
          modern air-conditioned bath houses a laundry facility. They also have kayaks to rent a swimming pool 
          that is nice to relax in, basketball and tennis, pickle ball courts. The nature center is worth visiting
          its actually very neat and informative.
        </p>
      </div>
    </div>
  )
}

export default IntroPost