import React from "react";

function Investment() {
  return (
    <>
      <div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}assests/invest.jpeg`}
            alt=""
            className="w-full h-[350px] brightness-50"
          />
          <h1 className=" absolute md:inset-0 md:top-[25%] inset-0 top-[25%]  text-xl tracking-widest sm:text-3xl text-center font-bold  uppercase  text-white">
            Business Investment
          </h1>
        </div>
        <p className="text-normal  text-justify m-5 sm:m-10">
          Turkey attracts investors from many different nationalities all around
          the world. The biggest reason for this is the positive discriminatory
          features that it has. These features are a highly skilled workforce,
          its geopolitical position, its ability to accommodate people of many
          different nationalities, and its developing economy. Turkey also
          provides many investment incentive support to foreign investors.
        </p>
        <div className="mx-5 sm:mx-10">
          
          <h1 className="font-bold text-xl mb-5">Reasons to Invest in Turkey</h1>
          <p className="text-normal  text-justify ">
            Turkey has become a country that has managed to attract more and
            more attention from investors every day. The reasons for this can be
            listed as the geopolitical position of the country, its social
            presence, its exchange rate value, and its young population. Because
            it has its own unique culture, difficulties may be encountered by
            investors at first. However, Turkey is still able to offer
            international standards to investors in the matter of investment.
            Turkey is a country with many different options in terms of
            investment incentives. It is possible to make numerous investments
            in many different sectors and many different cities. Turkey is
            different from the incentive opportunities offered by other
            countries in terms of the opportunities listed below :
          </p>
          <ul className="list-inside list-disc leading-normal  ">
            <li className="p-0">A reformist economy</li>
            <li className="p-0">The density of the young population</li>
            <li className="p-0">Proficient and competitive hands</li>
            <li className="p-0">An inexhaustible and liberal economic habitat</li>
            <li className="p-0">Active and mature infrastructure</li>
            <li className="p-0">Strategic location</li>
            <li className="p-0">Enormous internal markets</li>
          </ul>
        </div>
        <div className="m-5 sm:m-10">
        <h1 className="font-bold text-xl my-10">Which Sectors to Invest in Turkey</h1>
          <h1 className="font-bold mb-5">Real Estate</h1>
          <p className="text-normal  text-justify ">Turkey is a country that attracts the attention of real estate investors due to its geographical location. The total house sales in Turkey between the years 2015-2020 is 8.3 million. Class A Office supply in İstanbul in 2020 is 5.6 million square meters. 13.6 million square meters is the active gross leasable area size in shopping centers across Turkey in 2020. In addition to these, Turkey is also active in terms of logistics real estate. The total logistic real estate stock in İstanbul and Kocaeli provinces in 2020 is 10.2 million square meters. The development of transportation channels leads to the revival of the real estate market. From this perspective, Istanbul is stated as the city where the most real estate investments are made.</p>
        </div>
        <div className="m-5 sm:m-10">
          <h1 className="font-bold mb-5">Textile</h1>
          <p className="text-normal  text-justify ">The textile sector has a long and deep-rooted history. With the accompanying developments in technology, the demand for textiles has increased considerably. This means both employment, export, and investment incentives for Turkey. The textile sector, which is intertwined with the industry and agriculture sectors due to the materials used, is an area that has managed to attract the attention of many investors. In terms of regional investments, the rate of support received increases when investments are made in priority regions. For example, as of 2020, the amount of investment made in the 6th region, which includes Adıyaman, Ağrı, Ardahan, Batman, Bingöl, Bitlis, Diyarbakır, Hakkari, Iğdır, Kars, Mardin, Muş, Siirt, Şanlıurfa, Şırnak and Van, in the ready-made clothing sectors has exceeded 2.7 billion Turkish liras.</p>
        </div>
        <div className="m-5 sm:m-10">
          <h1 className="font-bold mb-5">Agriculture</h1>
          <p className="text-normal  text-justify ">Turkey is known as one of the world’s leading countries in the field of agriculture with its favorable geographical conditions and climate, agricultural lands, and water resources. Turkey is the world’s 10th largest agricultural producer. It is also the world leader in the production of dried figs, hazelnuts, quince, and dried apricots. Additionally, Turkey also offers significant investment opportunities in sub-sectors of the agricultural industry such as greenhouse production, animal and vegetable proteins, seed, and aquaculture.

According to the data of the Turkish Ministry of Agriculture and Forestry, the increase in Turkey’s agricultural product exports between 2002 and 2020 was 408%. In addition, the average annual growth rate in the agricultural sector in Turkey between 2003 and 2020 is 2.5%. Between 2002 and 2018, Turkey’s livestock and aquaculture exports increased 7.3 times. With these and many similar features, Turkey is a very convenient country for agricultural investments.</p>
        </div>
      </div>
    </>
  );
}

export default Investment;
