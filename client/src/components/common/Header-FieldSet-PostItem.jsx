import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPostLink } from '../../helpers'

// NOTE:
// ROUTE PARAMS ONCHANGE => CHANGE PAGE
const PostItem = props => {
  const { title, id, classNames } = props
  const postLink = getPostLink(title, id)

  useEffect(() => {
    // console.log(props)
    // props.fetchResource()
    // console.log(props.match.params.id)
    // console.log(props.params.id)
    // eslint-disable-next-line
  }, [])

  return (
    <li className={classNames}>
      {postLink && (
        <Link to={postLink} className={classNames}>
          {title}
        </Link>
      )}
    </li>
  )
}

export default PostItem
