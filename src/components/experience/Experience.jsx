import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills Do We Have?</h5>
      <h2>Our Technical Skill Set</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          {/* <h3>Development Skills</h3> */}
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Web Front-End</h4>
              <small className='text-light'>HTML5,</small>
              {"\n"}
              <small className='text-light'>CSS3,</small>
              {"\n"}
              <small className='text-light'>JavaScript,</small>
              {"\n"}
              <small className='text-light'>JQuery,</small>
              {"\n"}
              <small className='text-light'>ReactJS,</small>
              {"\n"}
              <small className='text-light'>AngularJS and</small>
              {"\n"}
              <small className='text-light'>NodeJS</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Web Back-End</h4>
              <small className='text-light'>PHP,</small>
              {"\n"}
              <small className='text-light'>Python,</small>
              {"\n"}
              <small className='text-light'>Ruby On Rails,</small>
              {"\n"}
              <small className='text-light'>Java,</small>
              {"\n"}
              <small className='text-light'>NodeJS,</small>
              {"\n"}
              <small className='text-light'>VueJS and</small>
              {"\n"}
              <small className='text-light'>ViteJS</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Mobile Apps</h4>
              <small className='text-light'>iOS App Development,</small>
              {"\n"}
              <small className='text-light'>Android App Development,</small>
              {"\n"}
              <small className='text-light'>Native App Development</small>            
              {"\n"}
              <small className='text-light'>and Xamarin App Development</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Web Design</h4>
              <small className='text-light'>Custom Web Design Services,</small>
              {"\n"}
              <small className='text-light'>eCommerce Website Design,</small>
              {"\n"}
              <small className='text-light'>B2B Website/Portal Design,</small>
              {"\n"}
              <small className='text-light'>Drupal Web Design,</small>
              {"\n"}
              <small className='text-light'>Magento Web Design,</small>
              {"\n"}
              <small className='text-light'>and WordPress Web Design</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Quality Assurance (Manual)</h4>
              <small className='text-light'>eCommerce Testing,</small>
              {"\n"}
              <small className='text-light'>Functional Testing,</small>
              {"\n"}
              <small className='text-light'>Localization Testing,</small>
              {"\n"}
              <small className='text-light'>Mobile App Testing,</small>
              {"\n"}
              <small className='text-light'>Performance Testing,</small>
              {"\n"}
              <small className='text-light'>Security Testing,</small>
              {"\n"}
              <small className='text-light'>Usability Testing</small>
              {"\n"}
              <small className='text-light'>Upgrade Testing</small>
              {"\n"}
              <small className='text-light'> and API Testing</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Quality Assurance (Automation & Tools)</h4>
              <small className='text-light'>Selenium,</small>
              {"\n"}
              <small className='text-light'>Cucumber,</small>
              {"\n"}
              <small className='text-light'>Postman,</small>
              {"\n"}
              <small className='text-light'>JMETER,</small>
              {"\n"}
              <small className='text-light'>Appium,</small>
              {"\n"}
              <small className='text-light'>SoapUI,</small>
              {"\n"}
              <small className='text-light'>Protractor</small>
              {"\n"}
              <small className='text-light'> and Robotium</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Digital Marketing</h4>
              <small className='text-light'>SEO,</small>
              {"\n"}
              <small className='text-light'>SMO,</small>
              {"\n"}
              <small className='text-light'>ORM,</small>
              {"\n"}
              <small className='text-light'>Adwords(PPC),</small>
              {"\n"}
              <small className='text-light'>Facebook Marketing,</small>
              {"\n"}
              <small className='text-light'>LinkedIn Advertising,</small>
              {"\n"}
              <small className='text-light'>Youtube Marketing</small>
              {"\n"}
              <small className='text-light'> and Twitter Marketing.</small>
            </div>
            </article>

          </div>
        </div>
{/*        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Node JS</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>SQL</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>PHP</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>FireBase</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
      </div>
  
      <div className='experience__quality_assurance'>
          <h3>Quality Assurance</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Manual Testing</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Selenium</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Cucumber</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>TestNG</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Jenkins</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Swagger</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Postman</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Cloud Link Agent</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>SSO Identity Provider</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>JIRA</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Azure DevOps Board</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>LDAP</h4>
              <h6>Active Directory/Domino/Open Directory/Other LDAP</h6>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>SQL/MySQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Firebase</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill classname='experience__details-icon'/>
            <div>
              <h4>Log4j</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>

          </div>
        </div>
        */}
      </div>


    </section>
  )
}

export default Experience