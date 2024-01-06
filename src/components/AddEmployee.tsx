import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { addEmployee } from '../services/MyListService';
import { useNavigate } from 'react-router-dom';

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

    

    function addEmployeeLocal(e:any){

      e.preventDefault();

      if(validateForm()){
        const employee = {firstName,lastName,email};
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

    
  return (

    <>
    <h1 className="container d-flex align-items-center justify-content-center">Add Employee</h1>
    
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
            Add
            </Button>
        
        
    </Box>
    
    
    </>
  )
}
