import { useState } from "react";
import search from "../../public/search.png";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("location") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };
  return (
    <div className="flex flex-col gap-[10px]">
      <h1 className="lg:text-4xl sm:4-xl text-4xl font-light leading-tight">
        Search results for <b>{searchParams.get("city")}</b>
      </h1>
      {/* Top */}
      <div>
        <div className="flex flex-col gap-[2px]">
          <label className="text-xs" htmlFor="city">
            Location
          </label>
          <input
            className="p-[10px] w-full border-spanish-gray border border-solid rounded-sm text-sm"
            type="text"
            id="location"
            name="city"
            placeholder="City Location"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      {/* Bottom */}
      <div className="flex justify-between gap-[20px] sm:flex-col sm:gap-[10px]">
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="type">Type</label>
          <select
            className="p-[10px] w-[100px] sm:w-full border-spanish-gray border border-solid rounded-sm text-sm"
            name="type"
            id="type"
            defaultValue={query.type}
            onChange={handleChange}
          >
            <option value="any">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="flex flex-col gap-[2px]">
          <label htmlFor="property">Property</label>
          <select
            className="p-[10px] w-[100px] sm:w-full border-spanish-gray border border-solid rounded-sm text-sm"
            name="property"
            id="property"
            onChange={handleChange}
            defaultValue={query.property}
          >
            <option value="any">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="flex flex-col gap-[2px]">
          <label htmlFor="minPrice">Min Price</label>
          <input
            className="p-[10px] w-[100px] sm:w-full border-spanish-gray border border-solid rounded-sm text-sm"
            type="number"
            id="minPrice"
            name="minPrice"
            min={0}
            defaultValue={query.minPrice}
            onChange={handleChange}
            placeholder="Any"
          />
        </div>

        <div className="flex flex-col gap-[2px]">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            className="p-[10px] w-[100px] sm:w-full border-spanish-gray border border-solid rounded-sm text-sm"
            type="number"
            id="maxPrice"
            name="maxPrice"
            defaultValue={query.maxPrice}
            onChange={handleChange}
            placeholder="Any"
          />
        </div>

        <div className="flex flex-col gap-[2px]">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            className="p-[10px] w-[100px] sm:w-full border-spanish-gray border border-solid rounded-sm text-sm"
            type="number"
            id="bedroom"
            name="bedroom"
            defaultValue={query.bedroom}
            onChange={handleChange}
            placeholder="Any"
          />
        </div>

        <button
          onClick={handleFilter}
          className="bg-mustard w-[100px] sm:w-full p-[10px] flex justify-center items-center border-none cursor-pointer"
        >
          <img width={24} height={24} src={search} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
