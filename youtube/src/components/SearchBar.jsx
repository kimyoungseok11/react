import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  const [searchString, setSearchString] = useState("");
  const navigater = useNavigate();
  const handleInput = (e) => {
    setSearchString(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigater(`/videos/${searchString}`);
  };
  const handleClick = () => {
    navigater(`/videos/${searchString}`);
  };
  return (
    <nav
      className=" 
        border-b-[1px] border-[#55535D] pt-[30px] pb-[20px] box-border max-w-[1250px] mx-auto mb-[20px] "
    >
      <div className="flex relative">
        <div className="h-[35px] w-[100px]">
          <Link to="/">
            <img
              className="h-[100%] w-[100%]"
              alt="youtube"
              src="/assets/youtube-logo.png"
            />
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[500px] h-[35px] flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <input
            className="bg-[#000] w-[calc(100%-35px)] h-[100%] border-none outline-none text-[#fff] pl-[10px]"
            placeholder="Search..."
            onChange={handleInput}
            value={searchString}
          />
          <div
            onClick={handleClick}
            className="bg-[#54515C] h-[100%] w-[35px] border-none flex justify-center items-center"
          >
            <IoMdSearch color="#fff" />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
