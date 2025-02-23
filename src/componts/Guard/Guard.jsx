import { Navigate } from "react-router-dom";

export function Guard({children}) {
const token = localStorage.getItem('token')

  return (<>
  {token ? children : <Navigate to="/login"/>}
  
  {children}
  
  
  
  </>);
}