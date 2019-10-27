import React, { useEffect } from 'react'
import adsImage from '../../assets/ads.jpg'
import Subscribe from '../common/Subscribe'
import OtherPost from '../common/OtherPosts'
import { connect } from 'react-redux'
import { getRandomPosts } from '../../redux/post/post.actions'

const Aside = ({
  getRandomPosts,
  randomPosts,
  subscribeSectionClass,
  showAsideItems = true
}) => {
  useEffect(() => {
    getRandomPosts()

    // eslint-disable-next-line
  }, [])

  const AsideItems = () => (
    <>
      {randomPosts &&
        randomPosts.map(props => (
          <OtherPost
            key={props._id}
            classes='d-none d-lg-flex justify-content-center'
            {...props}
          />
        ))}

      <img
        className='ads mx-auto d-none d-lg-flex'
        src={adsImage}
        alt='Advertisement'
      />
    </>
  )

  return (
    <aside className='col-sm-12 col-lg-4 d-flex-row order-2 ml-xl-5'>
      <center>
        <Subscribe classNames={subscribeSectionClass} />
      </center>

      <div className='about d-none d-lg-block'>
        <h2 className='about__name'>I'm Maydee Segismundo</h2>
        <p className='about__content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem
          sit fugit, quia, reprehenderit natus maiores officia qui consequuntur
          provident, nobis soluta quod. Dolor ea amet ipsum? Corrupti, sunt?
          Nemo!
        </p>
      </div>
      {showAsideItems && <AsideItems />}
    </aside>
  )
}

const mapStateToProps = state => ({
  randomPosts: state.posts.randomPosts
})

export default connect(
  mapStateToProps,
  { getRandomPosts }
)(Aside)
