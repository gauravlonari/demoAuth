import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import isEmail from "validator/lib/isEmail";
import Grid from "./Grid";
import {AiFillCloseCircle} from 'react-icons/ai'

export default function Login({setLoggedIn}) {


  const [images, setImages] = useState([
    "https://source.unsplash.com/random/100x100",
    "https://source.unsplash.com/random/100x100",
    "https://source.unsplash.com/random/100x100",
    
    "https://source.unsplash.com/random/100x100",
    "https://source.unsplash.com/random/100x100",
    "https://source.unsplash.com/random/100x100",

    "https://source.unsplash.com/random/100x100",
    "https://source.unsplash.com/random/100x100",
    "https://source.unsplash.com/random/100x100",
  ]);

  useEffect(()=>{
    document.title="Login"
  },[])
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [modal, setModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    
    const handleChange=(e)=>{
      setEmail(e.target.value);
      setError(isEmail(e.target.value)?"":"Enter a valid email")
    }

    const handleOnClickImage=(e)=>{
      let imageIndex=e.target.dataset.index;
      setSelectedImageIndex(imageIndex)
      console.log(imageIndex);
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      // setImages(images) your array of images from server
      handleOpenDialog();
      //setLoggedIn

    }

    const handleSkip=(e)=>{
      e.preventDefault();
      setSelectedImageIndex(null);
      // setImages(images) your array of images from server
      
    }
    const handleNext=(e)=>{
      e.preventDefault();
      if(!selectedImageIndex){
        return alert('Select any image first for verification')
      }

      // setImages(images) your array of images from server
      setSelectedImageIndex(null);

    }

    

    const handleOpenDialog=()=>{
      setModal(true);
    }
    const handleCloseDialog=()=>{
      setSelectedImageIndex(null)
      setModal(false);
    }

  return (
    <>
    {modal && (
      <div className="modal-backdrop d-flex align-items-center justify-content-center">
        <div className="sliderWrap bg-white rounded p-4 border border-2">
          <div className="d-flex flex-row justify-content-between mb-3">
          <h4>Verify</h4>
            <AiFillCloseCircle className="btnclose fs-3 text-end" onClick={handleCloseDialog} />

          </div>
          <div className="fullScreenImage d-flex flex-column w-auto">
              <Grid images={images} handleClick={handleOnClickImage} selectedImage={selectedImageIndex}></Grid>
              <div className="mt-3 d-flex justify-content-between">
                <Button variant="contained" onClick={handleSkip}>Skip</Button>
                <Button variant="contained" disabled={!selectedImageIndex} onClick={handleNext}>Next</Button>
              </div>
          </div>
        </div>
      </div>
      )}    

    <div className="d-flex flex-column w-75">
      <div className="d-flex justify-content-center align-items-center flex-column mb-4"> 
        <h5 className="mb-4">Login</h5>
        <form onSubmit={handleSubmit}>
          <div className="">
            <TextField
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="LoremIpsum@email.com"
            variant="outlined"
            label="Email"
            fullWidth
            required
            ></TextField>
            <p className="text-danger">{error}</p>
            <Button variant="contained" disabled={!!error} fullWidth type="submit">Submit</Button>  

        </div>  
        </form>
        </div> 
      </div>
    </>
  );
}
