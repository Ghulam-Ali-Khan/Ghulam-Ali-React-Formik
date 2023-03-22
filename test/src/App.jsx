import { useState } from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';


function App() {
  const formik = useFormik({
    initialValues:{
      username:"",
      email:"",
      name:"",
      status:"",
      counrty:"",
    },
    validationSchema:Yup.object({
        username:Yup.string()
        .max(5, "Username must be less than 5 characters")
        .required("this is required filed"),
       
          name:Yup.string()
          .required("this is required field"),
        email:Yup.string()
        .email("Please Enter A Valid Email")
        .required("this field Is required"),
        
    }),
    onSubmit:(values)=>{
      console.log("Form Submitted : ", values);
    }
  });


  console.log(formik.errors);

  return (
    <div >
      <form onSubmit={formik.handleSubmit}>
        <input  
        type="text"
        name="username"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value= {formik.values.username}
        placeholder="Username"
        />
        {formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}
        <input  
        type="text"
        name="name"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value= {formik.values.name}
        placeholder="Name"
        />
        {formik.errors.name && <p style={{color:"red"}}>{formik.errors.name}</p>}
        <input  
        type="email"
        name="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value= {formik.values.email}
        placeholder="Email"
        />
        {formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}
        <label htmlFor="">Single</label>
        <input type="radio" name='status' value="single" onChange={formik.handleChange}/>
        <label htmlFor="">Coder</label>
        <input type="radio" name='status' value="coder" onChange={formik.handleChange}/>
        <label htmlFor="">Commited</label>
         <input type="radio" name='status' value="commited" onChange={formik.handleChange}/>




<select name="country" id="country" onChange={formik.handleChange}>
  <option value="">-Select-</option>
  <option value="Pakistan">PAkistan</option>
  <option value="Suadia">Suadia</option>
  <option value="America">America</option>
  <option value="Singapur">Singapur</option>
</select>

        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App
