import React from 'react'
import { connect } from 'react-redux'

const Pagination = ({ pagination: { activeIndex, paginationCount } }) => {
  // const [paginationCount] = useState(6)

  const paginationItems = []
  let index = 0

  while (index < paginationCount) {
    index++
    paginationItems.push(index)
  }

  return (
    <div className='pagination'>
      <span className='pagination__left'>
        <i class='pagination__left--icon fa fa-long-arrow-left' />
        PREV
      </span>

      {paginationItems.map(index => (
        <span className='pagination--items'>{index}</span>
      ))}

      <span className='pagination__right'>
        NEXT
        <i class='pagination__right--icon fa fa-long-arrow-right' />
      </span>
    </div>
  )
}

const mapStateToProps = ({ posts }) => ({
  pagination: posts.pagination
})

export default connect(mapStateToProps)(Pagination)
