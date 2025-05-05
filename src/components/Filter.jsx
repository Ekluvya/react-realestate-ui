import search from "../../public/search.png";

const Filter = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h1 className="lg:text-4xl sm:4-xl text-4xl font-light leading-tight">
        Search results for <b>London</b>
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
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      {/* Bottom */}
      <div className="flex justify-between gap-[20px]">
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="type">Type</label>
          <select
            className="p-[10px] w-[100px] sm:w-[80px] border-spanish-gray border border-solid rounded-sm text-sm"
            name="type"
            id="type"
          >
            <option value="any">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="flex flex-col gap-[2px]">
          <label htmlFor="property">Property</label>
          <select
            className="p-[10px] w-[100px] sm:w-[80px] border-spanish-gray border border-solid rounded-sm text-sm"
            name="property"
            id="property"
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
            className="p-[10px] w-[100px] sm:w-[80px] border-spanish-gray border border-solid rounded-sm text-sm"
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Any"
          />
        </div>

        <div className="flex flex-col gap-[2px]">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            className="p-[10px] w-[100px] sm:w-[80px] border-spanish-gray border border-solid rounded-sm text-sm"
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Any"
          />
        </div>

        <div className="flex flex-col gap-[2px]">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            className="p-[10px] w-[100px] sm:w-[80px] border-spanish-gray border border-solid rounded-sm text-sm"
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="Any"
          />
        </div>

        <button className="bg-mustard w-[100px] sm:w-[80px] p-[10px] flex justify-center items-center border-none cursor-pointer">
          <img width={24} height={24} src={search} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
