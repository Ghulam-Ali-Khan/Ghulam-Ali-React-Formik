import { useState } from 'react'
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues:{
      username:"",
      email:"",
      name:"",
      status:"",
      counrty:"",
    },
    onSubmit:(values)=>{
      console.log("Form Submitted : ", values);
    }
  });

  return (
    <div >
      <form onSubmit={formik.handleSubmit}>
        <input  
        type="text"
        name="username"
        onChange={formik.handleChange}
        value= {formik.values.username}
        placeholder="Username"
        />
        <input  
        type="text"
        name="name"
        onChange={formik.handleChange}
        value= {formik.values.name}
        placeholder="Name"
        />
        <input  
        type="email"
        name="email"
        onChange={formik.handleChange}
        value= {formik.values.email}
        placeholder="Email"
        />
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
