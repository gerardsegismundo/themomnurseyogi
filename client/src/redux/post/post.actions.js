import axios from 'axios'
// eslint-disable-next-line
import _ from 'lodash'

import {
  GET_POST,
  GET_POSTS,
  SEARCH_POST,
  CLEAR_SEARCH,
  // eslint-disable-next-line
  FILTER_POSTS
} from './post.types'

const Posts = (() => {
  let postsCache = null

  const getPostsCache = async dispatch => {
    if (!postsCache) {
      const res = await axios.get('/api/posts')
      postsCache = res.data
      console.log('POSTS CACHE: ', postsCache.map(post => post.title))
      dispatch({
        type: GET_POSTS,
        payload: postsCache
      })
    }

    return postsCache
  }

  const getPosts = () => async dispatch => await getPostsCache(dispatch)

  const getPost = id => async dispatch => {
    const posts = await getPostsCache(dispatch)
    const post = posts.find(post => post._id === id)

    dispatch({
      type: GET_POST,
      payload: post
    })
  }

  const filterPosts = () => async dispatch => {
    console.log('FILTERPOSTS!!')
    if (!postsCache) await getPostsCache(dispatch)

    console.log(postsCache)
  }

  const searchPost = text => async dispatch => {
    if (text.length === 0 || text === undefined || typeof text !== 'string') {
      return dispatch({
        type: SEARCH_POST,
        payload: null
      })
    }

    const posts = await getPostsCache(dispatch)

    const postTitles = posts.map(post => {
      return {
        _id: post._id,
        title: post.title
      }
    })

    const result = postTitles.filter(post => {
      const regex = new RegExp(`${text}`, 'gi')

      return post.title.match(regex)
    })

    dispatch({
      type: SEARCH_POST,
      payload: result
    })
  }

  return {
    getPost,
    getPosts,
    filterPosts,
    searchPost
  }
})()

export const { getPost, getPosts, searchPost, filterPosts } = Posts

export const clearSearch = () => async dispatch => {
  dispatch({
    type: CLEAR_SEARCH
  })
}
