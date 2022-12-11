import React,{useState} from 'react';
import axios from "axios"
function Post({handleClose}) {
  let token=localStorage.getItem("token");
  axios.defaults.headers.common={'authorization':`Bearer ${token}`}
  const[error ,setError]=useState({});
  const[input,setInput]=useState({
    title:"",
    description:"",
    img:''
  })
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input,[name] : value });
    console.log( value);
  };
  const handleImage = (event) => {
    console.log( "ggg");
   setInput({ ...input, img : event.target.files[0] })
   
  };
  const hanldeSubmit =(e)=>{
    console.log("clicked")
    e.preventDefault();
    setError(validate(input));
    const formData = new FormData();
    formData.append('img',input.img)
    formData.append('title',input.title)
    formData.append('description',input.description)
    
    console.log(formData)
    if(Object.keys(error).length === 0){

      axios.post('https://ozturkbackend-production.up.railway.app/add', formData,{
        headers: {
            
            'Accept' : 'application/json',
            'Content-Type': 'multipart/form-data,application/json'
        }
        })
      .then((res) => {
        handleClose();
    }).catch((error) => {
        console.log(error)
    })
    }
  }
  const validate = (values) => {
    const error = {};
    if (!values.title) {
      error.title = "Title is required";
    }
    if (!values.description) {
      error.description = "Description is required";
    }
    if (!values.img) {
      error.img = "Image is required";
    }
    return error;
  };
  
 

 
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
                value={input.title}
                onChange={handleInput}
               
              />
              <p className="text-red-600"> {error.title}</p>
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
                value={input.description}
                onChange={handleInput}
               
              />
              <p className="text-red-600"> {error.description}</p>
            </div>
            <div className="mb-4">
             
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 placeholder-red-600 "
                type="file"
                name="img"
               
                onChange={handleImage}
               
              />
              <p className="text-red-600"> {error.title}</p>
            </div>
            <div className="flex items-center justify-end p-6 border-blueGray-200">
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                type="button"
                onClick={handleClose}
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

export default Post