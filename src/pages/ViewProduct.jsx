import React, { useEffect, useState } from "react";
import ProductsData from "../data/ProductsData";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import Products from "./Products";
import Share from "../components/Share";

const ViewProduct = () => {
  let { id } = useParams();
  let { AddToCart, loggeduser, setreloader } = useData();
  let navigate = useNavigate();

  let product = ProductsData.find((p) => p.id === id);
  let isSavedCard = loggeduser?.cart.includes(product.id);

  let location = useLocation();

  const [orderItem, setorderItem] = useState({
    id: product.id,
    name: product.name,
    size: product.sizes[0],
    price: product.price,
    image: product.images[0],
    qty: 1,
    total: product.price,
  });

  useEffect(() => {
    if (product) {
      setorderItem({
        id: product.id,
        name: product.name,
        size: product.sizes[0],
        price: product.price,
        image: product.images[0],
        qty: 1,
        total: product.price,
      });
    }
  }, [product]);

  const handleIncrement = () => {
    if (orderItem.qty >= 0 && orderItem.qty < 4) {
      setorderItem((prev) => {
        const newQty = prev.qty + 1;
        // const priceNum = parseInt(prev.price.replace("Rs", ""), 10);
        return {
          ...prev,
          qty: newQty,
          total: prev.price * newQty, // ✅ use newQty, not prev.qty
        };
      });
    } else {
      console.log("Quantity cannot be more than 4");
    }
  };

  console.log(orderItem.total);
  // console.log(parseInt(orderItem.price.replace("," , ""),1));

  const handleDecrement = () => {
    if (orderItem.qty > 1) {
      setorderItem((prev) => {
        const newQty = prev.qty - 1;
        const priceNum = parseInt(prev.price.replace("Rs", ""), 10);
        return {
          ...prev,
          qty: newQty,
          total: prev.price * newQty, // ✅ use newQty, not prev.qty
        };
      });
    } else {
      console.log("Minimum quantity is 1");
    }
  };

  console.log(orderItem.total);

  const handleSize = (itemsize) => {
    setorderItem((prev) => ({
      ...prev,
      size: itemsize,
    }));
  };

  const handlePayment = (id) => {
    setreloader(true);
    setTimeout(() => {
      setreloader(false);
      navigate(`/product/${id}/check-out`, {
        state: { orderItem, cameFromProduct: true},
      });
    }, 2000);
  };

  // console.log(orderItem.qty);

  const [image, setimage] = useState(product.images[0]);

  useEffect(() => {
    if (product?.images?.[0]) {
      setimage(product.images[0]);
    }
  }, [product]);

  useEffect(() => {}, [image]);

  return (
    <div className="w-full flex flex-col  bg-[#f8f9fb] text-[#222]">
      <div className="view_product_page w-full flex p-5">
        {" "}
        <div className="view_product_images flex flex-wrap w-[55%] p-2 gap-3 ">
          {product.images.map((elem, id) => {
            return (
              <img
                key={id}
                className="w-[48%] object-cover product_many_images"
                src={elem}
                alt=""
              />
            );
          })}
          <img
            className="w-[100%] object-cover mobile_big_image hidden "
            src={image}
            alt=""
          />
          <div className="mobile_images block md:hidden overflow-x-auto w-full  gap-3 ">
            {product.images.map((i, id) => (
              <div
                onClick={() => setimage(i)}
                key={id}
                className=" h-16 w-16  rounded-sm flex-shrink-0 hover:border-2 border-blue-500 hover:scale-[1.01] duration-500 ease-in-out"
              >
                <img
                  src={i}
                  alt=""
                  className="h-full w-full rounded-sm object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="product_all_details w-[45%] p-3 mt-2 ">
          <div className="product-detail">
            <h1 className="produt_name_view_page text-2xl  font-mono font-thin">
              {product.name}
            </h1>
            <div className="flex items-center relative gap-5 mt-2">
              <h1 className="font-semibold text-xl text-red-600">
                Rs {product.price}
              </h1>
              <div className="flex items-center relative">
                <div className="absolute w-full border-t-2 border-gray-800"></div>
                <h1 className="font-semibold text-xl text-gray-800">
                  Rs {product.orginalPrice}
                </h1>
              </div>
            </div>
            <div className="product_offer p-3 border-1 rounded border-gray-500 mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2.5 border-b-1 pb-4 border-b-gray-500">
                <i className="ri-car-washing-line text-xl"></i>
                <h4 className="text-sm font-semibold">
                  Estimate delivery time: 7-8 working days.
                </h4>
              </div>
              <div className="flex items-center gap-2.5 border-b-1 pb-4 border-b-gray-500">
                <i className="ri-discount-percent-line text-xl"></i>
                <h4 className="text-sm font-semibold">
                  Use code RR500 to get ₹500 off. Applicable only on Raised
                  Right..
                </h4>
              </div>
              <div className="flex items-center gap-2.5  border-b-gray-500">
                <i className="ri-discuss-line text-xl"></i>
                <h4 className="text-sm font-semibold">
                  {product.returnPolicy}
                </h4>
              </div>
            </div>
            <div className="product_size mt-4">
              <h1 className="font-semibold text-sm">Size: XS</h1>
              <div className="size_buttons flex items-center gap-2.5 mt-4">
                {product.sizes.map((p, id) => {
                  return (
                    <button
                      onClick={() => handleSize(p)}
                      key={id}
                      value={p}
                      className={`font-semibold text-sm border-1 border-gray-500 py-2 px-5 rounded cursor-pointer hover:bg-black hover:border-none hover:text-white duration-500 ease-in-out ${
                        orderItem.size === p ? "bg-black text-white" : ""
                      } `}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>
            <Share url={product} />
            <div className="product_order flex flex-col mt-4 border-b-1 pb-5 border-gray-600">
              <div className="product_order_some flex items-center gap-5">
                <div className="product_qty flex items-center py-4 bg-[#EFEFEF] rounded-full px-4 gap-5">
                  <div onClick={handleDecrement}>
                    <i className="ri-subtract-line text-xl cursor-pointer"></i>
                  </div>
                  <div className="text-sm font-semibold">{orderItem.qty}</div>
                  <div onClick={handleIncrement}>
                    <i className="ri-add-line text-xl cursor-pointer"></i>
                  </div>
                </div>
                <div className="product_add-to-cart">
                  {!isSavedCard ? (
                    <button
                      onClick={() => AddToCart(product.id)}
                      className="add_to_cart_btn w-96 bg-black text-white py-3 rounded-full cursor-pointer"
                    >
                      Add to cart
                    </button>
                  ) : (
                    <button
                      onClick={() => {}}
                      className="add_to_cart_btn w-96 bg-black text-white py-3 rounded-full cursor-pointer"
                    >
                      Go to Cart
                    </button>
                  )}
                </div>
                <div className=" product_whishlist_icon flex items-center justify-center h-12 w-12 rounded-full border-1 border-gray-600 cursor-pointer hover:bg-black hover:text-white ease-in-out duration-500">
                  <i className="ri-heart-3-line cursor-pointer"></i>
                </div>
              </div>
              <button
                onClick={() => handlePayment(product.id)}
                className="w-full bg-red-800 cursor-pointer text-white py-2 rounded-full mt-4"
              >
                Buy Now
              </button>
            </div>
            <div className="product_description mt-4">
              <h1 className="text-sm font-semibold font-mono"> Description</h1>
              <p className="text-sm  mt-2 text-[#222] font-sans">
                {product.description}
              </p>
            </div>
            <div className="product_details">
              <h1 className="text-sm font-semibold font-mono mt-4">
                Product Details
              </h1>
              <ul className="ml-4 mt-2  font-mono">
                {product.productDetails.map((p, id) => {
                  return (
                    <li key={id} className="list-disc text-sm font-sans">
                      {p}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default ViewProduct;
