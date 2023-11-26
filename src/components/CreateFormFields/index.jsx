const CreateFormFields = ({handleChange,submitForm,formValues,formErrors,formData}) => {

  return (
    <form className='form-modal-container' onSubmit={submitForm}>
            {formData.map(eachField =>(
                <li key={eachField.id} className='each-field'>
                    <label htmlFor={eachField.label}>{eachField.label}</label>
                    <input 
                    type={eachField.type} 
                    id={eachField.id} 
                    placeholder={eachField.placeHolder} 
                    value={formValues[eachField.value]}
                    required={eachField.validation.required}
                    onChange={(e) =>handleChange(e,eachField)}/>
                    {formErrors[eachField.label] ? (<p className="error">{formErrors[eachField.label]} *</p>):(<p className="error"></p>)}
                </li>
            ))}
    </form>
  )
}

export default CreateFormFields

