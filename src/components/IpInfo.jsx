import React from "react";

const IpInfo = ({ data }) => {
  return (
    <div className="text-black w-[1420px] p-5 h-full max-w-full bg-slate-50 rounded-2xl flex justify-evenly items-start flex-wrap z-10">
      <div className="min-h-[80px] break-all flex flex-col items-center justify-start px-4 border-r-2 w-[25%]">
        <h1 className="font-extrabold text-gray-500 text-xs">IP ADDRESS</h1>
        <h3 className="font-semibold text-xl">{data?.ip}</h3>
      </div>
      <div className="min-h-[80px] break-all flex flex-col items-center justify-start px-4 border-r-2 w-[25%]">
        <h1 className="font-extrabold text-gray-500 text-xs">LOCATION</h1>
        <h3 className="font-semibold text-xl">
          {`${data.city}` || ""}
          {`, ${data?.region}` || ""}
          {`, ${data?.country_name}` || ""}
        </h3>
      </div>
      <div className="min-h-[80px] break-all flex flex-col items-center justify-start px-4 border-r-2 w-[25%]">
        <h1 className="font-extrabold text-gray-500 text-xs">TIMEZONE</h1>
        <h3 className="font-semibold text-xl">
          {data?.time_zone.abbr || ""}
          {`, ${data?.time_zone.offset}` || ""}
        </h3>
      </div>
      <div className="min-h-[80px]break-all flex flex-col items-center justify-start px-4 w-[25%]">
        <h1 className="font-extrabold text-gray-500 text-xs">ISP</h1>
        <h3 className="font-semibold text-xl">{data?.asn?.name}</h3>
      </div>
    </div>
  );
};

export default IpInfo;
