import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  const listProduct = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      setList(response.data.products);
    } catch (error) {
      setError("Failed to fetch product list");
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      );
      listProduct();
    } catch (error) {
      console.error("Failed to delete product:", error.message);
    }
  };

  useEffect(() => {
    listProduct();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Product List</h2>
      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Subcategory</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {list.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-full border"
                  />
                </td>
                <td className="py-3 px-6 text-left font-semibold">{item.name}</td>
                <td className="py-3 px-6 text-left">{item.description}</td>
                <td className="py-3 px-6 text-left">{item.category}</td>
                <td className="py-3 px-6 text-left">{item.subCategory}</td>
                <td className="py-3 px-6 text-left">${item.price}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
