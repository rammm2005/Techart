import TestimonialsSlider from "../../Sliders/TestimonialsSlider";

const Testimonials = () => {


   return(
      <>
         <section className="my-24 flex flex-col items-center gap-12">
            <div className="title text-center w-1/2">
               <h5 className="text-primary font-semibold text-xl uppercase leading-15">Testimonials</h5>
               <h2 className="font-bold text-5xl leading-15">The Trust From Clients</h2>
            </div>
            <div className="cards flex flex-col w-full items-center">
               <TestimonialsSlider />
            </div>
         </section>
      </>
   )
}

export default Testimonials;