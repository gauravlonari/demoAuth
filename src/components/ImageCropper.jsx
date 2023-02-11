import React,{ useEffect, useRef, useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop from 'react-image-crop'
import Cropper from 'cropperjs';

export default function ImageCropper({ src ,setCompletedCrop}) {
    // const [crop, setCrop] = useState();
    // return (
    //   <ReactCrop onComplete={setCompletedCrop} crop={crop} onChange={c => setCrop(c)} aspect={1} keepSelection={true}>
    //         <img src={src} className="mx-2 border border-2 p-2 image-view"/>
    //   </ReactCrop>
    // )
    const image=useRef();
    let cropper;
    useEffect(()=>{
        try{
            cropper=new Cropper(image.current, {
                aspectRatio: 1,
                crop(event) {
                  console.log(event.detail);
                },
              });
        }
        catch(e){
        }
        console.log(cropper)
    },[image])
    return(
        <div className='d-block mx-2 border border-2 p-2'>
            <img ref={image} src={src} className="image-view"/>
        </div>
        )
}