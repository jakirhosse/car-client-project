import React from 'react';
import person1 from '../../../assets/assets/images/about_us/person.jpg'
import parts from '../../../assets/assets/images/about_us/parts.jpg'
const About = () => {
        return (
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative -mt-12'>
  <img src={person1} className='w-3/4 rounded-lg shadow-2xl' alt="img" />
  <img src={parts} className='w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl' alt="img" />
    </div>
    <div className='lg:w-1/2 space-y-4 p-4 -mt-6'>
      <h1 className="text-3xl text-orange-500 font-bold">About uss </h1>
      <h2>ew are qualifed & of expernice on this field</h2>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, Lorem ipsum dolor sit amet.</p>
      <button className="btn btn-primary">Get more info</button>
    </div>
  </div>
</div>  
);
};

export default About;