import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  
  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    if (user?.email) {
      axios.get(url, { withCredentials: true })
        .then(res => {
          setBookings(res.data);
        })
        .catch(err => {
          console.error("Error fetching bookings:", err);
        });
    }
  }, [url]);

  const handleDelete = id => {
    const proceed = confirm('Are you sure you want to delete?');
    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          alert('Deleted successfully');
          const remaining = bookings.filter(booking => booking._id !== id);
          setBookings(remaining);
        }
      });
    }
  };

  const handleUpdate = id => {
    const updatedBooking = { /* your updated booking data here */ };
    const proceed = confirm('Are you sure you want to update?');
    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBooking)
      })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          alert('Updated successfully');
          const updatedBookings = bookings.map(booking => 
            booking._id === id ? { ...booking, ...updatedBooking } : booking
          );
          setBookings(updatedBookings);
        }
      });
    }
  };

  return (
    <>
      <table className="w-2/3 mx-auto">
        <thead>
          <tr>
            <th className="border border-black">SL</th>
            <th className="border border-black">Image</th>
            <th className="border border-black">Name</th>
            <th className="border border-black">Service</th>
            <th className="border border-black">Email</th>
            <th className="border border-black">Date</th>
            <th className="border border-black">Price</th>
            <th className="border border-black">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((booking, index) => (
            <BookingRow 
              key={booking._id} 
              booking={booking}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Bookings;
