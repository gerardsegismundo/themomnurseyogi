import React from 'react'
import { connect } from 'react-redux'
import {
  changeIndex,
  prevIndex,
  nextIndex
} from '../../redux/post/post.actions'

const Pagination = ({
  pagination: { activeIndex, paginationCount },
  changeIndex,
  prevIndex,
  nextIndex
}) => {
  const paginationItems = []
  let index = 0

  while (index < paginationCount) {
    index++
    paginationItems.push(index)
  }

  const prevIndexHandler = () => {
    if (activeIndex === 1) return
    prevIndex()
  }

  const nextIndexHandler = () => {
    if (paginationCount === activeIndex) return
    nextIndex()
  }

  return (
    <div className='pagination'>
      <button
        className={`prev-btn${activeIndex === 1 ? ' hidden' : ''}`}
        onClick={prevIndexHandler}
      >
        <i className='pagination__left--icon fa fa-long-arrow-left' />
        PREV
      </button>

      {paginationItems.map(index => (
        <span
          id={`pagination${index}`}
          className={`pagination--items${
            index === activeIndex ? ' active' : ''
          }`}
          key={'page' + index}
          onClick={() => {
            changeIndex(index)
            window.location.href = `#pagination${index}`
          }}
        >
          {index}
        </span>
      ))}

      <button
        className={`next-btn${
          paginationCount === activeIndex ? ' hidden' : ''
        }`}
        onClick={nextIndexHandler}
      >
        NEXT
        <i className='pagination__right--icon fa fa-long-arrow-right' />
      </button>
    </div>
  )
}

const mapStateToProps = ({ posts }) => ({
  pagination: posts.pagination
})

export default connect(mapStateToProps, {
  changeIndex,
  prevIndex,
  nextIndex
})(Pagination)
