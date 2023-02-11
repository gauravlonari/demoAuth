import React from 'react'

export default function Grid({images,handleClick,selectedImage}) {
    console.log({selectedImage})
  return (
    <div>
        <div className='row'>
        {images.map((item,i)=>{
        return (
            <div className={`col-md-4 text-center`} key={"image-grid-"+i+item}>
                <img src={item} alt="" data-index={i} onClick={handleClick} className={selectedImage == i?"p-2 bg-primary":""} style={{height:"100px",width:"100px"}}  />
            </div>
                )
        })}
        </div>
    </div>
  )
}
