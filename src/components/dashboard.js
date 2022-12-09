import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PlusIcon, TrashIcon, PencilIcon } from "@heroicons/react/outline";
import Post from "./addPost";
import Edit from "./editPost";
function Dashboard() {
  let navigate = useNavigate();
  let token=localStorage.getItem("token");
  axios.defaults.headers.common={'authorization':`Bearer ${token}`}
 
  const [addModal, setaddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [showPost, setShowPost] = useState([]);
  const  [id,setdataId]=useState();
 
  function handleClose() {
    setaddModal(false);
    
  }
  function editHandle(){
    setEditModal(false);
  }
  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://backendozturk.herokuapp.com/show",{
        headers: {
            'authorization': token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
        });
      if (data) {
        setShowPost(data.db);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const  deleteHandle =async(id)=>{
    console.log("del")
  try{
    await axios.delete(`http://localhost:9000/delete/${id}`,{
      headers: {
          
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      }
      })
  }catch(err){
   console.log(err);
  }
  }
  

  useEffect(() => {
    fetchData();
  }, [showPost]);
  return (
    <>
      <div className="flex items-center justify-between p-5 text-white  bg-[#031e4a]">
        <h2 className="text-2xl">Ozturk Realtors</h2>
        <button onClick={()=>{
       localStorage.removeItem("token");
       navigate("/admin");
        }}>Logout</button>
      </div>
      <div className="relative m-3 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-[#031e4a]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
              Description
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>

              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {showPost.map(( data , i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-center text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {data.title}
                    
                  </th>
                  <td className="px-6 py-4 text-center text-bg">{data.image}</td>
                  <td className="px-6 py-4 text-center text-bg">{data.description}</td>

                  <td className="flex items-center justify-center px-6 py-4 ">
                    <TrashIcon className="w-5 h-5 cursor-pointer " onClick={()=>{deleteHandle(data._id)}} />

                    <PencilIcon className="w-5 h-5 cursor-pointer " onClick={()=>{setEditModal(true)
                    setdataId(data._id)}} />
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {addModal ? <Post handleClose={handleClose} /> : null}
      {editModal ? <Edit editHandle={editHandle} id={id} /> : null}
      
      <PlusIcon
        className="absolute w-10 h-10 text-white bg-[#031e4a] rounded-full right-5 bottom-5"
        onClick={() => {
          setaddModal(true);
        }}
      ></PlusIcon>
    </>
  );
}

export default Dashboard;
