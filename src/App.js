import React, { useState } from "react";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Button } from "@mui/material";


function App() {
  const [register, setRegister] = useState(true);
  
  return (
    <div className="container mh-vh d-flex justify-content-center align-items-center w-100 flex-column">
      {register?<Register/>:<Login/>}
      <Button variant="text" className="mt-4 fs-5" onClick={()=>{
        setRegister(!register)
      }}>Go to {register?"Login":"Register"}</Button>
    </div>
  );
}

export default App;
