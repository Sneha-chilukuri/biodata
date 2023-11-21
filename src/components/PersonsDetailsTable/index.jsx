import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../App'
// import Example from '../Common/Example';


const PersonsDetailsTable = () => {

  const bioData = useContext(DataContext)
  // console.log(bioData)
  return (
  <div className='table-container'>
   <table>
    <tr>
      <th>Actions</th>
      <th>Full Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>E-Mail</th>
      <th>Phone Number</th>
      <th>Degree</th>
      <th>Skills</th>
      <th>Languages</th>
    </tr>
    {bioData.map(eachData =>(
      <tr>
        <td>H E D</td>
        <td>{eachData.name}</td>
        <td>{eachData.age}</td>
        <td>{eachData.gender}</td>
        <td>{eachData.contact.email}</td>
        <td>{eachData.contact.phone}</td>
        <td>{eachData.education[0].degree}</td>
        <td>{eachData.skills[0]}</td>
        <td>{eachData.languages[0].name}</td>
      </tr>
    ))}
   </table>
   </div>
  )
}

export default PersonsDetailsTable