import React from 'react'
import adsImage from '../../assets/ads.jpg'
import Subscribe from '../common/Subscribe'
import OtherPost from '../common/OtherPosts'
import { connect } from 'react-redux'

const Aside = ({
  otherRandomPosts,
  subscribeSectionClass,
  showAsideItems = true
}) => {
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
      {showAsideItems && (
        <>
          {otherRandomPosts &&
            otherRandomPosts.map(props => (
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
      )}
    </aside>
  )
}

const mapStateToProps = ({ posts }) => ({
  otherRandomPosts: posts.otherRandomPosts
})

export default connect(
  mapStateToProps,
  {}
)(Aside)
