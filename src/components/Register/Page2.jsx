import React, { useEffect, useRef, useState } from "react";
import validator from "validator";
import * as yup from 'yup'
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import ImageCropper from "./ImageCropper";


export default function Page2({data,setPage,setData}) {
    const [src, setSrc] = useState("");
    const [file, setFile] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    
    // useEffect(()=>{
    //     console.log(src,file,croppedImage);
    // })

  useEffect(()=>{
    if(data.src)
        setSrc(data.src)
    if(data.file)
        setFile(data.file)
    if(data.crop)
        setCroppedImage(data.crop)
  },[])

//   useEffect(()=>{
//      console.log("croppedImage",croppedImage);
//      console.log("file",file);
//   },[croppedImage])

    const handleSubmit=(e) => {
        e.preventDefault();
        if(file){
            setData({...data,file:file,src:src,crop:croppedImage})
            setPage(3);
        }
    }
  
    const imageFile=useRef()
    const handleImage=(e)=>{
        e.preventDefault();
        if(imageFile.current.files?.length!==0){
            setSrc(URL.createObjectURL(imageFile.current.files[0]))
            setFile(imageFile.current.files[0]);
        }
    }

  return <section>
    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        {/* <img src={src} alt="" className="border border-2 p-2 image-view"/> */}
        <input ref={imageFile} type="file" accept=".png,.jpg,.jpeg" className="mb-3 border border-2 p-2" onChange={handleImage}/>
        <div>

        {
            src &&
            <div className="row w-100 text-center">
                <h4 className='col-md-12'>Drag below to crop your Image</h4>
                {/* <h4 className='col-md-6'>Preview</h4> */}

            </div>
        }
        <div className='d-flex flex-row mb-3'>

            <ImageCropper src={src} setCroppedImage={setCroppedImage}/>
            {/* <img src={src} className="mx-2 border border-2 p-2 image-view"/> */}
        </div>
        </div>
        <Button variant="contained" disabled={!croppedImage} fullWidth type="submit">Submit</Button>  
    </form>
  </section>;
}
