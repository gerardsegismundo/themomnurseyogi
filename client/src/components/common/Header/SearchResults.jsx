import React from 'react'
import { Link } from 'react-router-dom'
import { getPostLink } from '../../../helpers/func'

const SearchResults = ({ title, id }) => (
  <li>
    <Link to={getPostLink(title, id)}>{title}</Link>
  </li>
)

export default SearchResults
