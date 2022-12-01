import React from "react";
import { PhoneIcon, MailIcon, HomeIcon } from "@heroicons/react/outline";
function Cont() {
  return (
    <>
      <h1
        className="pt-10 pb-2 text-center font-bold md:text-2xl text-[#031e4a] "
        id="contact"
        data-aos="fade-right" 
        data-aos-duration="1500"
        
      >
       
        Contact us
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 grid-row sm:my-5" data-aos="fade-right" 
        data-aos-duration="1500">
        <div className="flex flex-col items-center justify-between my-3 sm:my-5">
          <div className="bg-[#031e4a] h-auto rounded-full p-3">
            <PhoneIcon className="w-10 h-10 text-white " />
          </div>
          <h1 className="text-[#031e4a]">+90 5528112230</h1>
        </div>
        <div className="flex flex-col items-center justify-between my-3 ">
          <div className="bg-[#031e4a]  h-auto rounded-full p-3">
            <MailIcon className="w-10 h-10 text-white bg-[#031e4a] " />
          </div>
          <div>
          <h1 className="text-[#031e4a] ">ozturkrealtors@gmail.com</h1>
          <h1 className="text-[#031e4a] ">Faisal.city.estate@gmail.com</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between my-3">
          <div className="bg-[#031e4a] h-auto rounded-full p-3">
            <HomeIcon className="w-10 h-10 text-white " />
          </div>
          <h1 className="text-[#031e4a] text-center ">
          Head Office <br></br>
          üçevler mah . 911 sk no 4 BH <br></br> Esenyurt/ Istanbul
          </h1>
        </div>
        <div className="flex flex-col items-center justify-between my-3">
          <div className="bg-[#031e4a] h-auto rounded-full p-3">
            <HomeIcon className="w-10 h-10 text-white " />
          </div>
          <h1 className="text-[#031e4a] ">
            Yesilova Mah. 1.Saray Sk. halilbey <br></br>AP No: 4b Kucukcekmece
            Istanbul
          </h1>
        </div>
      
      </div>
    </>
  );
}

export default Cont;
