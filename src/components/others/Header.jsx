import React from "react";

const Header = ({ data }) => {
  return (
    <div>
      <div className="header flex items-end justify-between py-5 px-20">
        <h1 className="text-3xl font-semibold">
          Hello
          <br />
          <span className="text-4xl font-bold">{data.firstName} 👋</span>{" "}
        </h1>
        <button className="bg-blue-500 text-white text-xl px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
