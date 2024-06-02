import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const BookService = () => {
        const service = useLoaderData();
        const {title, _id,price,img} = service;
        const {user} = useContext(AuthContext)

        const handleBookingsubmit= event => {
                event.preventDefault();
                const form = event.target;
                const name = form.name.value;
                const date= form.date.value;
                const email = user?.email;
                const booking = {
                        customerName:name,
                        email,
                        img,
                        service:title,
                        service_id:_id,
                        price:price,
                        date : date
                }
                console.log(booking);
                fetch('http://localhost:5000/booking',{
                 method:'POST',
                 headers:{
                  'content-type':'application/json',
                 },
                 body:JSON.stringify(booking)

                })
                .then(res=>res.json())
                .then(data => {
                  console.log(data);
                  if(data.insertedId){
                    alert('booking confirm');
                  }
                })
        }
        return (
                <div>
                   <h2 className='text-3xl text-center mt-4'>boook:{title}</h2>   
                   <form onSubmit={handleBookingsubmit}>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.customerName} className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" className="input input-bordered" defaultValue={user?.email} required />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Due amount</span>
                        </label>
                        <input type="due-amount" name="due-amount" defaultValue={'$' + price}  className="input input-bordered" required />
                      </div>
                      <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="order-confirm" />
                      </div>
                      </div>
                    </form>  
                </div>
        );
};

export default BookService;