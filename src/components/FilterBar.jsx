import React, { useState } from "react";
import { useData } from "../context/DataContext";

const FilterBar = () => {
  let { category, setCategory, sortBy, setSortBy ,  } = useData();


  return (
    <div className="w-full mt-5 flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
      {/* Sort By Dropdown */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <label htmlFor="sort" className="text-sm text-gray-600 font-medium">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select</option>
          <option value="newest">Newest</option>
          <option value="lowtohigh">Price: Low to High</option>
          <option value="hightolow">Price: High to Low</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      {/* Category Dropdown */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <label htmlFor="category" className="text-sm text-gray-600 font-medium">
          Category:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="All">All</option>
          <option value="topfits">Top Fits</option>
          <option value="bottomfits">Bottom Fits</option>
          <option value="comboset">Combo Set</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
