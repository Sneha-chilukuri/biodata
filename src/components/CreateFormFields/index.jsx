import React from 'react'

const formData = [
    {
        "id":1,
        "label":"First Name",
        "placeHolder":"Enter Your First Name"
    },
    {
        "id":2,
        "label":"Last Name",
        "placeHolder":"Enter Your Last Name"
    },
    {
        "id":3,
        "label":"Mobile No",
        "placeHolder":"Enter Your Mobile No"
    },
    {
        "id":4,
        "label":"Email ID",
        "placeHolder":"Enter Your Email ID"
    },
    {
        "id":5,
        "label":"ID",
        "placeHolder":"Enter ID"
    },
    {
        "id":6,
        "label":"Company",
        "placeHolder":"Enter Your Company"
    },
    {
        "id":7,
        "label":"Password",
        "placeHolder":"Enter Your Password"
    },
    {
        "id":8,
        "label":"Type Of User",
        "placeHolder":"Select User Type"
    }
]

const CreateFormFields = () => {
  return (
    <form className='form-modal-container'>
            {formData.map(eachField =>(
                <li key={eachField.id} className='each-field'>
                    <label htmlFor={eachField.label}>{eachField.label}</label>
                    <input type="text" id={eachField.label} placeholder={eachField.placeHolder}/>
                </li>
            ))}
    </form>
  )
}

export default CreateFormFields