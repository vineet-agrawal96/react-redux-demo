import React from "react"
import { Header } from "../common/Header"
import { Formik, Field, ErrorMessage} from "formik"
import { Button, FormGroup, Label} from 'reactstrap';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../reducers/action"

const initialValues = {
    firstName : "",
    lastName : "",
    email : "",
    dob:"",
    designation:"",
    companyName:""
}

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    email: Yup.string().required("This field is required"),
    dob: Yup.string().required("This field is required"),
    designation: Yup.string().required("This field is required"),
    companyName: Yup.string().required("This field is required"),

})

export const UserForm = () => {
    const dispatch = useDispatch()
    
    return (
            <>
            <Header />
            <h2>UserForm</h2>
            <Formik 
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={(values) => { 
                   if(!values.id){
                    dispatch(addUser(values))
                   }
                   console.log("on submit===>", values)
                 }}
                children={(props) => {
                    return <RenderForm {...props} />
                }}
            />
            </>
        )
    }

const RenderForm = (props) => {
    const { handleSubmit } = props
    return(
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Field 
                  type="text" 
                  name="firstName" 
                  id="firstName" 
                />
                <ErrorMessage 
                  name="firstName"  
                  render={msg => <span className="text-danger f-10 d-inline-block">{msg}</span>}
                />  
            </FormGroup>
            <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Field 
                  type="text" 
                  name="lastName" 
                  id="lastName" 
                />
                <ErrorMessage 
                  name="lastName"  
                  render={msg => <span className="text-danger f-10 d-inline-block">{msg}</span>}
                /> 
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Field 
                  type="text" 
                  name="email" 
                  id="email" 
                />
                <ErrorMessage 
                  name="email"  
                  render={msg => <span className="text-danger f-10 d-inline-block">{msg}</span>}
                /> 
            </FormGroup>
            <FormGroup>
                <Label for="dob">DOB</Label>
                <Field 
                  type="text" 
                  name="dob" 
                  id="dob" 
                />
                <ErrorMessage 
                  name="dob"  
                  render={msg => <span className="text-danger f-10 d-inline-block">{msg}</span>}
                /> 
            </FormGroup>
            <FormGroup>
                <Label for="designation">Designation</Label>
                <Field 
                  type="text" 
                  name="designation" 
                  id="designation" 
                />
                <ErrorMessage 
                  name="designation"  
                  render={msg => <span className="text-danger f-10 d-inline-block">{msg}</span>}
                /> 
            </FormGroup>
            <FormGroup>
                <Label for="companyName">Company Name</Label>
                <Field 
                  type="text" 
                  name="companyName" 
                  id="companyName" 
                />
                <ErrorMessage 
                  name="companyName"  
                  render={msg => <span className="text-danger f-10 d-inline-block">{msg}</span>}
                /> 
            </FormGroup>
            <Button color="link">Cancel</Button>{' '}
            <Button type="submit" color="primary">Add</Button>
            
        </form>
    )

}