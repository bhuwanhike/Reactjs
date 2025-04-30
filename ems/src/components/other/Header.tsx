import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1>
        Hello <br />
        Sarthak ✋
      </h1>
      <button className="bg-red-500 outline p-2">Log out</button>
    </div>
  );
};

export default Header;
