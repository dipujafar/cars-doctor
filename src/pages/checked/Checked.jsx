import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Checked = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, _id, price, img } = service;

  const handleBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const order = {
      CustomerName: name,
      email,
      date,
      price,
      service: title,
      img,
      service_id: _id,
    };
    console.log(order);

    // fetch("http://localhost:5000/book", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(order),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    axios
      .post("http://localhost:5000/book", order)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Successfully!",
            text: "Service Booked",
            icon: "success",
          });
        }
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="mt-10 min-h-screen">
      <div>
        <h1 className="text-3xl font-medium text-center">
          Book service: {title}
        </h1>
        <form onSubmit={handleBook} className="p-2 w-11/12 mx-auto">
          {/* input name and date */}
          <div className="mb-4 md:flex">
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">Name:</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                id=""
                required
                className=" w-11/12 py-1 px-2 border  bg-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">Date:</label>
              <input
                type="Date"
                name="date"
                id=""
                required
                className=" w-11/12  py-1 px-2 border  bg-transparent"
              />
            </div>
          </div>
          {/* input name and brand name */}
          <div className="mb-4 md:flex">
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">Email:</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                id=""
                required
                className=" w-11/12 py-1 px-2 border  bg-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="text-lg font-medium mr-2 block">
                Deu Price:
              </label>
              <input
                type="text"
                name="price"
                id=""
                defaultValue={"$" + price}
                required
                className=" w-11/12  py-1 px-2 border  bg-transparent"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Order"
            className="mt-5 btn btn-outline w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Checked;
