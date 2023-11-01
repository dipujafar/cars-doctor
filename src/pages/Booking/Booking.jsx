import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import axios from "axios";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const url = `/book?email=${user?.email}`;
    axiosSecure.get(url).then((res) => setBooking(res.data));
  }, [user, axiosSecure]);

  //delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://cars-doctor-server-zeta.vercel.app/book/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              const remaining = booking.filter((service) => service._id !== id);
              setBooking(remaining);
              Swal.fire("Deleted!", "The service has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleConfirm = (id) => {
    axios
      .patch(`https://cars-doctor-server-zeta.vercel.app/book/${id}`, {
        status: "confirm",
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          const remaining = booking.filter((service) => service._id !== id);
          const update = booking.find((service) => service._id === id);
          update.status = "confirm";
          const newBooking = [update, ...remaining];
          setBooking(newBooking);
          Swal.fire({
            title: "Confirm Booking this service",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-4xl text-center">
        Your Booking Service: {booking.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service</th>
              <th>Email</th>
              <th>Date</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {booking?.map((services) => (
              <BookingRow
                key={services._id}
                services={services}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
