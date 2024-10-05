import BlogsSlider from "../../Sliders/BlogsSlider";

const Blogs = () => {


   return(
      <>
         <section className="my-24 flex flex-col items-center gap-12">
            <div className="title text-center w-1/2">
               <h5 className="text-primary font-semibold text-xl uppercase leading-15">Blogs</h5>
               <h2 className="font-bold text-5xl leading-15">My Thoughts & Experiences</h2>
            </div>
            <div className="cards flex flex-col w-full items-center">
               <BlogsSlider />
            </div>
         </section>
      </>
   )
}

export default Blogs;