import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import Sor from './Sor';
import { ApiContext } from '../context/ApiContext';

function Tabla() {
    const{szakdogak}=useContext(ApiContext)
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Szakdoga címe</th>
        <th>Készítők</th>
        <th>Github link</th>
        <th>Szakdoga elérhetősége</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {szakdogak.map((elem, i)=>{
       return( <Sor elem={elem} key={i} ></Sor>)
    })}
    </tbody>
    
    
   
  </Table>
);
  
}

export default Tabla