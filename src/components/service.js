import React from "react";
import {  useNavigate } from "react-router-dom";
function Service() {
  let navigate = useNavigate();
  return (
    < >
      <div  >
        <h1 className="pt-10 pb-2 text-center font-bold sm:text-2xl text-[#031e4a] " id="service" data-aos="fade-right" data-aos-duration="1500" > Our Services</h1>
        <div className="grid w-full  h-auto   grid-cols-1 gap-8 p-5   sm:px-10 md:grid-cols-3 "
              data-aos-easing="ease-in">
          <div className="  rounded-lg overflow-hidden ease-in shadow-gray-400 shadow-lg "  >
            <img
              src={`${process.env.PUBLIC_URL}assests/immigrtion.jpg`}
              alt=""
              className="w-full h-[300px] hover:scale-105 duration-300  ease-in "
              onClick={()=>{navigate('/immigrtion')}}
              
              
            />
            <h1 className="   bg-[#031e4a]  text-center text-white font-bold text-xl py-5">
              
              Immigration
            </h1>
          </div>

          <div className="  rounded-lg overflow-hidden  shadow-gray-400 shadow-lg ">
            <img
              src={`${process.env.PUBLIC_URL}assests/realestate.jpeg`}
              alt=""
              className="w-full h-[300px] hover:scale-105 duration-300  ease-in"
              onClick={()=>{navigate('/realstate')}}

            />
            <h1 className="bg-[#031e4a] text-center text-white font-bold text-xl py-5">
              Real Estate
            </h1>
          </div>
          <div className=" rounded-lg overflow-hidden  shadow-gray-400 shadow-lg ">
            <img
              src={`${process.env.PUBLIC_URL}assests/invest.jpeg`}
              alt=""
              className="w-full h-[300px] hover:scale-105 duration-300  ease-in "
              onClick={()=>{navigate('/investment')}}
            />
            <h1 className="bg-[#031e4a] text-center text-white font-bold text-xl py-5">
              Bussines Investment
            </h1>
          </div>
        
          <div className=" rounded-lg overflow-hidden  shadow-gray-400 shadow-lg ">
            <img
              src={`${process.env.PUBLIC_URL}assests/travel.jpg`}
              alt=""
              className="w-full h-[300px] hover:scale-105 duration-300  ease-in"
              onClick={()=>{navigate('/tourism')}}
            />
            <h1 className="bg-[#031e4a] text-center text-white font-bold text-xl py-5 cursor-pointer " >
              
             Travel and Tourism
            </h1>
          </div>

          <div className=" rounded-lg overflow-hidden  shadow-gray-400 shadow-lg ">
            <img
              src={`${process.env.PUBLIC_URL}assests/Collegestudents.jpg`}
              alt=""
              className="w-full h-[300px] hover:scale-105 duration-300  ease-in"
              onClick={()=>{navigate('/education')}}
            />
            <h1 className="bg-[#031e4a] text-center text-white font-bold text-xl py-5">
              
              Education
            </h1>
          </div>
          <div className="rounded-lg overflow-hidden   shadow-gray-400 shadow-lg ">
            <img
              src={`${process.env.PUBLIC_URL}assests/import.jpg`}
              alt=""
              className="w-full h-[300px] hover:scale-105 duration-300  ease-in"
              onClick={()=>{navigate('/import')}}
            />
            <h1 className="bg-[#031e4a] text-center text-white font-bold text-xl py-5">
              
              Import and Export
            </h1>
          </div>
        </div>

      </div>
      
    </>
  );
}

export default Service;
