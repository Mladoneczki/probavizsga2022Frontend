import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'

function Sor(props) {
    const{deleteData, setSzakdogak }=useContext(ApiContext)
  return (
   
    <tr>
      <td>{props.elem.szakdoga_nev}</td>
      <td>{props.elem.tagokneve}</td>
      <td><a href="">{props.elem.githublink}</a></td>
      <td><a href="">{props.elem.oldallink}</a></td>
      <td><button onClick={()=>{deleteData(`szakdogas/${props.elem.id}`,setSzakdogak)}}>x</button></td>
    </tr>
   
  )
}

export default Sor