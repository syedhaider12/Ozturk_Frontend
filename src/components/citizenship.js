import React from 'react'
import { GiBank } from "react-icons/gi";
import { FaHandshake,FaHome,FaIdCard } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiPassportFill } from "react-icons/ri";
function Citizenship() {
  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}assests/House.jpg`} alt="" className='w-full h-[350px] brightness-50' />
        <h1 className=' absolute md:inset-0 md:top-[25%] inset-0 top-[25%]  text-xl  sm:text-3xl text-center font-bold  uppercase  text-white'>How to attain citizenship?</h1>
      </div>
      <div>
        <div className='mx-5 my-10 '>
          <h1 className='text-xl text-center sm:text-3xl font-bold uppercase'>Permenent Residence By Investment</h1>
        <p className='px-10 py-5 text-justify'>In Accordance With The Law Amendment That Has Come Into Force in 19 September 2018, Foreigners Who Purchase a Property With At Least 400.000 USD Can Acquire Turkish Citizenship. The First Step For A Foreigner Willing To Become A Turkish Citizen Is To Purchase A Property With A Minimum Value of  400.000 USD. There Are Certain Points To Be Considered when purchasing the property.A foreigner can purchase multiple properties provided that he/she purchase them together and the total value of the properties must worth more than USD 400.000. besides, multiple foreigners can purchase one property provided that each of their parts will worth USD 400.000.One of the most important parts of this process is the valuation.report. The valuation report is required to be prepared by specialists who are licensed and authorized by the capital market board, in order to determine whether the acquired property is equal to the amount specified in the regulation (USD 400.000). The period of validity of the valuation report is up to 3 months before the purchase of the property. In case the foreign buyer has an attorney, the validation report will be provided by the Attorney/Law Firm.  Specialists who are licensed and authorized by the capital market board, in order to determine whether the acquired property is equal to the amount specified in the regulation (USD 400.000). The period of validity of the valuation report is up to 3 months before the purchase of the property. In case the foreign buyer has an attorney, the validation report will be provided by the Attorney/Law Firm.Once the title deed, valuation report and receipts of the payment are obtained, the foreign buyer or his/her attorney can make the written promise (not to sell the property for 3 years) in the Land and Registry office. After the promise is made, the department of foreign affairs will send ‘’the title deed conformity document’’ to the foreign person’s or his/her attorney’s e mail address.</p>
        </div>
      </div>
      <div>
        <div className='grid w-full   h-auto  grid-cols-1 gap-8 py-5 px-10   sm:px-10 md:grid-cols-3'>
          <div className='w-full flex flex-col justify-center items-center h-full rounded-lg overflow-hidden shadow-gray-400 shadow-lg  bg-[#031e4a]'>
           
           <IoIosPeople className='w-20    h-20 text-white'></IoIosPeople>
           <h1 className='text-white text-2xl mt-2 text-center font-bold'>MEET OUR TEAM</h1>
           <p className=' m-5 text-justify text-white'>We’ll be ready to guide you with our vast experience in Turkish real estate market & investment and we’ll help you out with your citizenship application processes</p>
           
          </div>
          <div className='w-full flex flex-col justify-center items-center h-full rounded-lg overflow-hidden shadow-gray-400 shadow-lg  bg-[#031e4a]'>
           
           <FaHome className='w-20    h-20 text-white'></FaHome>
           <h1 className='text-white text-2xl mt-2 text-center font-bold'>CHOOSE THE PROPERTY</h1>
           <p className=' m-5 text-justify text-white'>Pick at least a 400.000USD worth properties out from our exclusive projects and the choices that we prepared for you to meet your needs and interests.</p>
           
          </div>
          <div className='w-full flex flex-col justify-center items-center h-full rounded-lg overflow-hidden shadow-gray-400 shadow-lg  bg-[#031e4a]'>
           
           <GiBank className='w-20    h-20 text-white'></GiBank>
           <h1 className='text-white text-2xl mt-2 text-center font-bold'>OPEN A BANK ACCOUNT</h1>
           <p className=' m-5 text-justify text-white'>Open a private bank account in a Turkish bank, to use it for money transferring to OWNER OF PROPERTY ACCOUNT.</p>
           
          </div>
          <div className='w-full flex flex-col justify-center items-center h-full rounded-lg overflow-hidden shadow-gray-400 shadow-lg  bg-[#031e4a]'>
           
           <FaHandshake className='w-20    h-20 text-white'></FaHandshake>
           <h1 className='text-white text-2xl mt-2 text-center font-bold'>PURCHASE THE PROPERTY</h1>
           <p className=' m-5 text-justify text-white'>Get the title deed with restricts to not sell for 3 years and complete your ownership of the selected property in</p>
           
          </div>
          <div className='w-full flex flex-col justify-center items-center h-full rounded-lg overflow-hidden shadow-gray-400 shadow-lg  bg-[#031e4a]'>
           
           <FaIdCard className='w-20    h-20 text-white'></FaIdCard>
           <h1 className='text-white text-2xl mt-2 text-center font-bold'>OBTAIN INVESTOR RESIDENCE PERMIT</h1>
           <p className=' m-5 text-justify text-white'>We’ll be ready to guide you with our vast experience in Turkish real estate market & investment and we’ll help you out with your citizenship application processes</p>
           
          </div>
          <div className='w-full flex flex-col justify-center items-center h-full rounded-lg overflow-hidden shadow-gray-400 shadow-lg  bg-[#031e4a]'>
           
           <RiPassportFill className='w-20    h-20 text-white'></RiPassportFill>
           <h1 className='text-white text-2xl mt-2 mx-2 text-center font-bold'>OBTAIN YOUR TURKISH PASSPORT</h1>
           <p className=' m-5 text-justify text-white'>Now you’re all set for proceeding to apply for citizenship for yourself and your family “wife/husband and -18 kids”.</p>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Citizenship