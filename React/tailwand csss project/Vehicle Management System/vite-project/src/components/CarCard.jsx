



import { Link } from "react-router-dom";

function CarCard({ image, name, model, price, id }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:shadow-2xl">
      <img src={image} alt={name} className="h-56 w-full object-cover" />

      <div className="p-5">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="mt-2 text-gray-500">model : {model}</p>
        <h3 className="mt-3 text-xl font-bold text-blue-600">{price}</h3>
        <Link
          to={`/vehicle/${id}`}
          className="mt-5 block w-full rounded-lg bg-blue-600 py-3 text-center text-white hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
