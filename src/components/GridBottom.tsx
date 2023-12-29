import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from 'react-router-dom';

export default function GridBottom() {

    const navigator = useNavigate();
    function addEmployee(){
        navigator('/employee/add')
    }
  return (
    <Stack direction="row" spacing={2}>

      <Button variant="contained" endIcon={<PersonAddIcon fontSize="large"/>} onClick={addEmployee}>
        Add Employee</Button>
    </Stack>
  );
}