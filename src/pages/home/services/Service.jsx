import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div className="card bg-base-100 shadow-xl mt-10">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500 font-medium">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checked/${_id}`}>
            <button className="btn btn-sm btn-outline btn-primary">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
