import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalPopup({show,handleClose,modalHeading,modalBody,cancelBtn,addDetailsBtn,onSubmit}) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {modalBody}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
          {cancelBtn}
          </Button>
          <Button variant="primary" onClick = {onSubmit}>
           { addDetailsBtn}
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPopup;