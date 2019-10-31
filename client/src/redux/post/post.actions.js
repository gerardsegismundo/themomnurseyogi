import axios from 'axios'
import _ from 'lodash'
import { getThreeRandomPosts, getThreeRecentPosts } from '../../helpers/func'

import {
  GET_RECENT_POSTS,
  GET_POST,
  SEARCH_POST,
  GET_RANDOM_POSTS,
  CLEAR_SEARCH,
  GET_POSTS
} from './post.types'

const Posts = (() => {
  let postsCache = {}

  const getPostsCache = async dispatch => {
    if (_.isEmpty(postsCache)) {
      const res = await axios.get('/api/posts')
      postsCache = res.data

      dispatch({
        type: GET_POSTS,
        payload: postsCache
      })
    }

    return postsCache
  }

  const getPosts = () => async dispatch => await getPostsCache(dispatch)

  const random = () => async dispatch => {
    const posts = await getPostsCache(dispatch)
    const threeRandomPosts = getThreeRandomPosts(posts)

    dispatch({
      type: GET_RANDOM_POSTS,
      payload: threeRandomPosts
    })
  }

  const recent = () => async dispatch => {
    const posts = await getPostsCache(dispatch)
    const threeRecentPosts = getThreeRecentPosts(posts)

    dispatch({
      type: GET_RECENT_POSTS,
      payload: threeRecentPosts
    })
  }

  const findById = id => async dispatch => {
    const posts = await getPostsCache(dispatch)
    const post = posts.find(post => post._id === id)

    dispatch({
      type: GET_POST,
      payload: post
    })
  }

  const search = text => async dispatch => {
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
    random,
    findById,
    recent,
    search,
    getPosts
  }
})()

export const getPost = Posts.findById
export const getPosts = Posts.getPosts
export const getRandomPosts = Posts.random
export const getRecentPosts = Posts.recent
export const searchPost = Posts.search

export const clearSearch = () => async dispatch => {
  dispatch({
    type: CLEAR_SEARCH
  })
}
