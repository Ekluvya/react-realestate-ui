import React, { useEffect, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import Tiptap from "../../components/Tiptap";
import UploadWidget from "../../components/UploadWidget";

const cloudName = "ddloex2oi";
const uploadPreset = "estate";

const uwConfig = {
  cloudName,
  uploadPreset,
  multiple: true,
  maxImageFileSize: 2000000,
  foldeR: "images",
};

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    const post = {
      title: inputs.title,
      price: parseInt(inputs.price),
      img: "", // Default empty string as in your model
      address: inputs.address,
      city: inputs.city,
      bedroom: parseInt(inputs.bedroom),
      bathroom: parseInt(inputs.bathroom),
      latitude: parseFloat(inputs.latitude), // Convert to float
      longitude: parseFloat(inputs.longitude), // Convert to float
      p_type: inputs.property, // Match the Pydantic model field name
      c_type: inputs.type, // Match the Pydantic model field name
      postDetail: {
        desc: value,
        images: images, // Pass the images array
        utilities: inputs.utilities,
        pet: inputs.pet,
        income: inputs.income,
        size: parseInt(inputs.size),
        school: parseInt(inputs.school),
        bus: parseInt(inputs.bus),
        restaurant: parseInt(inputs.restaurant),
      },
    };

    console.log(post);

    console.log({
      title: "Beautiful Apartment with City View",
      price: 1500,
      img: "",
      address: "123 Main Street, Apt 4B",
      city: "New York",
      bedroom: 2,
      bathroom: 1,
      latitude: 40.7128,
      longitude: -74.006,
      p_type: "apartment",
      c_type: "rent",
      user_id: "f0368782-f58b-4ae2-b488-c359acecaf80",
      postDetail: {
        desc: "A modern and spacious apartment in the heart of the city.",
        images: [],
        utilities: "Water, electricity included",
        pet: "Allowed",
        income: "Proof of income required",
        size: 850,
        school: 2,
        bus: 1,
        restaurant: 5,
      },
    });
    try {
      const res = await apiRequest.post("/post/create", {
        title: inputs.title,
        price: parseInt(inputs.price),
        img: `${images.length > 0 ? images[0] : ""}`, // Default empty string as in your model
        address: inputs.address,
        city: inputs.city,
        bedroom: parseInt(inputs.bedroom),
        bathroom: parseInt(inputs.bathroom),
        latitude: parseFloat(inputs.latitude), // Convert to float
        longitude: parseFloat(inputs.longitude), // Convert to float
        p_type: inputs.property, // Match the Pydantic model field name
        c_type: inputs.type, // Match the Pydantic model field name
        postDetail: {
          desc: value,
          images: images, // Pass the images array
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });

      console.log(res.data.post_id);
      navigate("/post/" + res.data.post_id);
    } catch (err) {
      console.log(err);
      setError(error);
    }
  };

  useEffect(() => {
    console.log(images);
  }, [images, setImages]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex-1 p-6 md:p-10 overflow-y-auto max-h-screen scrollbar-none pb-24">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          Add New Post
        </h1>

        <div className="flex flex-col justify-center items-center w-full h-fit bg-slate-400 py-5 mb-5 object-contain human">
          <div className="flex w-full h-48 text-center my-5 justify-center items-center">
            {images.length > 0 ? (
              images.map((img, index) => {
                return (
                  <img
                    src={img}
                    key={index}
                    height={100}
                    width={100}
                    className="w-28 h-28 mx-3"
                  />
                );
              })
            ) : (
              <p className="text-white text-sm mb-6 text-center">
                Upload some images
              </p>
            )}
          </div>
          <UploadWidget uwConfig={uwConfig} setStatus={setImages} />
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="desc"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Description
              </label>
              <Tiptap setValue={setValue} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="bedroom"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Bedroom Number
                </label>
                <input
                  min={1}
                  id="bedroom"
                  name="bedroom"
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="bathroom"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Bathroom Number
                </label>
                <input
                  min={1}
                  id="bathroom"
                  name="bathroom"
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="latitude"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Latitude
                </label>
                <input
                  id="latitude"
                  name="latitude"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="longitude"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Longitude
                </label>
                <input
                  id="longitude"
                  name="longitude"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Type
                </label>
                <select
                  name="type"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="rent" defaultChecked>
                    Rent
                  </option>
                  <option value="buy">Buy</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="property"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Property
                </label>
                <select
                  name="property"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="utilities"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Utilities Policy
                </label>
                <select
                  name="utilities"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="owner">Owner is responsible</option>
                  <option value="tenant">Tenant is responsible</option>
                  <option value="shared">Shared</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="pet"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Pet Policy
                </label>
                <select
                  name="pet"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="allowed">Allowed</option>
                  <option value="not-allowed">Not Allowed</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="income"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Income Policy
                </label>
                <input
                  id="income"
                  name="income"
                  type="text"
                  placeholder="Income Policy"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="size"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Total Size (sqft)
                </label>
                <input
                  min={0}
                  id="size"
                  name="size"
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="school"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  School
                </label>
                <input
                  min={0}
                  id="school"
                  name="school"
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="bus"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Bus
                </label>
                <input
                  min={0}
                  id="bus"
                  name="bus"
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="restaurant"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Restaurant
                </label>
                <input
                  min={0}
                  id="restaurant"
                  name="restaurant"
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300"
            >
              Add
            </button>
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;
