import React from 'react';
import {Link} from 'react-scroll'
function Passport() {
  return (
    <div className='w-full bg-[#031e4a] my-10'>
      <div className='grid w-full h-auto grid-cols-1 gap-8 sm:grid-cols-2'>
        <div className='flex-col items-center justify-center w-full p-5 text-white ' data-aos="fade-right"
            data-aos-duration="1000">
          <h2 className='mt-5 text-xl tracking-widest text-center'>Citizenship</h2>
          <h1 className='text-2xl font-bold tracking-wide text-center'>By Investment</h1>
          <p className='my-10 text-justify md:leading-loose'>You can get a Turkish passport by purchasing a property in Turkey worth $ 400,000. After buying the property, Turkish Citizenship and passports are issued to spouses and children under 18. You can enjoy all the facilities of Turkey.Your property in Turkey can be transferred to your inheritance, also your newborns will be considered Turkish Citizens.</p>
          <Link  to="contact"  smooth={true}>

         <button className='bg-white p-2 text-center text-[#031e4a] rounded-md ml-10 '>Contact us</button>
          </Link>
        </div>
        <div >
          <img src={`${process.env.PUBLIC_URL}assests/turkish-citizenship.png`} alt=""  data-aos="zoom-in"
            data-aos-duration="1000" />
        </div>
        
      </div>
    </div>
  )
}

export default Passport