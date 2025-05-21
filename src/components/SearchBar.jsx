import { useState } from "react";
import search from "../../public/search.png";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const types = ["Buy", "Rent"];
  const [query, setQuery] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <div>
        {types.map(function (value) {
          return (
            <button
              key={value}
              onClick={() => switchType(value)}
              className={`px-9 py-4 border-b-0 first:border-r-0 first:rounded-tl-md even:rounded-tr-md border border-spanish-gray ${
                query.type === value ? "bg-black text-white" : ""
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>
      <form className="border sm:flex-col border-spanish-gray sm:border-none flex justify-between h-16 gap-1">
        <input
          className="sm:border sm:border-solid sm:border-spanish-gray border-none focus:outline-none lg:w-36 md:w-44 sm:w-auto sm:p-5 lg:px-1 py-0 px-2.5 w-48"
          type="text"
          name="location"
          placeholder="City Location"
          onChange={handleChange}
        ></input>
        <input
          className="sm:border sm:border-solid sm:border-spanish-gray border-none focus:outline-none lg:w-36 md:w-44 sm:w-auto sm:p-5 lg:px-1 py-0 px-2.5 w-48"
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
        ></input>
        <input
          className="sm:border sm:border-solid sm:border-spanish-gray border-none focus:outline-none lg:w-36 md:w-44 sm:w-auto sm:p-5 lg:px-1 py-0 px-2.5 w-48"
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleChange}
        ></input>
        <Link
          to={`/list?type=${query.type}&city=${query.location}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          className="sm:p-4 border-none cursor-pointer bg-mustard flex-1 flex justify-center items-center"
        >
          <button type="submit">
            <img src={search} alt="search" />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
