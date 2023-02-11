import React from 'react'
import { Button } from '@mui/material';

export default function Page3({data}) {


    const handleSubmit=(e)=>{
        e.preventDefault();

        // use data.crop for cropped image (base64)
        // console.log(data) // to get data contents in console
        
        // use data variable and make your api call here
        // fetch

    }

  return (
    <section>
        <form onSubmit={handleSubmit}></form>
        <div className='row'>
            <div className='col-md-6'>
                <h4>Name: {data.name}</h4>
                <h4>Email: {data.email}</h4>
                <h4>Phone: {data.phone}</h4>
                <h4>Date of Birth: {new Date(data.dob).toDateString()}</h4>
            </div>
            <div className="col-md-6">
                <img src={data.crop} className="image-view" alt="" />
            </div>
        </div>
        <Button type="submit" variant="contianed">Submit</Button>
    </section>
  )
}
