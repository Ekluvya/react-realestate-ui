import apiRequest from "../lib/apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/post/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequest("/post/findposts/?" + query);
  return {
    postResponse: postPromise,
  };
};
