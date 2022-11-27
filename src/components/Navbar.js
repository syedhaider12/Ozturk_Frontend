import React, { useState,useEffect } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";
import Pulse from 'react-reveal/Pulse';
import {Link} from 'react-scroll';
import axios from 'axios'
function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);
  const[showPost ,setShowPost]=useState([0])

  const fetchData=async()=>{
    try{
     const {data} =await axios.get('https://backendozturk.herokuapp.com/show')
     if(data){

      
      setShowPost(data.db)
     
      
    
    }
    }catch(err){
     
    }
   }
  useEffect(() => {
    fetchData();
  },[showPost]);
  return (
    <>
      <div className="w-screen h-{80px} z-10 bg-white fixed ">
        <div className="flex items-center justify-between w-full h-full px-2">
          <div className="w-full text-[#031e4a] md:flex md:flex-row md:items-center ">
         <Pulse forever={true} >
         <img src={`${process.env.PUBLIC_URL}assests/logo.png`}  alt="" className="w-32 h-10 m-2"/>
         </Pulse>
            <ul className="hidden md:flex md:justify-end md:basis-3/4 ">
            
            <li className="cursor-pointer hover:underline decoration-2 decoration-[#031e4a] underline-offset-8"><Link  to="service"  smooth={true} offset={-50}>Service</Link></li>
            <li className="cursor-pointer hover:underline decoration-2 decoration-[#031e4a] underline-offset-8"><Link  to="about"  smooth={true}>About</Link></li>
            {showPost.length>0 ? <li className="cursor-pointer hover:underline decoration-2 decoration-[#031e4a] underline-offset-8"><Link  to="posts"  smooth={true} offset={-50}>Product</Link></li>:null}
            <li className="cursor-pointer hover:underline decoration-2 decoration-[#031e4a] underline-offset-8"><Link  to="contact"  smooth={true}>Contact</Link></li>
            </ul>
          </div>
          <div
            className="flex px-4 md:hidden"
            onClick={() => {
              setMenuIcon(!menuIcon);
            }}
          >
            {!menuIcon ? (
              <MenuAlt2Icon className="w-5 text-[#031e4a]" />
            ) : (
              <XIcon className="w-5 text-[#031e4a]" />
            )}
          </div>
        </div>
        <ul
          className={
            !menuIcon
              ? "hidden"
              : "absolute bg-white  text-[#031e4a]  w-full text-center    md:hidden"
          }
        >
            <li className="cursor-pointer "><Link  to="service"  smooth={true} offset={-50} >Service</Link></li>
            {showPost.length>0 ?<li className="cursor-pointer"><Link  to="posts"  smooth={true} offset={-50} >Product</Link></li>:null}
            <li className="cursor-pointer"><Link  to="about"  smooth={true}  >About</Link></li>
            <li className="cursor-pointer"><Link  to="contact"  smooth={true}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
