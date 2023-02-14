import React from 'react';

import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  return (
    <section className='mb-64 lg:mb-48'>
      <div className='container mx-auto'>
        <div className='bg-purple-400/10 max-h-[400px] p-12 rounded-lg'>
          <div className='text-center'>
            <h2 data-aos="fade-up" data-aos-offset='300' data-aos-delay='1600' 
            className='text-3xl font-bold mb-6'>What our client say</h2>

            <p data-aos="fade-up" data-aos-offset='300' data-aos-delay='1800'
            className='max-w-2xl mx-auto mb-12 lg:mb-24'>
              Lorem ipsum bmfbdmcklvdmglkmvxklvx
              sdlkmdklcxm klcbfklbnxvndsjnccgfvcvcxvb
              sddvklfm....
            </p>
          </div>
          {/* TestimonialSlider */}
          <div data-aos="fade-up" data-aos-offset='300' data-aos-delay='2000'>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Testimonial;
