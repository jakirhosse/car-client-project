import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {

        const [services,SetServices] = useState([]);
        useEffect(()=>{
                fetch('http://localhost:5000/services')
                .then(res=> res.json())
                .then(data => SetServices(data))
        },[])
        return ( 
                <div className='mb-4'>
                  <div className='text-center'>
                        <h2 className='text-2xl text-orange-500 font-bold'>our services</h2>
                        <p className='text-5xl'>our services Area</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos <br /> mollitia ea itaque tempore animi enim. Ipsa nobis perferendis dolore.</p>
                        </div>     
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 ml-8'>
                                {
                                        services.map(service => <ServiceCard key={service._id}
                                        service={service}
                                        ></ServiceCard>)
                                }
                        </div>
                </div>
        );
};

export default Service;