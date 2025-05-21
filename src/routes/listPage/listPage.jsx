import React, { Suspense, useEffect, useState } from "react";
import { listData } from "../../lib/dummydata";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import Map from "../../components/Map";
import { Await, useLoaderData } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

const ListPage = () => {
  const data = listData;
  const { postResponse } = useLoaderData();
  const [savedPosts, setSavedPosts] = useState([]);
  const [savedLoading, setSavedLoading] = useState(true);

  useEffect(() => {
    async function getSaved() {
      try {
        const response = await apiRequest.get("/post/get-saved");
        setSavedPosts(response.data); // should be array of post IDs
      } catch (err) {
        console.error("Failed to fetch saved posts", err);
      } finally {
        setSavedLoading(false);
      }
    }

    getSaved();
  }, []);

  return (
    <div className="flex h-full md:flex-col sm:flex-col sm:gap-[20px] sm:h-fit sm:pb-4 sm:px-1 md:gap-[20px] md:h-fit md:pb-4">
      {/* List Container */}
      <div className="flex-[3_3_0%] h-full overflow-hidden md:h-fit sm:h-fit">
        <div className="sm:pr-0 pr-12 pb-32 md:pb-0 sm:pb-0 flex flex-col gap-[50px] h-full overflow-y-scroll scrollbar-hide md:h-fit md:overflow-hidden">
          <Filter />

          {/* Map: visible only on md and below */}
          <div className="block lg:hidden xl:hidden">
            <div className="rounded-lg overflow-hidden shadow-md h-[200px]">
              <Map items={data} />
            </div>
          </div>

          <Suspense fallback={<p>Loading....</p>}>
            <Await
              resolve={postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                !savedLoading ? (
                  postResponse.data.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                      {postResponse.data.map((item) => (
                        <Card
                          key={item._id}
                          item={item}
                          isInitiallySaved={savedPosts.includes(item._id)}
                        />
                      ))}
                    </div>
                  ) : (
                    <p>No Results Found!</p>
                  )
                ) : (
                  <p>Loading.....</p>
                )
              }
            </Await>
          </Suspense>
        </div>
      </div>

      <div className="flex-[2_2_0%] bg-sea-shell h-full pb-32 md:pb-0 md:hidden sm:hidden">
        <Suspense fallback={<p>Loading....</p>}>
          <Await
            resolve={postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
