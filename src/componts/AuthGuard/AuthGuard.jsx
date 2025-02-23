import { Navigate } from "react-router-dom";

export function AuthGuard({children}) {
  
  
  const token = localStorage.getItem('token')
  
  
    return (<>
    
    {token? <Navigate to="/home"/> : children}
    
    </>);
}