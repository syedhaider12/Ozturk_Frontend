import React from 'react'
import { BsYoutube } from "react-icons/bs";
import { FaTiktok,FaInstagram,FaTwitter,FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer className=" h-auto text-white bg-[#031e4a] py-5" >
      <div className='flex items-center justify-center space-x-4'>
       <a href="https://youtube.com/@Turkey2022">

      <BsYoutube className='h-5 w-5'/>
       </a>
       <a href="http://tiktok.com/@ozturkrealtors">

      <FaTiktok className='h-5 w-5'/>
       </a>
      <a href='https://instagram.com/faisalabdullah701?igshid=Mzc0YWU1OWY='>
      <FaInstagram className='h-5 w-5'/>
      </a>
      <FaTwitter className='h-5 w-5'/>
      <a href='https://www.facebook.com/faysal.abdullah.3?mibextid=ZbWKwL'>
      <FaFacebookSquare className='h-5 w-5'/>
      </a>
        
      </div>
  
    

  
</footer>
    </>
  )
}

export default Footer