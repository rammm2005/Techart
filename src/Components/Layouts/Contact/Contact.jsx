const Contact = () => {

   return(
      <>
         <section className="h-screen flex flex-col justify-center items-center gap-12 bg-primary p-14 relative z-[2] overflow-hidden">
            <span className="rounded-full w-[686px] h-[686px] bg-none border-[80px] border-blue-500 absolute -z-[1] top-0 -right-60"></span>
            <span className="rounded-full w-[286px] h-[286px] bg-none border-[40px] border-blue-500 absolute -z-[1] -bottom-14 -left-20"></span>
            <div className="title text-center w-1/2">
               <h5 className="text-white font-semibold text-xl uppercase leading-15">contact me</h5>
               <h2 className="font-bold text-5xl leading-15 text-white">Request Free Consultancy</h2>
            </div>
            <div className="flex flex-row w-full justify-center gap-8">
               <div className="bg-white rounded-xl p-8 flex flex-col space-y-10 h-fit">
                  <div>
                     <h6 className="font-bold">Hotline 24/7</h6>
                     <h4 className="font-bold text-2xl">(+23) 5535 68 68</h4>
                  </div>
                  <div>
                     <p><b>Adress: </b>2972 Westheimer Rd. Santa Ana, Illinois 85486</p> 
                     <p><b>Email: </b>nevaeh.simmons@example.com</p> 
                     <p><b>Fax: </b>(702) 555-0122</p> 
                     <p><b>Work Hour: </b>Mon - Sat: 9:00 - 18:00</p> 
                  </div>
               </div>
               <div className="flex flex-col space-y-4">
                  <div className="flex flex-row items-center space-x-4">
                     <input type="text" placeholder="Name*" className="w-full rounded border-none px-4 py-2 text-gray-900 placeholder:text-gray-400 outline-none"/>
                     <input type="email" placeholder="Email Address*" className="w-full rounded border-none px-4 py-2 text-gray-900 placeholder:text-gray-400 outline-none"/>
                  </div>
                  <input type="text" placeholder="How can we help you? enter your subject*" className="w-full rounded border-none px-4 py-2 text-gray-900 placeholder:text-gray-400 outline-none"/>
                  <textarea rows='5' placeholder="How can we help you?" className="w-full rounded border-none px-4 py-2 text-gray-900 placeholder:text-gray-400 outline-none"></textarea>
                  <button className="py-3 px-8 rounded-3xl w-fit text-white font-bold bg-blue-700">Request Now</button>
               </div>
            </div>
         </section>
      </>
   )
}

export default Contact;