import React,{useEffect,useState} from 'react'
import axios from 'axios'
function Posts() {
  const[showPost ,setShowPost]=useState([0])

  const fetchData=async()=>{
    try{
     const {data} =await axios.get('https://ozturkbackend-production.up.railway.app/show',{
      headers: {
          
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
      })
    
     if(data){

      
      setShowPost(data.db)
      
      
    
    }
    }catch(err){
     console.log(err)
    }
   }
  useEffect(() => {
    fetchData();
  },[showPost]);
  return (
   <>
   
  {showPost.length>0 ? <div><h1 className="pt-10 pb-2 text-center font-bold sm:text-2xl text-[#031e4a] " id="posts" data-aos="fade-right" data-aos-duration="1500"  > Featured Properties</h1>
   <div className='grid w-full h-auto grid-cols-1 gap-8 p-5 sm:px-10 md:grid-cols-3'>
   {showPost.map(({ title,description,image }, i)=>(
    <div key={i} className="overflow-hidden duration-300 rounded-lg shadow-lg shadow-gray-400 ">
      <img  className="w-full h-[350px]"src={process.env.REACT_APP_URL+image} alt=""  />
      <div className="px-6 py-4">
        <h1 className="mb-2 text-2xl font-bold">{title}</h1>
        <p className='text-normal'>{description}</p>


      </div>



    </div>
   )
   
  
   
   )}
   </div>
   </div>:null}
   
   </>
  )
}

export default Posts