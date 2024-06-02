import React from "react";
import { useNavigate } from "react-router-dom";
import EditBooking from "./EditBooking";

const BookingRow = ({ booking, handleDelete, index }) => {
  const navigate = useNavigate();
  const { _id, customerName, date, email, service, img, price } = booking;

  const handleUpdate = (id) => {
    navigate(`/booking/${id}`);
  };

  return (
    <>
      <tr className="text-center mt-4">
        <td className="border border-gray-300">{index + 1}</td>
        <td className="border border-gray-300">
          <img src={img} alt="img" className="w-12 h-12 rounded-full" />
        </td>
        <td className="border border-gray-300">{customerName}</td>
        <td className="border border-gray-300">{service}</td>
        <td className="border border-gray-300">{email}</td>
        <td className="border border-gray-300">{date}</td>
        <td className="border border-gray-300">{price}</td>
        <td className="border border-gray-300">
          <div className="flex justify-evenly">
            <button
              onClick={() => handleUpdate(_id)}
              className="btn btn-primary"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-secondary"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default BookingRow;
