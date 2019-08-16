import React from 'react'

const HomeArticle = () => {
  return (
    <article className='col-sm-12 col-lg-8 order-3 order-lg-1'>
      <h3 className='recent-posts'> # Recent posts </h3>

      <div className='post mt-5 mb-5 p-1'>
        <div className='text-center'>
          <p className='post__date'>JANUARY 30, 2018</p>
          <h2 className='post__title'>Love</h2>
          <ul className='post__hash-tags d-flex justify-content-center px-5'>
            <li>#winter</li>
            <li>#love</li>
            <li>#snow</li>
            <li>#january</li>
          </ul>
        </div>
        <img
          className='post__img mb-5'
          src='https://image.ibb.co/hybJyU/Love.jpg'
          alt='fdasfasdfsafdasfs'
        />

        <p className='post__content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          velit. Eaque et quaerat aspernatur voluptatibus ad mollitia voluptates
          eius similique enim. Voluptates deleniti ut eum magnam non adipisci
          porro. Ab.
        </p>

        <div className='post__footer d-flex align-content-center align-self-center justify-content-end'>
          <button className='btn-lg btn-dark'>Read more</button>
          <h2 className='post__footer--comments'>2 comments</h2>
        </div>
      </div>
    </article>
  )
}

export default HomeArticle
