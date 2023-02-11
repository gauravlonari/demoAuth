import React, { useEffect, useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { Button } from "@mui/material";

export default function Register() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: new Date().toISOString().substring(0, 10),
  });

  useEffect(()=>{
    document.title="Registration"
  },[])

  const getPage = () => {
    switch (page) {
      case 1:
        return <Page1 data={data} setData={setData} setPage={setPage} />;
      case 2:
        return <Page2 data={data} setData={setData} setPage={setPage} />;
      case 3:
        return <Page3 data={data} setData={setData} setPage={setPage} />;
      default:
        return <h4>Invalid State</h4>;
    }
  };

  return (
    <>
    <div className="d-flex flex-column w-75">
      <div className="d-flex justify-content-between align-items-center mb-4"> 
        <Button
          variant="contained"
          onClick={() => {
            setPage(page === 1 ? 1 : page - 1);
          }}
          disabled={page===1}
          >

          Back
        </Button>
        <h5>Register</h5>
        {/* <Button
          variant="contained"
          onClick={() => {
            setPage(page == 3 ? 3 : page + 1);
          }}
          >
          Next
        </Button> */}
        <div></div>
        </div> 

      {getPage()}
      </div>
    </>
  );
}
