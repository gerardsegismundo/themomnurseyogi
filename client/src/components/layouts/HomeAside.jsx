import React, { useEffect } from 'react'

import Subscribe from '../common/Subscribe'
import OtherPost from '../common/HomeAside-OtherPost'
import Ads from '../common/Ads'

import { connect } from 'react-redux'
import { getRandomPostsA } from '../../_actions/postActions'

const HomeAside = ({ getRandomPostsA, randomPostsA }) => {
  useEffect(() => {
    getRandomPostsA()

    // eslint-disable-next-line
  }, [])

  return (
    <aside className='col-sm-12 col-lg-4 d-flex-row order-2 ml-xl-5'>
      <center>
        <Subscribe />
      </center>

      <div className='about'>
        <h2 className='about__name'>I'm Maydee Segismundo</h2>
        <p className='about__content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem
          sit fugit, quia, reprehenderit natus maiores officia qui consequuntur
          provident, nobis soluta quod. Dolor ea amet ipsum? Corrupti, sunt?
          Nemo!
        </p>
      </div>

      {randomPostsA &&
        randomPostsA.map(props => (
          <OtherPost
            key={props._id}
            classes='d-none d-lg-flex justify-content-center'
            {...props}
          />
        ))}

      <Ads />
    </aside>
  )
}

const mapStateToProps = state => ({
  randomPostsA: state.posts.posts
})

export default connect(
  mapStateToProps,
  { getRandomPostsA }
)(HomeAside)
