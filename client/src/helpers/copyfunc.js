import axios from 'axios'
import _ from 'lodash'

import {
  GET_RECENT_POSTS,
  GET_POST,
  SEARCH_POST,
  GET_RANDOM_POSTS,
  CLEAR_SEARCH,
  GET_POSTS,
  GET_OTHER_RANDOM_POSTS
} from './post.types'

const Posts = (() => {
  let postsCache = null
  let recentPostsCache = null
  let randomPostsCache = null

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

  const getRecentPostsCache = async dispatch => {
    if (!recentPostsCache) {
      const posts = await getPostsCache(dispatch)
      recentPostsCache = [...posts].slice(0, 3)

      dispatch({
        type: GET_RECENT_POSTS,
        payload: recentPostsCache
      })
    }

    return recentPostsCache
  }

  const getRandomPostsCache = async dispatch => {
    if (postsCache && recentPostsCache) {
      console.log('RANDOM!')
    }
    if (!randomPostsCache) {
      const posts = postsCache || (await getPostsCache(dispatch))
      const excludedPosts = recentPostsCache

      const notIncludedInRecentPosts = _.difference(posts, excludedPosts)

      randomPostsCache = notIncludedInRecentPosts
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)

      dispatch({
        type: GET_RANDOM_POSTS,
        payload: randomPostsCache
      })

      console.log(
        'RANDOM POSTS CACHE: ',
        randomPostsCache.map(post => post.title)
      )
    }

    return randomPostsCache
    // }
  }

  const getOtherRandomPosts = () => async dispatch => {
    // if (postsCache) {
    //   console.log('YEAH!!')
    // }
    // const posts = postsCache || (await getPostsCache(dispatch))
    // const recentPosts =
    //   recentPostsCache || (await getRecentPostsCache(dispatch))
    // const randomPosts =
    //   randomPostsCache || (await getRandomPostsCache(dispatch))
    // const excludedPosts = [...recentPosts, ...randomPosts]

    // const otherRandomPosts = _.difference(posts, [
    //   ...recentPosts,
    //   ...randomPosts
    // ])
    //   .sort(() => 0.5 - Math.random())
    //   .slice(0, 4)

    // console.log('POSTS: ', posts.map(post => post.title))
    // console.log('RECENT POSTS: ', recentPosts.map(post => post.title))
    // console.log('RANDOM POSTS: ', randomPosts.map(post => post.title))
    // console.log('EXCLUDED POSTS: ', excludedPosts.map(post => post.title))
    // console.log('OTHERS: ', otherRandomPosts.map(post => post.title))

    dispatch({
      type: GET_OTHER_RANDOM_POSTS,
      payload: /* otherRandomPosts */ []
    })
  }

  const getRecentPosts = () => async dispatch =>
    await getRecentPostsCache(dispatch)
  const getRandomPosts = () => async dispatch =>
    await getRandomPostsCache(dispatch)

  const getPost = id => async dispatch => {
    const posts = await getPostsCache(dispatch)
    const post = posts.find(post => post._id === id)

    dispatch({
      type: GET_POST,
      payload: post
    })
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
    getRandomPosts,
    getPost,
    getRecentPosts,
    searchPost,
    getPosts,
    getOtherRandomPosts
  }
})()

export const {
  getRandomPosts,
  getPost,
  getRecentPosts,
  searchPost,
  getPosts,
  getOtherRandomPosts
} = Posts

export const clearSearch = () => async dispatch => {
  dispatch({
    type: CLEAR_SEARCH
  })
}
