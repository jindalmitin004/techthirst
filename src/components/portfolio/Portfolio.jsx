import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Poster.PNG'
import IMG2 from '../../assets/dummy_data.jpg'
import { Link } from 'react-router-dom';
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import Ddg from '../portfolio/ddg/Ddg';

const Portfolio = () => {

  const openDummyInNewTab = () => {
    window.open('/ddg', '_blank');
  };

  return (
    <section id='portfolio'>
      <h5>Our Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

{/* Project 1*/}

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Learn Software Testing and Database</h3>
          <div className="portfolio__item-cta">
          {/* <a href="https://github.com" className='btn' target='_blank'>Github</a> */}
          <a href="https://www.youtube.com/@techthirst/playlists" className='btn btn-primary' target='_blank'>Let's Begin</a>
          </div>
        </article>



        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Dummy Data Generator</h3>
          <div className="portfolio__item-cta">
          {/* <a href="https://github.com" className='btn' target='_blank'>Github</a> */}

          <a href="" className='btn btn-primary' target='_blank' onClick={openDummyInNewTab}>Generate Data</a>
          {/* <button className='btn btn-primary' onClick={openDummyInNewTab}>Generate Data</button> */}
          </div>

        </article>

{/*

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title.</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title.</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>



        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title.</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title.</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        */}
      </div>
    </section>
  )
}

export default Portfolio