import React from "react";
import { listData } from "../../lib/dummydata";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import Map from "../../components/Map";

const ListPage = () => {
  const data = listData;

  return (
    <div className="flex h-full">
      {/* List Container */}
      <div className="flex-[3_3_0%] h-full overflow-hidden">
        <div className="pr-12 pb-32 flex flex-col gap-[50px] h-full overflow-y-scroll scrollbar-hide">
          <Filter />

          {data.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>

      <div className="flex-[2_2_0%] bg-sea-shell h-full pb-32">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
