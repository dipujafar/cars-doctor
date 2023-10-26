import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import axios from "axios";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const url = `http://localhost:5000/book?email=${user?.email}`;
  useEffect(() => {
    axios.get(url).then((res) => console.log(res.data));
  }, [url]);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Booking;
