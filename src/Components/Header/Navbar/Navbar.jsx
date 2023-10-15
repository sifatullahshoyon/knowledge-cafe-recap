import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 flex flex-wrap md:flex-nowrap justify-around pt-5">
        <div className="flex">
          <a className="btn btn-ghost mb-5 normal-case text-3xl md:text-4xl text-black font-bold font-exo">
            Knowledge Cafe
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="form-control">
            <ul className="flex flex-wrap md:flex-nowrap justify-around items-center gap-5 font-exo font-semibold text-lg uppercase">
              <li className="">
                <a href="#">Home</a>
              </li>
              <li className="">
                <a href="#">Contact Us</a>
              </li>
              <li className="">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="../../../images/four.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="mx-2 md:mx-0">
        <hr className="md:container md:mx-auto border my-5  md:w-9/12" />
      </div>
    </div>
  );
};

export default Navbar;
