import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const AddEmployee = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');

    function addEmployee(e:any){

        const employee = {firstName,lastName,email};
        console.log({...employee});

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
          helperText='Employee First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Box/>
        
        <TextField className='input-group mb-3'
          required
          id="lastName"
          label="Last Name"
          helperText='Employee Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField className='input-group mb-3'
          required
          id="email"
          label="E-Mail"
          helperText='Employee E-Mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className='mb-3' variant="contained" endIcon={<PersonAddIcon fontSize="large"/>} onClick={addEmployee} size="large">
            Add
            </Button>
        
        
    </Box>
    
    
    </>
  )
}
