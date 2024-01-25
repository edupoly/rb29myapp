import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
function StudentRegistration() {
    var studentForm = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            age:''
        },
        validationSchema:Yup.object({
            firstname:Yup.string().required("chinna firstname rayi")
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    console.clear();
    console.log(studentForm)
  return (
    <div>
        <h1>StudentRegistration</h1>
        <form onSubmit={studentForm.handleSubmit} className='container form-group'>

            <div class="form-floating mb-3">
                <input type="text" name="firstname" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur} className={studentForm.touched.firstname && studentForm.errors.firstname ? 'form-control is-invalid':'form-control'} id="floatingInput" placeholder="John" />
                <label for="floatingInput">Firstname</label>
            </div>
            <div>{ }</div>
            <br />
            <input type="text" name='lastname' onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
            <br />
            <input type="text" name='age' onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
            <br />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default StudentRegistration