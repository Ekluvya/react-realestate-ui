import { useState } from "react";

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
      <form className="border border-spanish-gray flex justify-between h-16 gap-1">
        <input
          className="border-none py-0 px-2.5 w-48"
          type="text"
          name="location"
          placeholder="City Location"
        ></input>
        <input
          className="border-none py-0 px-2.5 w-48"
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        ></input>
        <input
          className="border-none py-0 px-2.5 w-48"
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        ></input>
        <button
          className=" border-none cursor-pointer bg-mustard flex-1 flex justify-center items-center"
          type="submit"
        >
          <img src="/search.png" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
