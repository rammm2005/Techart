const PortoCard = ({srcImg}) => {
   return(
      <>
         <div className="card cursor-pointer w-[406px] h-[367px] overflow-hidden flex justify-center items-center shadow-md rounded-2xl">
            <img src={srcImg} alt="" />
         </div>
      </>
   )
}

export default PortoCard;