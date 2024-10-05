const BlogCard = () => {
   return(
      <>
         <div className="card w-fit h-fit shadow hover:bg-primary ease-out transition-all duration-300 flex flex-col items-center gap-5 py-8 px-5 rounded-lg border border-slate-200/80 group">
            <img src='./assets/images/image 1.png' alt="" className="" />
            <div className="flex flex-row">
               
            </div>
            <p className='group-hover:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius accusantium tempora aliquam.</p>
            <div className="text w-full text-center">
               <h4 className="font-bold uppercase group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident adipisci rerum.</h4>
               <h6 className="text-slate-500 capitalize group-hover:text-slate-200">Lorem, ipsum.</h6>
            </div>
         </div>
      </>
   )
}

export default BlogCard;