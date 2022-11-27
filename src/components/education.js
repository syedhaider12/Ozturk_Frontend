import React from "react";

function Education() {
  //const [isReadMore, setIsReadMore] = useState(false);
  return (
    <div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}assests/Collegestudents.jpg`}
          alt=""
          className="w-full h-[350px] brightness-50"
        />
        <h1 className=" absolute md:inset-0 md:top-[20%] inset-0 top-[30%]  text-xl tracking-widest sm:text-3xl text-center font-bold  uppercase  text-white">
          study in turkey
        </h1>
      </div>
      <div className="m-10">
        <p className="text-justify">
          As an international student in Turkey you will have the opportunity to
          experience both modernity and tradition in one of the safest and most
          stable countries in the region. Some Turkish Universities has English
          as the teaching language while others will offer the opportunity to
          learn English. As an international student in Turkey you will have the
          opportunity to experience both modernity and tradition in one of the
          safest and most stable countries in the region. Some Turkish
          Universities has English as the teaching language while others will
          offer the opportunity to learn English. Above all, the high quality of
          education will make you more than ready for a future anywhere in the
          world. Positioned at the crossroads of east and west, the Turkish
          landscape encompasses a vast variety of geographical zones, it has the
          combined characteristics of three continents of the world: Europe,
          Africa and Asia. Due to its location, surrounded by seas on three
          sides, Turkey as always been the center of great trade, silk and spice
          routes. Today, even in the most inaccessible or isolated corners, one
          can easily feel and see the traces of different cultures
        </p>
      </div>
      <div className="grid m-10 sm:grid-cols-2  grid-cols gap-8 ">
        <div className="flex  flex-col  bg-[#031e4a] overflow-hidden rounded-lg text-white   w-full  h-auto">
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}assests/scholarship.jpg`}
              alt=""
              className="w-full h-[250px]  brightness-50"
            />
            <h1 className=" absolute md:inset-0 md:top-[40%] inset-0 top-[40%]  text-xl tracking-widest sm:text-3xl text-center font-bold  uppercase  text-white">
            scholarships
            </h1>
          </div>
          <div className="my-10 mx-5">
            <p className="px-5 sm:text-center text-justify">
              There are various types of scholarship opportunities available for
              students Those are{" "}
            </p>
          </div>
          <div className="pl-5">
            <ul className="list-inside list-disc  text-justify">
              <li>Government scholarship</li>
              <li>Full scholarship</li>
              <li>Half scholarship</li>
              <li>Self sponsorship </li>
            </ul>
          </div>
        </div>
        <div className="flex  flex-col  bg-[#031e4a] overflow-hidden rounded-lg text-white   w-full  h-auto">
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}assests/admission.jpg`}
              alt=""
              className="w-full h-[250px] brightness-50"
            />
            <h1 className=" absolute md:inset-0 md:top-[40%] inset-0 top-[40%]  text-xl tracking-widest sm:text-3xl text-center font-bold  uppercase  text-white">
            Admission Processing
            </h1>
          </div>
          <div className="my-10 mx-5">
            <p className="px-5  text-justify">
              Admission is the process through which students enter tertiary
              education at universities and colleges Hope Educational Consulant
              understand the student’s talent and advise them on which career
              would suit them the best. Selecting a right course and at the
              right country is a daunting task for any student. There are so
              many different institutions offering a variety of courses, so a
              student might find it difficult to understand the best choice and
              mix for his/her profile.Hope Educational Consulant will guide to
              choose the right career path, and assist in getting admissions in
              reputed universities based on student profile. The most
              challenging task for any student is to shortlist the right
              university based on his profile. Hope Educational Consulant with
              our expert team, will understand the needs of our students by
              giving the right choice of university selections based on their
              profile. Requirement of right set of student documents and
              verifying their originality before despatching to the universities
              will also be taken care of by us.{" "}
            </p>
          </div>
        </div>
        <div className="flex  flex-col  bg-[#031e4a] overflow-hidden rounded-lg text-white   w-full  h-auto">
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}assests/visa.jpg`}
              alt=""
              className="w-full h-[250px] brightness-50"
            />
            <h1 className=" absolute md:inset-0 md:top-[40%] inset-0 top-[40%]  text-xl tracking-widest sm:text-3xl text-center font-bold  uppercase  text-white">
             Visa guidence
            </h1>
          </div>
          <div className="my-10 mx-5">
            <p className="px-5  text-justify">
              Hope educational consultant understand the importance of visa
              filling for students. We take immense care in advising about the
              right documents required for the Visa purposes. Different
              countries have different rules & regulations for Visa processing.
              We provide excellent visa consultancy to candidates who are ready
              to apply for a student visa. Keeping in mind the respective
              country consulates requirements, the candidates are advised to
              prepare all the required documents which have to be presented at
              that particular consulate. We help in assisting students to
              prepare all the major documents and ensure help in all stages.
            </p>
          </div>
        </div>
        <div className="flex  flex-col  bg-[#031e4a] overflow-hidden rounded-lg text-white   w-full  h-auto">
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}assests/transfer.jpg`}
              alt=""
              className="w-full h-[250px] brightness-50"
            />
            <h1 className=" absolute md:inset-0 md:top-[40%] inset-0 top-[40%]  text-xl tracking-widest sm:text-3xl text-center font-bold  uppercase  text-white">
            transfer 
            </h1>
          </div>
          <div className="my-10 mx-5">
            <p className="px-5  text-justify">
              if you want to transfer to new school even if it’s to another
              country Hope educational consultant will help you to achieve to
              your dream college/ university .
            </p>
          </div>
        </div>
        <div className="flex  flex-col  bg-[#031e4a] overflow-hidden rounded-lg text-white   w-full  h-auto">
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}assests/departure.jpg`}
              alt=""
              className="w-full h-[250px] brightness-50"
            />
            <h1 className=" absolute md:inset-0 md:top-[40%] inset-0 top-[40%]  text-xl tracking-widest sm:text-3xl text-center font-bold  uppercase  text-white">
             Pre departure briefing
            </h1>
          </div>
          <div className="my-10 mx-5">
            <p className="px-5  text-justify">
              Once the students are ready to leave the country, we will arrange
              a pre departure briefing, where all the necessary information
              about the University, accommodation, hostel facilities, fee
              payment, orientation details, insurance required, clothing
              required with respect to the place and information about part time
              jobs will be provided. This briefing is to help ease the journey
              of the student to adapt to a new place and culture easily without
              going through any culture shock
            </p>
          </div>
        </div>
        <div className="flex  flex-col  bg-[#031e4a] overflow-hidden rounded-lg text-white   w-full  h-auto">
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}assests/currency.jpg`}
              alt=""
              className="w-full h-[250px] brightness-50"
            />
            <h1 className=" absolute md:inset-0 md:top-[40%] inset-0 top-[40%]  text-xl tracking-widest sm:text-3xl text-center font-bold  uppercase  text-white">
             travel & insurance
            </h1>
          </div>
          <div className="my-10 mx-5">
            <p className="px-5  text-justify">
              Students will get assistance in booking air tickets and will also
              be guided with respect to currency exchange, travelers cheques,
              insurance and telephone calling cards connection as per the
              country requirements..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
