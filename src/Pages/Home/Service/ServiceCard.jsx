import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
        const {_id,title,img,price,description} = service;
        return (
   <div className="card  w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body ">
  <p>title:{title}</p>
    <h2 className='text-xl text-orange-500'>price :${price}</h2>
    <div className="card-actions">
     <Link to={`/book/${_id}`}> <button className="btn btn-primary">Book Now</button></Link>
    </div>
  </div>
</div>
 );
};

export default ServiceCard;