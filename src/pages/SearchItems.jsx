import React from 'react'
import Products from './Products'
import { useParams } from 'react-router-dom'
import ProductsData from '../data/ProductsData';
import { Search } from 'lucide-react'; // Optional icon
import FilterBar from '../components/FilterBar';
import { useData } from '../context/DataContext';

const SearchItems = () => {

 let {AddToCart , loggeduser , setisCartShow , BuyNowProduct} =   useData()

  let {query} = useParams();

  let filterProducts = ProductsData.filter((p) => p.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || p.brand.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
//   console.log(filterProducts);
   const renderItems = filterProducts.map((p, id) => {


    let isSavedCart = loggeduser?.cart.includes(p.id);
    console.log(isSavedCart);
   

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
          <h2 className="text-sm font-semibold text-">{p.price}</h2>
          {/* Add to Cart – Light Premium Style */}
          {!isSavedCart ? <button onClick={()=>AddToCart(p.id)} className="bg-gray-100 text-gray-800 rounded-full py-2 px-6 mb-2 mt-2 hover:bg-gray-200 hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer shadow-sm">
            Add to Cart
          </button> : <button onClick={()=>setisCartShow(true)} className="bg-gray-100 text-gray-800 rounded-full py-2 px-6 mb-2 mt-2 hover:bg-gray-200 hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer shadow-sm">
          Got to cart
          </button>}

          {/* Buy Now – Soft Red/Pink with Premium Feel */}
          <button onClick={()=>BuyNowProduct(p.id)} className="bg-red-100 text-red-700 rounded-full py-2 px-6 hover:bg-red-200 hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer shadow-sm">
            Buy Now
          </button>
        </div>
      </div>
    );
  });

  console.log(query);
  return (
    <div className="products_page_ flex flex-wrap px-10 bg-white">
       
        {renderItems.length > 0 ?  <div className='flex w-full flex-wrap'>{renderItems}</div> :  
        <div className="min-h-[90vh] w-full flex flex-col items-center justify-center text-center px-4 bg-white">
      <div className="bg-gray-100 p-6 rounded-full mb-6">
        <Search className="w-8 h-8 text-gray-500" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Product Not Found
      </h2>

      <p className="text-gray-500 mb-6 text-sm md:text-base max-w-md">
        We couldn't find any products matching your filter or search. Try changing your criteria or check back later.
      </p>

      <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
        🛍️ Continue Shopping
      </button>
    </div> }
    </div>
  )
}

export default SearchItems