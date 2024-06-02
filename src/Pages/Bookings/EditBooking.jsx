import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBooking = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
 
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${id}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedBooking = {
      customerName: e.target.customerName.value,
      date: e.target.date.value,
      email: e.target.email.value,
      service: e.target.service.value,
      img: e.target.img.value,
      price: e.target.price.value,
    };

    fetch(`http://localhost:5000/booking/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated successfully");
        }
       
      });
     
  };

  return booking ? (
    <form
      className="w-1/3 mx-auto p-6 my-[100px] border rounded-lg shadow-lg"
      onSubmit={handleUpdate}
    >
        <label htmlFor="name">Customer Name :</label>
      <input
        className="border py-1 px-2 rounded-md w-full"
        placeholder="Enter your Customer Name ..."
        type="text"
        name="customerName"
        defaultValue={booking.customerName}
      /> <br />
        <label htmlFor="name">booking date :</label>
      <input
        className="border py-1 px-2 rounded-md w-full my-4"
        placeholder="Enter your booking date ..."
        type="text"
        name="date"
        defaultValue={booking.date}
      /> <br />
        <label htmlFor="name">Customer email :</label>

      <input
        className="border py-1 px-2 rounded-md w-full"
        placeholder="Enter your email ..."
        type="email"
        name="email"
        defaultValue={booking.email}
      /> <br />
        <label htmlFor="name">service :</label>

      <input
        className="border py-1 px-2 rounded-md w-full my-4"
        placeholder="Enter your service ..."
        type="text"
        name="service"
        defaultValue={booking.service}
      /> <br />
        <label htmlFor="name">image</label>
      <input
        className="border py-1 px-2 rounded-md w-full"
        placeholder="Enter your product image ..."
        type="text"
        name="img"
        defaultValue={booking.img}
      /> <br />
        <label htmlFor="name">price:</label>
      <input
        className="border py-1 px-2 rounded-md w-full my-4"
        placeholder="Enter product price ..."
        type="number"
        name="price"
        defaultValue={booking.price}
      /> <br />
      <div className="flex justify-center items-center">
      <button className="bg-primary text-white py-1 px-4 rounded-lg"  type="submit">Update Booking</button>
      </div>
    </form>
  ) : (
    <p>Loading...</p>
  );
};

export default EditBooking;
