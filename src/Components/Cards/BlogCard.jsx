import { BiLike } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";

const BlogCard = ({img, date, title, desc, like, comments, share}) => {
   return(
      <>
         <div className="card w-[400px] h-fit shadow hover:bg-primary ease-out transition-all duration-300 flex flex-col items-center gap-2 p-5 rounded-xl border border-slate-200/80 group">
            <img src={img} alt="" className="w-full rounded-xl" />
            <p className='text-slate-600 group-hover:text-slate-200 w-full text-left'>{date}</p>
            <div className="text w-full">
               <h4 className="font-bold uppercase w-full group-hover:text-white truncate">{title}</h4>
               <p className="text-slate-900 capitalize group-hover:text-slate-50 line-clamp-3">{desc}</p>
            </div>
            <div className="w-full flex space-x-6">
               <div className="text-slate-900 capitalize group-hover:text-slate-50 w-fit cursor-pointer flex items-center gap-1">
                  <BiLike />
                  <span>{like}</span>
               </div>
               <div className="text-slate-900 capitalize group-hover:text-slate-50 w-fit cursor-pointer flex items-center gap-1">
                  <FaRegComments />
                  <span>{comments}</span>
               </div>
               <div className="text-slate-900 capitalize group-hover:text-slate-50 w-fit cursor-pointer flex items-center gap-1">
                  <PiShareFat />
                  <span>{share}</span>
               </div>
            </div>
         </div>
      </>
   )
}

export default BlogCard;