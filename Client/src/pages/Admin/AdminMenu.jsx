import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="flex md:flex-col md:gap-8">
      <NavLink to="/admin/add-product" activeClassName="active" className="btn">
        Add Product
      </NavLink>
      <NavLink
        to="/admin/show-all-products"
        activeClassName="active"
        className="btn"
      >
        Show All Products
      </NavLink>
      <NavLink
        to="/admin/show-all-users"
        activeClassName="active"
        className="btn"
      >
        Show All Users
      </NavLink>
    </div>
  );
};

export default AdminMenu;
