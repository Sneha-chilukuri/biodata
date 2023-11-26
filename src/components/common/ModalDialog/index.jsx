import { Modal, Button } from "react-bootstrap";

const ModalDialog = ({
  modalHeading,
  modalBody,
  isOpen,
  setIsOpen,
  modalSize,
  primaryButton,
  secondaryButton,
  handlePrimaryBtn,
  handleSecondary,
}) => {
  return (
    <Modal
      show={isOpen}
      onHide={handleSecondary}
      size={modalSize}
      className="modal-popup"
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalHeading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer>
        {secondaryButton && (
          <Button variant="secondary" onClick={handleSecondary}>
            {secondaryButton}
          </Button>
        )}
        {primaryButton && (
          <Button variant="primary" onClick={handlePrimaryBtn}>
            {primaryButton}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
export default ModalDialog;
