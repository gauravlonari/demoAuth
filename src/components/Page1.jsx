import React, { useEffect } from "react";
import validator from "validator";
import * as yup from 'yup'
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";

const validateIndianPhone = (value) => {
  if(value)
    return validator.isMobilePhone(value, "en-IN");
  else
    return false;
};
export default function Page1({data,setPage,setData}) {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    dob: new Date().toISOString().substring(0, 10),
  };

  useEffect(()=>{
    setValues(data)
  },[])

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object({
      name: yup.string("Enter valid Name").required("Enter your Name"),
      phone: yup
        .string()
        .test(
          "validateIndianPhone",
          "Enter a valid Indian Phone Number",
          function (value) {
            return validateIndianPhone(value);
          }
          ),
          email: yup
          .string()
          .email("Enter a valid Email")
          .required("Enter your email"),
          dob: yup
          .date("Enter date of birth")
          .max(new Date().toISOString().substring(0, 10), "Select Past date"),
        }),
        
        
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log(data,values)
      setData({...data,...values});
      setPage(2);
      setSubmitting(false);
    },
  });
  
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setValues,
  } = formik;
  
    useEffect(()=>{
      console.log(values,data)
    },[values])

  return <section>
    <form onSubmit={handleSubmit}>
        <div className="">
            <TextField
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="Lorem Ipsum"
            variant="outlined"
            label="Name"
            fullWidth
            required
            ></TextField>
            <p className="text-danger">{errors.name}</p>
        </div>  
        <div className="">
        <TextField
                        name="phone"
                        type="number"
                        value={values.phone}
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        placeholder="9876789087"
                        variant="outlined"
                        label="Contact Number"
                        fullWidth
                        required
                      ></TextField>
            <p className="text-danger">{errors.phone}</p>
        </div>  
        <div className="">
            <TextField
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="LoremIpsum@email.com"
            variant="outlined"
            label="Email"
            fullWidth
            required
            ></TextField>
            <p className="text-danger">{errors.email}</p>
        </div>  
        <div className="">
        <TextField
            name="dob"
            type="date"
            value={values.dob}
            onChange={handleChange}
            // onBlur={handleBlur}
            // placeholder="Near Natraj Society"
            variant="outlined"
            label="Date of Birth"
            fullWidth
            required
            ></TextField>
            <p className="text-danger">{errors.dob}</p>
        </div>
        <Button variant="contained" disabled={isSubmitting || !!errors.name || !!errors.phone || !!errors.email} fullWidth type="submit">Submit</Button>  
    </form>
  </section>;
}
