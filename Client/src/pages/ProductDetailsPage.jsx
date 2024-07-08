import React, { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/Authcontext";
import { useCart } from "../context/CartContext";
const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [Product, setProduct] = useState();
  const user = useContext(AuthContext);
  const { addToCart } = useCart();
  const location = useLocation();
  const [imageindex, setimageindex] = useState(1);

  const [Productspec, setProductspec] = useState({
    name: "",
    quantity: 1,
    color: "",
    storage: "",
    price: "",
    image:"",
    productId,
  });

  // console.log(Productspec);

  useEffect(() => {
    const GetSingleProductId = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/product/${productId}`,
          {
            method: "GET",
          }
        );
        const userres = await response.json();
        if (!userres.error) {
          setProduct(userres.singleProduct);
          // console.log()
          setProductspec({
            ...Productspec,
            price: userres.singleProduct.price?.newPrice,
            name: userres.singleProduct.name,
            image:userres.singleProduct.images[0]
          });
        }
      } catch (error) {
        console.log("some thing went wrong while featchin the data", error);
      }
    };
    GetSingleProductId();
  }, [productId]);

  const handleAddToCart = () => {
    if (user.user) {
      const cartItem = {
        ...Productspec,
      };
      console.log(cartItem)
      addToCart(cartItem); 
      
      
      navigate("/cart", { replace: true });
    } else {
      localStorage.setItem(`cartItem`, JSON.stringify(Productspec));
      navigate("/login", { state: { from: location } });
      alert("Product drafted");
    }
  };

  const handleColorChange = (event) => {
    const { name, value } = event.target;
    setProductspec({ ...Productspec, [name]: value });
  };

  const handleStorageChange = (event, price) => {
    const { name, value } = event.target;

    setProductspec({ ...Productspec, [name]: value, price: price });
  };

  const cartItem = localStorage.getItem("cartItem");

 
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2  w-full h-full  p-10">
        {/* <!-- Image gallery --> */}
        <div className="flex flex-col justify-center items-center w-full gap-16">
          <img
            className="w-1/3 "
            src={Product?.images[imageindex]}
            alt="device image"
          />
          {/* small images */}
          <div className="flex gap-16 ">
            <div>
              <img
                className="w-16 cursor-pointer"
                src={Product?.images[1]}
                alt="device image "
                onClick={() => setimageindex(1)}
              />
            </div>
            <div>
              <img
                className="w-16 cursor-pointer"
                src={Product?.images[2]}
                alt="device image"
                onClick={() => setimageindex(2)}
              />
            </div>
            <div>
              <img
                className="w-16 cursor-pointer"
                src={Product?.images[3]}
                alt="device image"
                onClick={() => setimageindex(3)}
              />
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-5 justify-center">
          {/* heading */}
          <div className="text-2xl font-semibold text-black  flex gap-4">
            <h1 className="font-semibold">{Product?.name}</h1>{" "}
            <h1>{Product?.storageOptions[0]?.storage}</h1>{" "}
            <h1>{Product?.colors[1]}</h1>
          </div>

          {/* rating */}
          <div className="flex gap-4 text-gray-500 items-center justify-start">
            <div className="rating rating-sm gap-2 -ms-4">
              <input
                type="radio"
                name="rating-1"
                className="rating-hidden "
                defaultChecked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star  "
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
            <h1 className="text-sm md:text:lg">( There are no reviews yet )</h1>
          </div>

          {/* price */}
          <div
            className={`flex font-semibold text-sm mt-2  text-gray-500   gap-8 `}
          >
            <h3 className="text-[12px]">INR</h3>
            <h2 className="font-extrabold text-black">
              {Productspec.price ? Productspec.price : Product?.price?.newPrice}
            </h2>
            <h2 className="line ">{Product?.price?.oldPrice}</h2>
          </div>
          <h1 className="text-gray-400 text- w-full">{Product?.description}</h1>
          {/* COLOR */}
          <form action="">
            <h2 className="my-5">
              <span className="font-bold  ">Colour : </span> {Productspec.color}
            </h2>
            <div className="flex  md:gap-14  gap-6 mt-8">
              {Product?.colors?.map((color) => (
                <label key={color} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    className="hidden"
                    checked={Productspec.color === color}
                    onChange={handleColorChange}
                  />
                  <div
                    className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex items-center justify-center border-2`}
                    style={{ background: `${color}` }}
                  >
                    {Productspec.color === color && (
                      <div>
                        <FaCheck className="font-thin" color="white" />
                      </div>
                    )}
                  </div>
                </label>
              ))}
            </div>

            {/* Memory */}
            <h2 className="my-5 font-semibold">Internal Memory</h2>
            <div className="flex  md:gap-14 gap-6 mt-8 ">
              {Product?.storageOptions.map((space, index) => (
                <label
                  key={space.storage}
                  className="flex items-center cursor-pointer outline outline-2  outline-slate-400"
                >
                  <input
                    // defaultChecked={index === 0 ? true : false}
                    type="radio"
                    name="storage"
                    value={space.storage}
                    className="hidden"
                    checked={Productspec.storage === space.storage}
                    onChange={(event) =>
                      handleStorageChange(event, space.price)
                    }
                  />
                  <div
                    className={`flex items-center justify-center border-2 rounded-none w-16 md:min-w-20 hover:none p-2 ${
                      Productspec.storage === space.storage &&
                      "bg-black text-white "
                    }`}
                  >
                    {space.storage}
                  </div>
                </label>
              ))}
            </div>
            {/* SELECT quantity */}
            <div className="flex justify-start mt-10 py-6 items-center gap-10 border-y-2 select-none">
              <div className="flex  text-xl">
                <div
                  className="border-2 p-3 cursor-pointer"
                  onClick={() =>
                    setProductspec({
                      ...Productspec,
                      quantity: Productspec.quantity > 1 ? Productspec.quantity - 1 : 1,
                    })
                  }
                >
                  -
                </div>
                <div className="border-y-2 p-3">{Productspec.quantity}</div>
                <div
                  className="border-2 p-3 cursor-pointer"
                  onClick={() => {
                    setProductspec({
                      ...Productspec,
                      quantity: Productspec.quantity + 1,
                    });
                  }}
                >
                  +
                </div>
              </div>
              {/* ADD TO CART BUTTON */}
              <button type="button"
                onClick={handleAddToCart}
                className={`btn bg-black hover:bg-black rounded-none text-white ${Productspec.color===""||Productspec.storage=="" ? "btn-disabled":""}`}
              >
                ADD TO CART
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full  p-10 ">
        <div role="tablist" className="tabs tabs-bordered w-full flex-1  ps-10">
          {/* OVER VIEW */}
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Overview"
          />
          {/*  SPECIFICATIONS */}
          <div role="tabpanel" className="tab-content p-10 w-full "></div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Specifications"
            defaultChecked
          />

          <div role="tabpanel" className="tab-content p-10 w-full ">
            {Product?.features.map((item, index) => (
              <h1 key={index} className="flex gap-5 p-1">
                {" "}
                <GoDotFill />
                {item.feature} : {item.value}
              </h1>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetailsPage;
