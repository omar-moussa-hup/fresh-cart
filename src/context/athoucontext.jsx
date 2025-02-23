import { createContext, useEffect, useState } from "react";
  
 export const Authcontext = createContext()

export function AuthcontextProvider({children}) {

    let [token,setToken] = useState(null)

  useEffect(()=>{

setToken(localStorage.getItem('token'))

  },[])
  
  return (<>
  
  <Authcontext.Provider value={{token,setToken}}>
  {children}
  </Authcontext.Provider>
  
  
  </>);
}