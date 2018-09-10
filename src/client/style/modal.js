const Modal = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'hsla(0, 0%, 70%, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  modalContainer: {
    borderRadius: '4px',
    backgroundColor: 'white',
    border: '1px solid gray',
    padding: '15px',
    width: '340px'
  },
  modalHeader: {
    borderBottom: '1px solid lightgray',
    padding: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  modalBody: {
    padding: '3px'
  },
  modalFooter: {
    borderTop: '1px solid lightgray',
    padding: '3px'
  }
}

export default Modal
