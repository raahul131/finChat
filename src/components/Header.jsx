// import { useState } from "react";
// import Logo from "../assets/Logo.png";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross1 } from "react-icons/rx";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Function to close the menu
//   const handleMenuClose = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="w-full">
//       <div className="flex items-center justify-between shadow-lg shadow-blue-200 w-full px-4 md:px-16">
//         <img
//           src={Logo}
//           alt="Logo"
//           className="h-12 w-12 object-cover cursor-pointer"
//         />

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center justify-center gap-x-5 font-medium text-neutral-600">
//           <li>
//             <a href="#" className="cursor-pointer hover:text-neutral-800">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#about" className="cursor-pointer hover:text-neutral-800">
//               About Us
//             </a>
//           </li>
//           <li>
//             <a
//               href="#chatbot"
//               className="cursor-pointer hover:text-neutral-800"
//             >
//               Chatbot
//             </a>
//           </li>
//           <li>
//             <a
//               href="#realtimeanalysis"
//               className="cursor-pointer hover:text-neutral-800"
//             >
//               Real-time Analysis
//             </a>
//           </li>
//         </ul>

//         <div></div>

//         {/* Mobile Menu Icon */}
//         <div
//           className="flex md:hidden items-center cursor-pointer"
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//         >
//           <span>
//             {isMenuOpen ? (
//               <RxCross1 size={25} />
//             ) : (
//               <RxHamburgerMenu size={25} />
//             )}
//           </span>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="absolute top-10 right-4 bg-blue-500 shadow-lg shadow-blue-200 w-48 rounded-md md:hidden z-[999999]">
//             <ul className="flex flex-col items-center font-medium text-white">
//               <li className="w-full border-b border-white last:border-b-0">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 cursor-pointer hover:text-neutral-300"
//                   onClick={handleMenuClose}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="w-full border-b border-white last:border-b-0">
//                 <a
//                   href="#about"
//                   className="block px-4 py-2 cursor-pointer hover:text-neutral-300"
//                   onClick={handleMenuClose}
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li className="w-full border-b border-white last:border-b-0">
//                 <a
//                   href="#chatbot"
//                   className="block px-4 py-2 cursor-pointer hover:text-neutral-300"
//                   onClick={handleMenuClose}
//                 >
//                   Chatbot
//                 </a>
//               </li>
//               <li className="w-full border-b border-white last:border-b-0">
//                 <a
//                   href="#realtimeanalysis"
//                   className="block px-4 py-2 cursor-pointer hover:text-neutral-300"
//                   onClick={handleMenuClose}
//                 >
//                   Real-time Analysis
//                 </a>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import Logo from "../assets/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg shadow-blue-200">
      <div className="flex items-center justify-between w-full px-4 md:px-16">
        <img
          src={Logo}
          alt="Logo"
          className="h-12 w-12 object-cover cursor-pointer"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-x-5 font-medium text-neutral-600">
          <li>
            <a href="#" className="cursor-pointer hover:text-neutral-800">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="cursor-pointer hover:text-neutral-800">
              About Us
            </a>
          </li>
          <li>
            <a
              href="#chatbot"
              className="cursor-pointer hover:text-neutral-800"
            >
              Chatbot
            </a>
          </li>
          <li>
            <a
              href="#realtimeanalysis"
              className="cursor-pointer hover:text-neutral-800"
            >
              Real-time Analysis
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="cursor-pointer hover:text-neutral-800"
            >
              Contact us
            </a>
          </li>
        </ul>

        <div></div>

        {/* Mobile Menu Icon */}
        <div
          className="flex md:hidden items-center cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span>
            {isMenuOpen ? (
              <RxCross1 size={25} />
            ) : (
              <RxHamburgerMenu size={25} />
            )}
          </span>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-10 right-4 bg-blue-500 shadow-lg shadow-blue-200 w-48 rounded-md md:hidden z-[999999]">
            <ul className="flex flex-col items-center font-medium text-white">
              <li className="w-full border-b border-white last:border-b-0">
                <a
                  href="#"
                  className="block px-4 py-2 cursor-pointer hover:text-neutral-300"
                  onClick={handleMenuClose}
                >
                  Home
                </a>
              </li>
              <li className="w-full border-b border-white last:border-b-0">
                <a
                  href="#about"
                  className="block px-4 py-2 cursor-pointer hover:text-neutral-300"
                  onClick={handleMenuClose}
                >
                  About Us
                </a>
              </li>
              <li className="w-full border-b border-white last:border-b-0">
                <a
                  href="#chatbot"
                  className="block px-4 py-2 cursor-pointer hover:text-neutral-300"
                  onClick={handleMenuClose}
                >
                  Chatbot
                </a>
              </li>
              <li className="w-full border-b border-white last:border-b-0">
                <a
                  href="#realtimeanalysis"
                  className="block px-4 py-2 cursor-pointer hover:text-neutral-300"
                  onClick={handleMenuClose}
                >
                  Real-time Analysis
                </a>
              </li>
              <li className="w-full border-b border-white last:border-b-0">
                <a
                  href="#contact"
                  className="block px-4 py-2 cursor-pointer hover:text-neutral-300"
                  onClick={handleMenuClose}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
