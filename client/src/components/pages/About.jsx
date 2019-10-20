import React from 'react'
import aboutImage from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='container about'>
      <h2 className='about__title'>#Hi I'm Maydee Biascan</h2>

      <p className='about__hashtags'>
        <span>#mom</span>
        <span>#nurse</span>
        <span>#yogi</span>
      </p>

      <img
        src={aboutImage}
        alt='family'
        className='d-flex img-fluid  mx-auto'
      />

      <p className='standard-font text-center'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo saepe
        neque beatae eveniet. Doloremque nostrum et laboriosam alias, enim qui
        blanditiis esse non nam error. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eaque nostrum nisi, fuga incidunt aliquam eveniet.
        Veritatis itaque et totam. Facilis veniam itaque a exercitationem
        officia. Dolore veritatis at eum nemo.
      </p>
      <br />

      <p className='standard-font text-center'>
        Dolore suscipit, iure earum deleniti fuga quaerat excepturi eum,
        voluptate deserunt rerum mollitia, ipsam voluptates veritatis ipsum
        accusamus cupiditate! Inventore adipisci aperiam cum iusto quo itaque
        quia rerum natus! Lorem, ipsum.
      </p>
    </div>
  )
}

export default About
