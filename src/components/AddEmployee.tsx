import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { addEmployee, findEmployee } from '../services/MyListService';
import { useNavigate, useParams } from 'react-router-dom';

export const AddEmployee = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const navigator = useNavigate();
    const [errors,setErrors] = useState({
      firstName: '',
      lastName: '',
      email: ''
    });

    const {id} = useParams();

    const[employee,setEmployee] = useState();

    useEffect(() => {
      console.log('***' + id);
      if(id){
        findEmployee(id).then((response) => {
          setEmployee(response.data)
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        });
        console.log(employee);
      }

    },[id]);

    function addEmployeeLocal(e:any){

      e.preventDefault();

      console.log('###' + id);

      if(validateForm()){
        const employee = {id,firstName,lastName,email};
        console.log({...employee});
        addEmployee(employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
        });
      }

    }


    function validateForm(){
      let valid = true;

      const errorscpy = {...errors};
      if(firstName.trim()){
        errorscpy.firstName = '';

      }
      else {
        errorscpy.firstName = 'First Name required';
        valid = false;
      }
      if(lastName.trim()){
        errorscpy.lastName = '';
      }
      else {
        errorscpy.lastName = 'Last Name required';
        valid = false;
      }

      if(email.trim()){
        errorscpy.email = '';
      }
      else {
        errorscpy.email = 'Email required';
        valid = false;
      }

      setErrors(errorscpy);
      return valid;

    }

    function pageTitle(){
      if(id){
        return <h1 className="container d-flex align-items-center justify-content-center">Update Employee</h1>
      }
      else {
        return <h1 className="container d-flex align-items-center justify-content-center">Add Employee</h1>
      }
    }
    
  return (

    <>
    {pageTitle()}
    
    <Box className="container d-flex align-items-center justify-content-center"
    component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
    >
        
        <br/>
        <TextField className='input-group mb-3'
          required
          id="firstName"
          label="First Name"
          helperText={errors.firstName ? errors.firstName : 'Employee First Name'}
          value={firstName}
          error={errors.firstName ? true : false}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Box/>
        
        <TextField className='input-group mb-3 '
          required
          id="lastName"
          label="Last Name"
          helperText={errors.email ? errors.email : 'Employee Last Name'}
          error={errors.lastName ? true : false}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField className='input-group mb-3'
          required
          id="email"
          label="E-Mail"
          helperText={errors.email ? errors.email : 'Employee E-Mail'}
          error={errors.email ? true : false}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className='mb-3' variant="contained" endIcon={<PersonAddIcon fontSize="large"/>} onClick={addEmployeeLocal} size="large">
            {id ? 'Update' : 'Add'}
            </Button>
        
        
    </Box>
    
    
    </>
  )
}
