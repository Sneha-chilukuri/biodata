
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateFormFields from '../CreateFormFields';

function ModalPopup({show,handleClose,modalHeading}) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateFormFields/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Details
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPopup;