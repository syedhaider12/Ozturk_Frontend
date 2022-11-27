import { Navigate } from "react-router-dom"


function Auth({children}){
  let token = localStorage.getItem("token")
  return( token ? children : <Navigate to ="/admin" replace/>);
}
export default Auth;