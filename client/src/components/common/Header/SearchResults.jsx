import React from 'react'
import { Link } from 'react-router-dom'
import { getPostLink } from '../../../helpers/func'

const SearchResults = ({ title, id }) => {
  const postLink = getPostLink(title, id)
  return <li>{postLink && <Link to={postLink}>{title}</Link>}</li>
}

export default SearchResults
