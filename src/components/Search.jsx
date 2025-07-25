import React, { useEffect, useRef } from "react";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import ProductsData from "../data/ProductsData";

const Search = () => {
  const {
    searchquery,
    setsearchquery,
    reloader,
    setreloader,
    isSearchShow,
    setisSearchShow,
  } = useData();

  const navigate = useNavigate();
  const inputref = useRef(null);

  useEffect(() => {
    inputref.current?.focus();
  }, [searchquery]);

  const handleOnChange = (e) => {
    setsearchquery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setreloader(true);
      setTimeout(() => {
        setisSearchShow(false);
        setreloader(false);
        navigate(`/search-query/${searchquery}`);
      }, 2000);
    }
  };

  const filterSearchtags = ProductsData.filter((p) =>
    p.name.toLowerCase().includes(searchquery.toLowerCase())
  );

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-y-auto z-[1500] bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6 md:px-20 py-10">
      <div className="max-w-5xl  mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
          Search in Ecomart
        </h1>

        <div className="relative w-full max-w-3xl mx-auto">
          <input
            ref={inputref}
            onChange={handleOnChange}
            onKeyDown={handleSearch}
            value={searchquery}
            placeholder="Search for items, brands, categories..."
            type="text"
            className="w-full rounded-full border border-gray-300 bg-white py-3 px-6 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md transition-all"
          />
          <i
            onClick={() => setisSearchShow(false)}
            className="ri-close-line absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-500 hover:text-red-500 cursor-pointer"
          ></i>
        </div>

        {/* Trending Tags */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            🔥 Trending Searches
          </h2>
          <div className="flex flex-wrap gap-3">
            {filterSearchtags.slice(0, 10).map((item, idx) => (
              <button
                key={idx}
                onClick={() => setsearchquery(item.name)}
                className="bg-slate-200 hover:bg-indigo-100 hover:text-indigo-700 text-sm text-slate-800 px-4 py-2 rounded-full transition shadow-sm"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        {searchquery && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              🔍 Suggestions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {filterSearchtags.map((product, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setreloader(true);
                    setTimeout(() => {
                      setsearchquery(product.name);
                      setisSearchShow(false);
                      setreloader(false);
                      navigate(`/search-query/${product.name}`);
                    }, 2000); // 2-second delay
                  }}
                  className="flex items-center bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer group"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800 group-hover:text-indigo-600 transition">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-500">Tap to view more</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
