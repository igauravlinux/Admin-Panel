import React from "react";

const StatCard = ({ data }) => {
  return (
    <div
      key={data.id}
      className="p-5 rounded-2xl bg-white shadow-sm border border-gray-100"
    >
      {/* title and icon */}
      <div className="flex justify-between">
        <p className="text-sm text-gray-600">{data.title}</p>

        <span className="text-purple-600 h-10 w-10 bg-purple-200 flex justify-center items-center rounded-2xl">
          {data.icon}
        </span>
      </div>

      {/* value */}
      <p className="text-2xl font-semibold mt-1">{data.value}</p>

      {/* growth */}
      <p
        className={`text-sm mt-1 ${data.growth > 0 ? "text-green-600" : data.growth < 0 ? "text-red-600" : "text-gray-500"}`}
      >
        <span>{data.growth > 0 ? "+" : ""}</span>
        {data.growth}
        <span>% this month</span>{" "}
      </p>
    </div>
  );
};

export default StatCard;
