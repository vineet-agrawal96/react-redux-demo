import React from "react"
import { Header } from "../common/Header"
import {  useSelector } from "react-redux"

import { Table } from 'reactstrap';

export const UsersList = () => {
   return (<>
            <Header />
            <RenderUserList />
          </>)
}

const RenderUserList = () => {
    const usersList = useSelector((state)=>state.users)
    if(usersList.length > 0){
       return (
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Email</th>
                <th>Company Name</th>
                <th>Designation</th>
            </tr>
            </thead>
            <tbody>
             <RenderUserRecord usersList={usersList}/>
             </tbody>
            </Table>   
       )
    }

    return "No Data Found"
    
}

const RenderUserRecord = (props) => {
    const { usersList } = props 
    return usersList.map((item,index)=>{
        const { id, firstName, lastName, dob, email, companyName, designation } = item
        return(
            <tr key={`key_${id}`}>
                <th scope="row">{id}</th>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{dob}</td>
                <td>{email}</td>
                <td>{companyName}</td>
                <td>{designation}</td>
            </tr>
            
        )
    })
}