import React from 'react'

const Comment = props => {
  console.log(props)
  return <div>Comment</div>
}

export default Comment

// const { _id, user, name, avatar, text, date } = c

// return (
//   <li className='comment d-flex' key={_id}>
//     <img
//       src={avatar}
//       alt='user'
//       className='comment__author-avatar'
//     />

//     <div className='comment__right-col'>
//       {editedComment._id !== _id && (
//         <>
//           <h4 className='comment__label'>
//             {name} &nbsp;&nbsp;|&nbsp;&nbsp; {formatDate(date)}
//           </h4>

//           <p className='comment__msg'>{text}</p>
//         </>
//       )}

//       {currentUser && user === currentUser.id && (
//         <div className='comment__crud'>
//           {!isEditingComment || editedComment._id !== _id ? (
//             <>
//               <span
//                 className='hidden'
//                 onClick={() => handleEditComment({ text, _id })}
//               >
//                 edit
//               </span>
//               <span
//                 className='hidden'
//                 onClick={() => handleDeleteComment(_id)}
//               >
//                 delete
//               </span>
//             </>
//           ) : (
//             <>
//               <textarea
//                 onChange={e => {
//                   setEditedComment({
//                     _id,
//                     text: e.target.value
//                   })
//                 }}
//                 ref={editedCommentTextarea}
//                 id='edited-comment'
//                 name='edited-comment'
//                 value={editedComment.text}
//                 className='form-control'
//                 placeholder='Write a comment...'
//                 required
//               ></textarea>

//               <span onClick={exitEditComment}>cancel</span>
//               <span onClick={saveEditComment}>save</span>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   </li>
// )
