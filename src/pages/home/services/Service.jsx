const Service = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div className="card bg-base-100 shadow-xl mt-10">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500 font-medium">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-outline btn-primary">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
