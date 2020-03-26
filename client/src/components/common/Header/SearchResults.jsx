import React from 'react'
import { Link } from 'react-router-dom'
import { getPostLink } from '../../../utils/helpers'

const SearchResults = ({ title, id }) => (
  <li>
    <Link to={getPostLink(title, id)}>{title}</Link>
  </li>
)

export default SearchResults
