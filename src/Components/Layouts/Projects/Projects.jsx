import Button from "../../Button/Button";
import PortoCard from "../../Cards/PortoCard";

const Projects = () => {
   return (
      <>
         <section className="min-h-screen my-24 flex flex-col items-center gap-12">
            <div className="title text-center w-1/2">
               <h5 className="text-primary font-semibold text-xl uppercase leading-15">my projects</h5>
               <h2 className="font-bold text-5xl leading-15">Presenting My Design Portfolio and Case Studies</h2>
            </div>
            <div className="buttons flex justify-center items-center gap-8">
               <Button className="rounded-full px-10 items-center font-semibold py-2 text-blue-500 bg-transparent border border-blue-500 hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 cursor-pointer" text='All' />
               <Button className="rounded-full px-10 items-center font-semibold py-2 text-blue-500 bg-transparent border border-blue-500 hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 cursor-pointer" text='UI/UX Design' />
               <Button className="rounded-full px-10 items-center font-semibold py-2 text-blue-500 bg-transparent border border-blue-500 hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 cursor-pointer" text='Branding Design' />
               <Button className="rounded-full px-10 items-center font-semibold py-2 text-blue-500 bg-transparent border border-blue-500 hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 cursor-pointer" text='Wordpress' />
            </div>
            <div className="grid grid-cols-3 gap-8">
               <PortoCard srcImg='./assets/images/preview1.png' />
               <PortoCard srcImg='./assets/images/preview2.png' />
               <PortoCard srcImg='./assets/images/preview3.png' />
               <PortoCard srcImg='./assets/images/preview4.png' />
               <PortoCard srcImg='./assets/images/preview5.png' />
               <PortoCard srcImg='./assets/images/preview6.png' />
            </div>
         </section>
      </>
   )
}

export default Projects;