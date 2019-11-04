import axios from 'axios'
import _ from 'lodash'

import {
  GET_POST,
  GET_POSTS,
  SEARCH_POST,
  CLEAR_SEARCH,
  FILTER_POSTS
} from './post.types'

const Posts = (() => {
  let postsCache = null

  const getPostsCache = async dispatch => {
    if (!postsCache) {
      const res = await axios.get('/api/posts')
      postsCache = res.data

      dispatch({
        type: GET_POSTS,
        payload: postsCache
      })
    }

    return postsCache
  }

  const getPosts = () => async dispatch => {
    return postsCache || (await getPostsCache(dispatch))
  }

  const getPost = id => async dispatch => {
    const posts = postsCache || (await getPostsCache(dispatch))
    const post = posts.find(post => post._id === id)

    dispatch({
      type: GET_POST,
      payload: post
    })
  }

  const filterPosts = () => async dispatch => {
    if (!postsCache) await getPostsCache(dispatch)

    // Get 3 recent posts from posts cache.
    const recentPosts = postsCache.slice(0, 3)

    // Get 4 randomized posts from difference of recent posts and posts.
    const randomPosts = (() => {
      const notRecentPosts = _.difference([...postsCache], [...recentPosts])
      return _.sampleSize(notRecentPosts, 4)
    })()

    // Get 4 another randomized posts that is different from recent & random posts
    const otherRandomPosts = (() => {
      const notRecentAndRandom = _.difference(postsCache, [
        ...recentPosts,
        randomPosts
      ])
      return _.sampleSize(notRecentAndRandom, 4)
    })()

    dispatch({
      type: FILTER_POSTS,
      payload: { recentPosts, randomPosts, otherRandomPosts }
    })
  }

  const searchPost = text => async dispatch => {
    if (_.isEmpty(text) || typeof text !== 'string') {
      return dispatch({
        type: SEARCH_POST,
        payload: null
      })
    }

    const posts = postsCache || (await getPostsCache(dispatch))

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
