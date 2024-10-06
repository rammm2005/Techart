import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
   return(
      <footer className="px-16 py-8 bg-primary flex flex-row justify-between items-center">
         <div className="flex items-center space-x-8">
            <img src="./assets/images/logo.svg" alt="" />
            <p className="text-sm text-slate-300">© Copyright 2023. All Rights Reserved.</p>
         </div>
         <div className="space-x-2 flex items-center">
            <p className="text-slate-300 font-bold uppercase">follow us: </p>
            <div className="p-3 rounded-full bg-blue-200/50">
               <FaXTwitter className="text-white font-xl" />
            </div>
            <div className="p-3 rounded-full bg-blue-200/50">
               <FaFacebookF className="text-white font-xl" />
            </div>
            <div className="p-3 rounded-full bg-blue-200/50">
               <FaLinkedinIn className="text-white font-xl" />
            </div>
            <div className="p-3 rounded-full bg-blue-200/50">
               <MdOutlineEmail className="text-white font-xl" />
            </div>
         </div>
      </footer>
   )
}

export default Footer;