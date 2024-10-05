import { FaStar } from 'react-icons/fa';

const TestimonialsCard = ({img, rating, text, name, jobTitle}) => {

   const stars = Array(rating).fill(0);

   return(
      <>
         <div className="card w-[320px] h-fit shadow hover:bg-primary ease-out transition-all duration-300 flex flex-col items-center gap-5 py-8 px-5 rounded-lg border border-slate-200/80 group">
            <img src={img} alt="" className="rounded-full w-[150px]" />
            <div className="flex flex-row gap-1">
               {stars.map((_, index) => (
                  <FaStar key={index} className='text-yellow-400 text-xl' />
               ))}
            </div>
            <p className='group-hover:text-white'>{text}</p>
            <div className="text w-full text-center">
               <h4 className="font-bold uppercase group-hover:text-white">{name}</h4>
               <h6 className="text-slate-500 capitalize group-hover:text-slate-200">{jobTitle}</h6>
            </div>
         </div>
      </>
   )
}

export default TestimonialsCard;