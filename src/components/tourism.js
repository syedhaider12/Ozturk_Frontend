import React from "react";
import { PhoneIcon } from "@heroicons/react/outline";
function Tourism() {
  return (
    <> 
     <div>
     <div>
        <img src={`${process.env.PUBLIC_URL}assests/Princess.jpg`} alt="" className='w-full h-[350px] brightness-50' />
        <h1 className=' absolute md:inset-0 md:top-[25%] inset-0 top-[25%]  text-xl tracking-widest sm:text-3xl text-center font-bold  uppercase  text-white'>destinations</h1>
      </div>
      <p className="text-normal sm:text-2xl text-justify m-10">
      Our destinations
CITY AND MULTICITY TOURS
Click on the photos below to explore these major destinations included in our tours. Each city on this list has been hand-picked by our travel experts as a must-see location in Turkey! Don't miss a moment, come experience the Silk Road.
      </p>
     </div>
      <div className="grid w-full h-auto grid-cols-1 gap-4 p-5 sm:px-10 md:grid-cols-3 ">
        <div className="duration-300 rounded-lg overflow-hidden shadow-lg ">
          <img
            src={`${process.env.PUBLIC_URL}assests/bursa.jpg`}
            alt=""
            className="w-full h-[250px] "
          />
          <h1 className="bg-[#031e4a] text-center text-white font-bold text-xl py-5">
            Bursa
          </h1>
        </div>

        <div className="duration-300 rounded-lg overflow-hidden shadow-lg ">
          <img
            src={`${process.env.PUBLIC_URL}assests/cappadocia.jpg`}
            alt=""
            className="w-full h-[250px]"
          />
          <h1 className="bg-[#031e4a] text-center text-white font-bold text-xl py-5">
            Cappadocia
          </h1>
        </div>
        <div className="duration-300 rounded-lg overflow-hidden shadow-lg ">
          <img
            src={`${process.env.PUBLIC_URL}assests/Pamukkale.jpg`}
            alt=""
            className="w-full h-[250px] "
          />
          <h1 className="bg-[#031e4a] text-center text-white font-bold text-xl py-5">
            Pamukkale
          </h1>
        </div>

        <div className="duration-300 rounded-lg overflow-hidden shadow-lg ">
          <img
            src={`${process.env.PUBLIC_URL}assests/Princess.jpg`}
            alt=""
            className="w-full h-[250px]"
          />
          <h1 className="bg-[#031e4a] text-center text-white font-bold text-xl py-5">
            Princess Island
          </h1>
        </div>

        <div className="duration-300 rounded-lg overflow-hidden shadow-lg ">
          <img
            src={`${process.env.PUBLIC_URL}assests/Antalya.jpg`}
            alt=""
            className="w-full h-[250px]"
          />
          <h1 className="bg-[#031e4a] text-center text-white font-bold text-xl py-5">
            Antalya
          </h1>
        </div>
        <div className="duration-300 rounded-lg overflow-hidden shadow-lg ">
          <img
            src={`${process.env.PUBLIC_URL}assests/trabzon.jpg`}
            alt=""
            className="w-full h-[250px]"
          />
          <h1 className="bg-[#031e4a] text-center text-white font-bold text-xl py-5">
            Trabzon
          </h1>
        </div>
      </div>
      <div className="my-5 flex flex-col item-center justify-center">
        <h1 className="text-center text-2xl">For Futher Details Contact </h1>
        <div className="flex justify-center">
          <div className="bg-[#031e4a] h-auto rounded-full p-2">
            <PhoneIcon className="w-5 h-5 text-white " />
          </div>
          <h1 className="text-center text-2xl">+90 552811230</h1>
        </div>
      </div>
    </>
  );
}

export default Tourism;
