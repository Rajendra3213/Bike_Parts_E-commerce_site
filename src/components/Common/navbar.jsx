import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { MdPersonOutline } from "react-icons/md";
import logoIcon from '/Users/rajendraacharya/Desktop/E-commerce/E_commerce/src/assets/logo.png'

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

// eslint-disable-next-line react/prop-types
const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="bg-white relative z-40">
      <div className="py-4 flex justify-center items-center">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a href=""><img
              src={logoIcon}
              alt="Biker World Logo"
              className="h-12 sm:h-16"
            /></a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-regular text-gray-800 hover:text-black duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown  */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-regular text-gray-800 py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-10 hidden group-hover:block w-48 rounded-md bg-white shadow-md p-2">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            className="text-gray-800 duration-200 inline-block w-full p-2 hover:bg-gray-200 rounded-md font-regular"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar section */}
            <div className="relative group hidden lg:block">
              <input
                type="text"
                placeholder="Search"
                className="search-bar px-4 py-2 w-64 border border-gray-300 rounded-lg"
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-6 duration-200" />
            </div>

            {/* Order-button section */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping className="text-xl text-gray-600" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            <button className="flex items-center justify-between p-3 space-x-2" onClick={handleOrderPopup}>
              <MdPersonOutline className="text-xl text-gray-600" /> <span>Sign in</span>

            </button>
            {/* Sign In/SignOut*/}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
