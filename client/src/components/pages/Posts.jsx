import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../redux/post/post.actions'

import Pagination from '../layouts/Pagination'
import PaginationItem from '../common/PaginationItem'

const Posts = ({ getPosts, posts, pageItems }) => {
  useEffect(() => {
    if (!posts) getPosts()

    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className='container posts'>
        <h2 className='posts__page-title'># Posts</h2>

        {pageItems &&
          pageItems.map(props => <PaginationItem {...props} key={props._id} />)}
      </div>
      <Pagination />
    </>
  )
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts,
  pageItems: posts.pagination.pageItems
})

export default connect(mapStateToProps, { getPosts })(Posts)
