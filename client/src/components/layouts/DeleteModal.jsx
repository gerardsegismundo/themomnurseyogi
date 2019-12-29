import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { CloseIcon } from './SvgIcons'
import { useOutsideAndEscapeClick, useConfirmOnEnter } from '../../helpers/func'
import { closeDeleteModal } from '../../redux/ui/ui.actions'
import { deleteComment } from '../../redux/post/post.actions'

const DeleteModal = ({
  deleteModalIsOpen,
  closeDeleteModal,
  params,
  deleteComment
}) => {
  const handleDelete = () => {
    closeDeleteModal()
    deleteComment(params)
  }

  const deleteModalRef = useRef()

  // Close deleteModal on outsideClick & esc
  useOutsideAndEscapeClick(deleteModalRef, deleteModalIsOpen, closeDeleteModal)

  // Confirm deleteModal on enter
  useConfirmOnEnter(deleteModalIsOpen, handleDelete)

  return (
    <div
      className={`delete-modal_overlay${deleteModalIsOpen ? ' is-open' : ''}`}
    >
      <div className={`delete-modal${deleteModalIsOpen ? ' is-open' : ''}`}>
        <div ref={deleteModalRef}>
          <div className='delete-modal__header'>
            <p className='delete-modal__header--title'>Delete </p>
            <CloseIcon onClick={closeDeleteModal} />
          </div>
          <div className='delete-modal__content'>
            <p>Are you sure you want to delete this comment?</p>
            <button onClick={closeDeleteModal}>Cancel</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ ui: { deleteModalIsOpen, params } }) => ({
  params,
  deleteModalIsOpen
})

export default connect(mapStateToProps, { closeDeleteModal, deleteComment })(
  DeleteModal
)
