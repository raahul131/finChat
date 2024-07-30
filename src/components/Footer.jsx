// const Footer = () => {
//   const date = new Date().getFullYear();

//   return (
//     <div className="border-t border-neutral-400 py-2">
//       <div className="flex items-center justify-center gap-x-2">
//         <p className="text-lg">©</p>
//         <p>{date}</p>

//         <p className="border-l-2 border-neutral-500 px-2">Fin. Chat</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Logo from "../assets/Logo.png";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img src={Logo} alt="Logo" className="h-24 mb-3 mx-auto md:mx-0" />
            <p className="text-sm">© {date} Fin. Chat. All rights reserved.</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-blue-400">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedinIn size={20} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </p>
            <p>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </p>
            <p>
              <a href="#privacy" className="hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
