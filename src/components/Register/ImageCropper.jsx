import React,{ useEffect, useRef, useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop from 'react-image-crop'
import "cropperjs/dist/cropper.css";
import { Cropper } from 'react-cropper';

export default function ImageCropper({ src ,setCroppedImage}) {

  const cropperRef = useRef(null);
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    // console.log(imageElement,cropper)
    if(preview?.current){
        preview.current.src=cropper.getCroppedCanvas().toDataURL();
        setCroppedImage(cropper.getCroppedCanvas().toDataURL())
    }
  };

  const preview=useRef(null)

  return (
    <>
    <Cropper
      src={src}
      initialAspectRatio={1}
      aspectRatio={1}
      width='400px'
      guides={true}
      crop={onCrop}
      ref={cropperRef}
      className="mx-2 border border-2 p-2 image-view"
    />
    <img src={src} ref={preview} className="mx-2 border border-2 p-2 image-view"/>
    </>
    );
}