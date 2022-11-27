import React from "react";

function RealState() {
  return (
    <div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}assests/realestate.jpeg`}
          alt=""
          className="w-full h-[350px] brightness-50"
        />
        <h1 className=" absolute md:inset-0 md:top-[25%] inset-0 top-[25%]  text-xl tracking-widest sm:text-3xl text-center font-bold  uppercase  text-white">
          Real Estate
        </h1>
      </div>
      <div className="m-5 sm:m-10">
        <h1 className="font-bold text-xl mb-5">
        Real Estate In Turkey

        </h1>
        <p className="text-normal  text-justify mb-5">

      With a population of almost 16 million people, Turkey is one of Europe’s most promising and ideal Real Estate markets due to its strategic location at the crossroads of Europe, The Middle East, and Central Asia. The country offers excellent  opportunities to real estate developers and investors by combining a Huge Construction sector with growing commercial and industrial output all over the Turkey 🇹🇷. 
        </p>
      <p className="text-normal  text-justify">Turkey’s population is growing at a rapid pace due to a large number of immigrants , while the new housing stock is plummeting. Its construction activity is growing day by day in a positive way . The country’s construction industry grew by 76%  percent in the last 1.5  years after 2020 , compared to the same period last year, according to the Turkish Statistical Institute (TurkStat). The growth rate is even more astonishing when compared to the growth rate of the overall construction sector in the same period, which was only 6.1 percent.</p>

      </div>
    </div>
  );
}

export default RealState;
