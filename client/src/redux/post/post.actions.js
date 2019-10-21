import axios from 'axios'
import _ from 'lodash'

import {
  GET_RECENT_POSTS,
  GET_POST,
  SEARCH_POST,
  GET_RANDOM_POSTS,
  CLEAR_SEARCH
} from './post.types'

const Posts = (() => {
  let postsCache = {}

  const getPostsCache = async () => {
    if (_.isEmpty(postsCache)) {
      const res = await axios.get('api/posts')
      postsCache = res.data
    }

    return postsCache
  }

  const random = () => async dispatch => {
    const posts = await getPostsCache()
    const threeRandomPosts = [...posts]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)

    dispatch({
      type: GET_RANDOM_POSTS,
      payload: threeRandomPosts
    })
  }

  const recent = () => async dispatch => {
    const posts = await getPostsCache()
    const threeRecentPosts = [...posts]
      .sort((a, b) => a.date - b.date)
      .slice(0, 3)
      .reverse()

    dispatch({
      type: GET_RECENT_POSTS,
      payload: threeRecentPosts
    })
  }

  const findById = id => async dispatch => {
    const posts = await getPostsCache()
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

    const posts = await getPostsCache()

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
    search
  }
})()

export const getRandomPosts = Posts.random
export const getPost = Posts.findById
export const getRecentPosts = Posts.recent
export const searchPost = Posts.search

export const clearSearch = () => async dispatch => {
  dispatch({
    type: CLEAR_SEARCH
  })
}

export const submitReply = payload => async dispatch => {
  const res = await axios.post('/api/posts/comment', payload)

  console.log(res)
}
