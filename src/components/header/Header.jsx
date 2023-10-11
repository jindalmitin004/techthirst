import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me01.png'
import ME1 from '../../assets/avatar01.jpg'
import ME2 from '../../assets/avatar11.png'
import ME3 from '../../assets/avatar06.jpg'
import ME4 from '../../assets/avatar05.jpg'
import lamp from '../../assets/lamp.png'
import light from '../../assets/light.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
{/*        <h5>Hello! We are</h5>*/}
        <h1>TechThirst Pvt. Ltd.</h1>
        <h5 className='text-light'>We are Passionate about Tech!!</h5>
{/*        <CTA />*/}
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='me'/>
          <h5>Michael Karen</h5>
          <h6>CEO, Co-Founder</h6>
            <div className='lamp-container'>
              <img src={lamp} class='lamp'/>
              <img src={light} class='light'/>
            </div>
        </div>
        
        <div className='me1'>
          <img src={ME1} alt='me'/>
          <h5>Albert Sanchez</h5>
          <h6>CEO, Founder</h6>
          <div className='lamp-container'>
              <img src={lamp} class='lamp'/>
              <img src={light} class='light'/>
            </div>
        </div>
        
        <div className='me2'>
          <img src={ME2} alt='me'/>
          <h5>Sophia Truder</h5>
          <h6>CTO, Advisor</h6>
          <div className='lamp-container'>
              <img src={lamp} class='lamp'/>
              <img src={light} class='light'/>
            </div>
        </div>

        <div className='me3'>
          <img src={ME3} alt='me'/>
          <h5>Katherine Wong</h5>
          <h6>Project Manager</h6>
          <div className='lamp-container'>
              <img src={lamp} class='lamp'/>
              <img src={light} class='light'/>
            </div>
        </div>

        <div className='me4'>
          <img src={ME4} alt='me'/>
          <h5>Sophie Li</h5>
          <h6>Technical Architect</h6>
          <div className='lamp-container'>
              <img src={lamp} class='lamp'/>
              <img src={light} class='light'/>
            </div>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header