import React, { useState } from "react";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Button } from "@mui/material";


function App() {
  const [type, setType] = useState(0);
  
  return (
    <div className="container mh-vh d-flex justify-content-center align-items-center w-100 flex-column">
      {type===0?<Register/>:type===1?<Login setLoggedIn={setType}/>:<h4>You are successfully logged in</h4>}
      <Button variant="text" className="mt-4 fs-5" onClick={()=>{
        setType(type===0?1:0)
      }} disabled={type===2}>Go to {type===0?"Login":"Register"}</Button>
    </div>
  );
}

export default App;
