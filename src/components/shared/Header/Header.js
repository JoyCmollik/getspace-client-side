import React from "react";

const Header = () => {
  return (
    <div>
      {/* navbar */}
      <nav className="bg-dark shadow">
        <div
          className="
      container
      px-6
      py-3
      mx-auto
      md:flex md:justify-between md:items-center
    "
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className="
            text-xl
            font-bold
            text-white
           
          "
              >
                <i className="fas fa-umbrella-beach text-brand text-4xl"> </i>
                &nbsp; GetSpace
              </p>
            </div>
          </div>

          <div className="items-center md:flex my-2">
            <div className="flex flex-col md:flex-row md:mx-6 ">
              <p
                className="
            my-1
            text-white
          
            md:mx-4 md:my-0
          "
                href="#"
              >
                Places to stay
              </p>
              <p
                className="
            my-1
            text-white
            md:mx-4 md:my-0
          "
                href="#"
              >
                Experiences
              </p>
              <p
                className="
            my-1
            text-white
            md:mx-4 md:my-0
          "
                href="#"
              >
                Online Experiences
              </p>
            </div>
            <span>
              <button class="bg-light  text-black py-1 px-6 rounded-full my-0 mr-8 ">
                Become a Host
              </button>
              <button className="text-white mr-8">
                <i class="fas fa-globe"></i>
              </button>
            </span>
            <div className="flex justify-center md:block">
              <button className="text-white">
                <i class="fas fa-sign-in-alt text-white"></i> Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* search bar */}
      <form className=" pb-2 bg-black pt-1">
        <div className="container w-2/4 mx-auto mt-2 mb-2">
          <div className=" flex rounded-full    shadow-md py-3 mx-5   bg-white">
            <input
              type="text"
              placeholder="Where are you going?"
              className=" focus:outline-none mx-5 border-rounded bg-transparent flex-grow placeholder-black text-center"
            />
            <i class="fas fa-search mr-5 bg-brand p-2 rounded-full cursor-pointer"></i>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default Header;
