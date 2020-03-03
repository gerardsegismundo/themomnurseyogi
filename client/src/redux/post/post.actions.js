import axios from 'axios'
import _ from 'lodash'

import {
  GET_POST,
  GET_POSTS,
  SEARCH_POST,
  CLEAR_SEARCH,
  FILTER_POSTS,
  CHANGE_OTHER_POSTS,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  POST_ERROR,
  CHANGE_INDEX,
  PREV_INDEX,
  NEXT_INDEX
} from './post.types'

// import { formatDate } from '../../helpers/func'

const formatDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

const Posts = (() => {
  let postsCache = null

  const getPostsCache = async dispatch => {
    if (!postsCache) {
      const res = await axios.get('/api/posts')

      // formats date property of each post
      postsCache = res.data.map(data => ({
        ...data,
        date: formatDate(data.date)
      }))

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

  const getPost = (postId, userId) => async dispatch => {
    const posts = postsCache || (await getPostsCache(dispatch))

    let post = posts.find(post => post._id === postId)

    const isLiked = (() => {
      // gets users who liked the post
      const likeIds = post.likes.map(like => like.user)

      return likeIds.includes(userId) ? true : false
    })()

    // add likeCount and isLiked to post items
    post = {
      ...post,
      likeCount: post.likes.length,
      isLiked
    }

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
      const notRecentPosts = _.difference(postsCache, recentPosts)
      return _.sampleSize(notRecentPosts, 4)
    })()

    // Get 4 another randomized posts that is different from recent & random posts
    const otherRandomPosts = (() => {
      const notRecentAndRandom = _.difference(postsCache, [
        ...recentPosts,
        ...randomPosts
      ])
      return _.sampleSize(notRecentAndRandom, 3)
    })()

    dispatch({
      type: FILTER_POSTS,
      payload: { recentPosts, randomPosts, otherRandomPosts }
    })
  }

  const changeOtherPosts = id => async dispatch => {
    if (!postsCache) await getPostsCache(dispatch)

    const others = postsCache.filter(({ _id }) => _id !== id)

    const newOtherPosts = _.sampleSize(others, 4)

    dispatch({
      type: CHANGE_OTHER_POSTS,
      payload: newOtherPosts
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
    searchPost,
    changeOtherPosts
  }
})()

export const {
  getPost,
  getPosts,
  searchPost,
  filterPosts,
  changeOtherPosts
} = Posts

export const clearSearch = () => async dispatch => {
  dispatch({
    type: CLEAR_SEARCH
  })
}

export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post(
      `/api/posts/comment/${postId}`,
      formData,
      config
    )

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    })
  } catch (err) {
    const { error } = err.response.data

    dispatch({
      type: POST_ERROR,
      payload: error
    })
  }
}

export const deleteComment = params => async dispatch => {
  const { post_id, comment_id, user_id } = params

  try {
    await axios.delete(`/api/posts/comment/${post_id}/${comment_id}/${user_id}`)

    dispatch({
      type: REMOVE_COMMENT,
      payload: comment_id
    })
  } catch (err) {
    console.error(err)
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const updateComment = (text, params) => async dispatch => {
  const { post_id, comment_id, user_id } = params
  try {
    const res = await axios.put(
      `/api/posts/comment/${post_id}/${comment_id}/${user_id}`,
      { text }
    )

    dispatch({
      type: UPDATE_COMMENT,
      payload: res.data
    })
  } catch (err) {
    console.error(err)
  }
}

// Like post
export const likePost = (id, user_id) => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/like/${id}/${user_id}`)

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, user_id, likes: res.data, isLiked: true }
    })
  } catch (err) {
    const { error } = err.response.data

    console.error(error)
    dispatch({
      type: POST_ERROR,
      payload: error
    })
  }
}

// Unlike post
export const unlikePost = (id, user_id) => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}/${user_id}`)

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, user_id, likes: res.data, isLiked: false }
    })
  } catch (err) {
    const { error } = err.response.data

    console.log(error)
    dispatch({
      type: POST_ERROR,
      payload: error
    })
  }
}

// Pagination

// Change pagination index

export const changeIndex = index => dispatch => {
  console.log('action changeIndex')
  dispatch({
    type: CHANGE_INDEX,
    payload: index
  })
}

export const nextIndex = () => dispatch => {
  dispatch({
    type: NEXT_INDEX
  })
}

export const prevIndex = () => dispatch => {
  dispatch({
    type: PREV_INDEX
  })
}
