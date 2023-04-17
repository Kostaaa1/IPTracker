import React, { useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const SearchForm = ({ setIpQuery }) => {
  const inputRef = useRef(null);

  const submitIpAddress = (e) => {
    e.preventDefault();
    setIpQuery(inputRef.current.value);
  };

  return (
    <div className="h-[120px] my-3 mb-[80px] items-center justify-between flex flex-col max-w-full w-[600px]">
      <h1 className="text-2xl font-bold">IP Address Tracker</h1>
      <form className="w-[100%] max-w-full text-neutral-500 flex flex-col relative" onSubmit={submitIpAddress}>
        <input
          className="pl-[26px] h-[50px] w-[100%] rounded-3xl"
          type="text"
          ref={inputRef}
          placeholder="Search for any IP Adress or domain"
        />
        <button
          className="bg-[#2c2c2c] h-[50px] w-[50px] text-white absolute rounded-r-3xl right-0 cursor-pointer justify-center flex items-center hover:bg-[#3a3a3a]"
          type="submit"
        >
          <MdArrowForwardIos />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
