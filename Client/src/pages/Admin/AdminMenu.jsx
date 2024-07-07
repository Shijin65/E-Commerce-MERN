import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="flex md:flex-col md:gap-8 ">
      <NavLink to="/admin/add-product"  className="btn btn-xs md:btn-md ">
        Add Product
      </NavLink>
      <NavLink
        to="/admin/show-all-products"
        
        className="btn btn-xs md:btn-md"
      >
        Show All Products
      </NavLink>
      <NavLink
        to="/admin/show-all-users"
        
        className="btn btn-xs md:btn-md"
      >
        Show All Users
      </NavLink>
      <NavLink to="/admin/show-all-orders"  className="btn btn-xs md:btn-md">
         Orders
      </NavLink>
    </div>
  );
};

export default AdminMenu;
