import React,{useState,useEffect} from 'react'
import axios from "axios"
function Edit({editHandle , id}) {

  let token=localStorage.getItem("token");
  axios.defaults.headers.common={'authorization':`Bearer ${token}`}
  const[edit,setEit]=useState({
    title:"",
    description:"",
    img:"",
  })
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEit({ ...edit,[name] : value });
    console.log( value);
  };
  const handleImage = (event) => {
    
   setEit({ ...edit, img : event.target.files[0] })
   
   
  };
  const hanldeSubmit =(e)=>{
    console.log("clicked")
    e.preventDefault();
    const formData = new FormData();
    formData.append('title',edit.title)
    formData.append('description',edit.description)
    formData.append('img',edit.img)
    axios.put(`https://backendozturk.herokuapp.com/update/${id}`, formData,{
      headers: {
          
          'Accept' : 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      }
      })
    .then((res) => {
      editHandle();
  }).catch((error) => {
      console.log(error)
  })
  }
  async function editData(id) {
    try {
      const {data } = await axios.get(`http://localhost:9000/post/${id}`);
      console.log(data.data)
      setEit({
        ...edit,
        title: data.data.title,
        description: data.data.description,
        img: data.data.image,
       
      });
      
      console.log(edit.img)

    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    editData(id);
  },[edit]);
  
 

 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
      <div className="relative w-auto max-w-sm mx-auto rounded shadow-md bg-slate-50">
        <div className="p-3 mt-5 ">
          <form className="px-8 pt-6 " onSubmit={hanldeSubmit} encType='multipart/form-data'>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="title"
              >
                Enter Title
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 placeholder-red-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="title"
                id="title"
                value={edit.title}
                onChange={handleInput}
               
              />
             
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="description"
              >
                Enter Description
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 placeholder-red-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="description"
                id="description"
                value={edit.description}
                onChange={handleInput}
               
              />
              
            </div>
            <div className="mb-4">
           
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 placeholder-red-600 "
                type="file"
                name="img"
                
                onChange={handleImage}
               
              />
              
            </div>
            <div className="flex items-center justify-end p-6 border-blueGray-200">
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                type="button"
                onClick={editHandle}
              >
                Close
              </button>
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none "
                type="submit"
              >
                Submit
              </button>

            </div>
          </form>
         
        </div>
      </div>
    </div>
  )
}

export default Edit