import React from "react";
import { NavLink } from "react-router-dom";
const VITE_API_URL = import.meta.env.VITE_API_URL;


const AdminProductCard = ({ product , rerender}) => {

  const handledelete = async () => {
    const response = await fetch(
      `${VITE_API_URL}/api/admin/product/${product._id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (response.ok) {
      alert("product deleted");
      rerender()
      console.log("Product deleted successfully", data);
    } else {
      console.error("Failed to delete product", data);
    }
  };
  console.log(product);
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl max-w-md max-h-44">
        <figure className="max-h-40">
          <img
            className="max-h-24 md:max-h-32"
            src={product?.images[1]}
            alt="phone"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">{product.name}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button onClick={handledelete} className="btn btn-error btn-sm">
              delete
            </button>
            <NavLink to={`/admin/edit-product/${product._id}`} className="btn btn-primary btn-sm">Edit</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
