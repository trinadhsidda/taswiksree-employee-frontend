
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListComponent from './ListComponent'
import { AddEmployee } from './AddEmployee';

export const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <ListComponent/>}/>
        <Route path='/employees' element={ <ListComponent/>}/>
        <Route path='/employee-add' element={<AddEmployee/>}/>
        <Route path='/edit-employee/:id' element={<AddEmployee/>}/>
      </Routes>
    </BrowserRouter>);


}