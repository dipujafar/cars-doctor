const BookingRow = ({ services, handleDelete, handleConfirm }) => {
  const { _id, service, img, price, date, email, status } = services;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-24 rounded h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        {status === "confirm" ? (
          <span className="text-lg text-blue-500">Confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-outline btn-sm"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
