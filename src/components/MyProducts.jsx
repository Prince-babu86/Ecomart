import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import ProductsData from "../data/ProductsData";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

gsap.registerPlugin(ScrollTrigger);

const MyProducts = () => {
  const navigate = useNavigate(); // for navigate a page
  let { setreloader , BuyNowProduct, } = useData();

  const hanldeNavigateProductPage = (id) => {
    if (id) {
      setreloader(true);
      setTimeout(() => {
        navigate(`/product/${id}`);
        setreloader(false);
      }, 1000);
    } else {
      console.log("routes not found");
    }
  };

  // topfits items
  const FilterTopFitsItems = ProductsData.filter(
    (p, id) => p.categoery === "topfits"
  );
  const topfitsitems = FilterTopFitsItems.map((p, id) => {
    return (
      <div  key={id} className="myproduct_item cursor-pointer w-[450px] ">
        <div onClick={()=>BuyNowProduct(p.id)} className="my_product_item_image flex items-center  h-[520px]">
          <div className="group flex h-full w-full  transition-transform   duration-75 relative">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1000ms] opacity-100 group-hover:opacity-0"
              src={p.images[0]}
              alt=""
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1000ms] opacity-0 group-hover:opacity-100"
              src={p.images[p.images.length - 1]}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start p-3 gap-2 cursor-pointer">
          <h4 className="text-md font-semibold  font-sans leading-5 hover:text-pink-500 duration-300 ease-in-out">
            {p.name}
          </h4>
          <h4 className="text-sm font-semibold font-mono">Rs {p.price}</h4>
          <button
            onClick={() => {
              hanldeNavigateProductPage(p.id);
            }}
            className="w-full bg-black text-white px-4 py-2 rounded-full cursor-pointer "
          >
            Buy Now
          </button>
        </div>
      </div>
    );
  });

  // bootomfits items
  const FilterBottomItems = ProductsData.filter(
    (p, id) => p.categoery === "bottomfits"
  );
  const bottmofitsitems = FilterBottomItems.map((p, id) => {
    return (
      <div  key={id} className="myproduct_item  cursor-pointer w-[450px] ">
        <div className="flex items-center  h-[520px]">
          <div onClick={()=>BuyNowProduct(p.id)} className="group flex h-full w-full  transition-transform   duration-75 relative">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1000ms] opacity-100 group-hover:opacity-0"
              src={p.images[0]}
              alt=""
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1000ms] opacity-0 group-hover:opacity-100"
              src={p.images[p.images.length - 1]}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start p-3 gap-2 cursor-pointer">
          <h4 className="text-md font-semibold  font-sans leading-5 hover:text-pink-500 duration-300 ease-in-out">
            {p.name}
          </h4>
          <h4 className="text-sm font-semibold font-mono">Rs {p.price}</h4>
          <button
            onClick={() => {
              hanldeNavigateProductPage(p.id);
            }}
            className="w-full bg-black text-white px-4 py-2 rounded-full cursor-pointer "
          >
            Buy Now
          </button>
        </div>
      </div>
    );
  });

  // comboset fits
  const FilterCompoSet = ProductsData.filter(
    (p, id) => p.categoery === "comboset"
  );
  const composetfits = FilterCompoSet.map((p, id) => {
    return (
      <div  key={id} className="coords_product_item cursor-pointer flex-col flex w-[50%] transition-transform overflow-x-hidden">
        <div onClick={()=>BuyNowProduct(p.id)} className="flex h-full w-full   group ease-in-out duration-500  hover:-translate-x-[100%]">
          <img
            className="object-cover w-full h-full "
            src={p.images[0]}
            alt=""
          />
          <img
            className="object-cover w-full h-full"
            src={p.images[1]}
            alt=""
          />
        </div>
        <div className="p-5">
          <h4 className="text-[16px] font-semibold text-[#222]">{p.name}</h4>
          <h4 className="text-md font-semibold font-mono">Rs {p.price}</h4>
          <button
            onClick={() => {
              hanldeNavigateProductPage(p.id);
            }}
            className="w-full bg-black text-white rounded-full py-2 cursor-pointer mt-2"
          >
            Buy Now
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="myProductpage w-full flex flex-wrap mt-7 bg-white items-center justify-center pb-20 ">
      {/* <div className="mt-6 group cursor-pointer w-full flex gap-8 items-center  ">
        <div className="flex gap-8 w-full group- ease-in-out duration-200">
          <i className="ri-arrow-right-line text-9xl group-hover:rotate-180 duration-700 ease-in-out"></i>
          <h1 className="text-9xl font-mono truncate tracking-tight">Our </h1>
          <h1 className="text-9xl font-mono truncate tracking-tight">
            Products{" "}
          </h1>
        </div>
      </div> */}

      <div className="myProducts1 w-full mt-7 px-12  py-7">
        <h1 className="text-3xl font-mono font-semibold my_product_head">Oversized Top Fits</h1>
        <div className="  products_my_products products_categoerys flex flex-wrap  mt-8 gap-4 relative    ">
          {topfitsitems}
        </div>

        <div className=" w-full mt-12 ">
          <h1 className="text-3xl font-mono font-semibold my_product_head">Bottom Fits</h1>
          <div className="bottom_fits_products products_categoerys products_my_products flex flex-wrap mt-5 gap-4">
            {bottmofitsitems}
          </div>
        </div>

        <div className="myproduct_big_image_product flex gap-0.5 mt-7">
          <div className="myproduct_big_image_product_item  h-[600px] w-[41vw] ">
            <img
              src="https://youthiapa.com/cdn/shop/files/3_83ddb1c5-f2e9-4c76-86d5-84296dc0b276.jpg?v=1749984535&width=660"
              alt=""
              className="h-full w-full object-cover hover:scale-[1.04] cursor-pointer ease-in-out duration-500 p-3"
            />
          </div>

          <div className="myproduct_big_image_product_item h-[600px] w-[41vw] ">
            <img
              src="https://youthiapa.com/cdn/shop/files/2_82972b9f-d30a-466c-92e3-cca36bfce77e.jpg?v=1749984585&width=660"
              alt=""
              className="h-full w-full object-cover hover:scale-[1.04] cursor-pointer ease-in-out duration-500 p-3"
            />
          </div>

          <div className="myproduct_big_image_product_item h-[600px] w-[41vw] ">
            <img
              src="https://youthiapa.com/cdn/shop/files/1_85f9448b-9edb-4ea0-b8db-ade741d9e9fc.jpg?v=1749984626&width=660"
              alt=""
              className="h-full w-full object-cover hover:scale-[1.04] cursor-pointer ease-in-out duration-500 p-3"
            />
          </div>
        </div>

        <div className="coods_products flex flex-col products_categoerys w-full  mt-12">
          <h1 className="text-3xl font-mono font-semibold my_product_head">Coord Fits</h1>
          <div className="flex combo_set_view w-full mt-5 gap-2">{composetfits}</div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
