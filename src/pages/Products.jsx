import React from "react";
import ProductsData from "../data/ProductsData";
import FilterBar from "../components/FilterBar";
import { useData } from "../context/DataContext";
import Footer from "../components/Footer";

const Products = () => {
  let {
    category,
    setCategory,
    sortBy,
    setSortBy,
    searchquery,
    setsearchquery,
    AddToCart ,
    loggeduser,
    setisCartShow,
    BuyNowProduct
  } = useData();

  let filterProducts = ProductsData.filter(
    (p) => category === "All" || p.categoery === category
  );

  const renderItems = filterProducts.map((p, id) => {
    let issaves = loggeduser?.cart.some((item) => item === p.id);
    // console.log(issaves);
   
    return (
      <div key={p.id} className="product_item flex flex-col w-[470px]  p-4">
        <div className="product_images transition-transform overflow-x-hidden overflow-y-hidden">
          <div className="flex duration-500 ease-in-out hover:translate-x-[-100%] ">
            <img
              className="object-cover hover:scale-[1.02]"
              src={p.images[0]}
              alt=""
            />
            <img
              className="object-cover hover:scale-[1.02]"
              src={p.images[p.images.length - 1]}
              alt=""
            />
          </div>
        </div>
        <div className="product_details p-2 mt-2 flex flex-col">
          <div className="flex w-full items-center justify-between ">
            <h1 className="text-md font-sans font-semibold hover:text-pink-500 duration-300 ease-in-out">
              {p.name}
            </h1>
            <div className="product_whishlist_icon flex items-center justify-center h-10 w-10 rounded-full border-1 border-gray-600 cursor-pointer hover:bg-black hover:text-white ease-in-out duration-500">
              <i className="ri-heart-3-line cursor-pointer"></i>
            </div>
          </div>
          <h3 className="text-xs font-semibold text-gray-500">{p.brand}</h3>
          <h2 className="text-sm font-semibold text-">Rs {p.price}</h2>
          {/* Add to Cart – Light Premium Style */}
         {!issaves ?  <button onClick={()=>AddToCart(p.id)} className="bg-gray-100 text-gray-800 rounded-full py-2 px-6 mb-2 mt-2 hover:bg-gray-200 hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer shadow-sm">
            Add to Cart
          </button> :  <button onClick={()=>setisCartShow(true)} className="bg-gray-100 text-gray-800 rounded-full py-2 px-6 mb-2 mt-2 hover:bg-gray-200 hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer shadow-sm">
           Go to cart
          </button>}

          {/* Buy Now – Soft Red/Pink with Premium Feel */}
          <button onClick={()=>BuyNowProduct(p.id)} className="bg-red-100 text-red-700 rounded-full py-2 px-6 hover:bg-red-200 hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer shadow-sm">
            Buy Now
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="products_page_ w-full flex bg-white px-10 flex-col">
      <FilterBar />
      <div className="flex flex-wrap ">{renderItems}</div>
      <Footer/>
    </div>
  );
};

export default Products;
