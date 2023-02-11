import React,{ useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop from 'react-image-crop'

export default function ImageCropper({ src ,setCompletedCrop}) {
    const [crop, setCrop] = useState();
    return (
      <ReactCrop onComplete={setCompletedCrop} crop={crop} onChange={c => setCrop(c)} aspect={1} keepSelection={true}>
            <img src={src} className="mx-2 border border-2 p-2 image-view"/>
      </ReactCrop>
    )
  }