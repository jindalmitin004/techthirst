import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What we offer?</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Mobile app UI/UX <br/> design services.</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Custom Website Design</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Corporate Branding & <br/> Graphics Design</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Product Design</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Tools: Adobe XD CC, <br/> Adobe Photoshop & inVision</p>
            </li>
          </ul>

        </article>
 
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Website & Web<br/>App Development</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Responsive Design</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>eCommerce Development</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Wordpress Development</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Social Media Platform</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Marketing Portal</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>CRM Dashboard</p>
            </li>
          </ul>

        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Quality Assurance Specialist</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Manual Testing - Functional, <br/>Smoke, Sanity, Regression, <br/> Upgrade, End-to-End </p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Automation Frameworks<br/>& Scripts with<br/>documentation</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>API Testing</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Database Testing</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>User Acceptance Testing</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Management over JIRA & Git</p>
            </li>
          </ul>

        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Mobile App Development</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Interactive Designing<br/>& Developement</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Native Android & iOS apps</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Cross-Platorm Apps in<br/>Flutter & Xamarin</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Application Monitoring</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Database & data storages</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>API Development &<br/>integration</p>
            </li>
          </ul>

        </article>

      </div>
    </section>
  )
}

export default Services