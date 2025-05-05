import React from "react";
import { listData } from "../../lib/dummydata";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import Map from "../../components/Map";

const ListPage = () => {
  const data = listData;

  return (
    <div className="flex h-full md:flex-col sm:flex-col sm:gap-[20px] sm:h-fit sm:pb-4 sm:px-1 md:gap-[20px] md:h-fit md:pb-4">
      {/* List Container */}
      <div className="flex-[3_3_0%] h-full overflow-hidden md:h-fit sm:h-fit">
        <div className="pr-12 pb-32 md:pb-0 sm:pb-0 flex flex-col gap-[50px] h-full overflow-y-scroll scrollbar-hide md:h-fit md:overflow-hidden">
          <Filter />

          {/* Map: visible only on md and below */}
          <div className="block lg:hidden">
            <div className="rounded-lg overflow-hidden shadow-md h-[200px]">
              <Map items={data} />
            </div>
          </div>

          {data.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>

      <div className="flex-[2_2_0%] bg-sea-shell h-full pb-32 md:pb-0 md:hidden sm:hidden">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
