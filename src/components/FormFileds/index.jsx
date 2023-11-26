const FormFields = ({
  handleChange,
  handleAddDetailsBtn,
  values,
  formErrors,
  formData,
}) => {
  return (
    <>
      <form className="form-modal-container" onSubmit={handleAddDetailsBtn}>
        {formData.map((eachField) => (
          <li key={eachField.id} className="each-field">
            <label htmlFor={eachField.label}>{eachField.label}</label>
            <input
              type={eachField.text}
              id={eachField.id}
              name={eachField.name}
              placeholder={eachField.placeHolder}
              value={values[eachField.label]}
              onChange={(e) => handleChange(e, eachField)}
            />
            {formErrors[eachField.label] ? (
              <p className="error-message">{formErrors[eachField.label]}</p>
            ) : (
              <p className="error-message"></p>
            )}
          </li>
        ))}
      </form>
    </>
  );
};

export default FormFields;
