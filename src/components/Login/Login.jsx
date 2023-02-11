import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function Login() {

  useEffect(()=>{
    document.title="Login"
  },[])

  return (
    <>
    <div className="d-flex flex-column w-75">
      <div className="d-flex justify-content-center align-items-center flex-column mb-4"> 
        <h5>Login</h5>
        <form>
          Not Implemented
        </form>
        </div> 
      </div>
    </>
  );
}
