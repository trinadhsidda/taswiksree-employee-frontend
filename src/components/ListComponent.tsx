import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { deleteEmployeeById, listEmployees } from '../services/MyListService';
import GridBottom from './GridBottom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 200 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'E-mail',
    type: 'string',
    width: 300,
  }
];

const  ListComponent = () => {

  const [myList,setList] = useState([]);
  const navigator = useNavigate();
  
  useEffect(() => {
    listEmployees().then((response) => {
      setList(response.data);
      console.log('***' + response.data.length)
      console.log(response.data);
    })
    .catch(error => console.log(error))
    
  },[]);

  
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);

  function updateEmployee(){
    console.log(rowSelectionModel.values().next().value);
    
    //console.log((myList[rowSelectionModel.values().next().value-1]).id);
    //const id = (myList[rowSelectionModel.values().next().value-1]).id;
    
    //console.log(rowSelectionModel.values().next().value);
    
    const updateId = rowSelectionModel.values().next().value;
    //(myList[rowSelectionModel.values().next().value-1]).id;
    console.log('aaa ' + updateId);

    navigator(`/edit-employee/${updateId}`);
  }

  function deleteEmployee(){
    console.log(rowSelectionModel.values().next().value);
    
    const deleteId = rowSelectionModel.values().next().value;
    console.log('deleteId: ' + deleteId);
    deleteEmployeeById(deleteId);
    navigator(0);
  }

  return <div style={{ height: '100%', width: '100%' }}>
  <br/>
  <div className="float-right">
  <GridBottom/>
  </div>
  <br/>
  <DataGrid
    rows={myList}
    columns={columns}
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    }}
    pageSizeOptions={[5, 10, 15]}
    checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
  />
  <Box>
  <br/>
  <Button variant="contained" endIcon={<EditIcon fontSize="large"/>} onClick={updateEmployee}>
        Update Employee</Button>

        &nbsp;&nbsp;&nbsp;
  <Button variant="contained" endIcon={<EditIcon fontSize="large"/>} onClick={deleteEmployee}>
        Delete Employee</Button>
        
  <Box/><br/>

  </Box>
</div>
}

export default ListComponent