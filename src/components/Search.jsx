import React, { useEffect, useRef } from "react";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import ProductsData from "../data/ProductsData";

const Search = () => {
  // let { isSearchShow, setisSearchShow } = useData();

  let {
    searchquery,
    setsearchquery,
    reloader,
    setreloader,
    isSearchShow,
    setisSearchShow,
  } = useData();

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setsearchquery(e.target.value);
  };

  let inputref = useRef(null);

  useEffect(() => {
    inputref.current?.focus();
  }, [searchquery]);

  console.log(reloader);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setreloader(true);
      setTimeout(() => {
        setisSearchShow(false);
        setreloader(false);
        navigate(`/search-query/${searchquery}`);
      }, 2000);
    } else return;
  };

  const handleSeachNavigae = () => {

  }

  console.log(searchquery);

  let filterSearchtags = ProductsData.filter((p) =>
    p.name.toLocaleLowerCase().includes(searchquery.toLocaleLowerCase())
  );

  return (
    <div className="search-page min-h-[80vh] w-full bg-white fixed  top-0  z-[1500] py-7 px-20">
      <h1 className="w-full text-center text-2xl font-semibold font-sans">
        Search Our site
      </h1>
      <div className="search w-full border-2 border-gray-400 rounded-md outline-blue-500 mt-5 flex items-center relative">
        <input
          ref={inputref}
          onChange={handleOnChange}
          onKeyDown={handleSearch}
          type="text"
          value={searchquery}
          placeholder="Search for... "
          className="w-[90%] px-4.5 outline-none py-2.5"
        />
        <i
          onClick={() => {
            if (isSearchShow) {
              setisSearchShow(false);
            }
          }}
          className="ri-close-line absolute right-3 text-2xl cursor-pointer text-[#222]"
        ></i>
      </div>
      <div className="search_trending mt-5">
        <h2 className="text-xl font-mono">Trending Search</h2>
        <div className="flex items-center flex-wrap mt-3 gap-4">
          {filterSearchtags.map((elem, id) => {
            return (
              <button
                value={elem.name}
                onClick={(e) => setsearchquery(elem.name)}
                className="trending_search border-1  cursor-pointer py-1 rounded-full px-4 text-[12px] hover:bg-[#efefef] hover:border-none ease-in-out duration-500"
              >
                {elem.name}
              </button>
            );
          })}
        </div>
        <div className="mt-5">
          <h2 className="text-xl font-mono">Recent Search</h2>
          <div className="search_recent flex items-center flex-wrap gap-4  mt-3">
            {filterSearchtags.map((p) => {
              return (
                <div
                  onClick={(e) => setsearchquery(p.name)}
                  className="search_recent_item cursor-pointer flex items-center p-2 w-72 bg-[#CFCFCF] rounded-2xl"
                >
                  <img className="h-full w-[45%] " src={p.images[0]} alt="" />
                  <h4 className="p-5  font-semibold">{p.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
