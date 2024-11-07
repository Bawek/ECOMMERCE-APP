import { NavLink } from "react-router-dom";
const ProductItem = ({ id, image, name, price }) => {
  return (
    <NavLink
      to={`/products/${id}`}
      className="text-gray-700 font-medium cursor-pointer"
    >
      <div className="text-sm font-medium ">
      <div className="overflow-hidden">
      <img src={image[0]} className=" hover:scale-125 transition-all linear " alt={name}  />
      </div>
      <p>{name}</p>
        <p>${price}</p> {/* Formats price to 2 decimal places */}
      </div>
    </NavLink>
  );
};

export default ProductItem;
