import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { listEmployees } from '../services/MyListService';
import GridBottom from './GridBottom';


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
  useEffect(() => {
    listEmployees().then((response) => {
      setList(response.data);
      console.log('***' + response.data.length)
      console.log(response.data);
    })
    .catch(error => console.log(error))
    
  },[]);

  return <div style={{ height: '100%', width: '100%' }}>
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
  />
  <GridBottom/>

</div>
}

export default ListComponent