import React from 'react'
import './about.css'
import ME from '../../assets/techthirst01.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Us</h2>
      
      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__card__icon'/>
              <h5>Experience</h5>
              <small>6+ years in industry</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__card__icon'/>
              <h5>Clients</h5>
              <small>8 clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__card__icon'/>
              <h5>Projects</h5>
              <small>5 completed projects and 3 ongoing</small>
            </article>
          </div>

          <p>
              By professionals, for professionals, We are <strong><em>experienced enthusiasts</em></strong> and by passion we are <strong><em>Web App Developer</em></strong>, <strong><em>Android App Developer</em></strong>, <strong><em>iOS App Developer</em></strong>, <strong><em>RoR Developer</em></strong>, <strong><em>Python Developer</em></strong>, <strong><em>Quality Assurance Tester (Automation)</em></strong> and <strong><em>Full Stack Developer</em></strong>. Having more than 7+ years of experience in <strong><em>Project Management</em></strong> and<strong><em> Project Delivery</em></strong>. Having experience on various domains like:<strong><em> Management portals, School Educational systems, Entertainment & IOT platforms, Social media communication, HealthCare portals, Logistics Delivery apps, Digital Marketing platform and E-commerce</em></strong>. If we'll be able to help in any manner in these areas, ring a bell!
          </p>
        </div>
      </div>
      <div className="about__item-cta">
          <a href='#contact' className='btn btn_primary'>Let's Talk</a>
      </div>

    </section>
  )
}

export default About