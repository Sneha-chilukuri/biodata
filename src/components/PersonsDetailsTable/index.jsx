import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../App'


const PersonsDetailsTable = () => {

  const bioData = useContext(DataContext)
  return (
  <div className='table-container'>
   <table>
   <thead>
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
  </thead>
  <tbody>
    {bioData.map(eachData =>(
      <tr key={eachData.name}>
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
     </tbody>
   </table>
   </div>
  )
}

export default PersonsDetailsTable