import React from 'react'
import './ddg.css'
// import IMG1 from '../../assets/Poster.PNG'

const Ddg = () => {
  return (
    <section id='ddg'>
      <h2>Generate Dummy Data</h2>
      <h5>Please select any format:</h5>

      <div className='container dummy__container'>
        <article className='dummy__item'>
          <div className="dummy__item-cta">
          {/* <a href="https://github.com" className='btn' target='_blank'>Github</a> */}
          <a href="/" className='btn btn-primary' target='_blank'>SQL</a>
          </div>
          <div className="dummy__item-cta">
          {/* <a href="https://github.com" className='btn' target='_blank'>Github</a> */}
          <a href="/" className='btn btn-primary' target='_blank'>Excel</a>
          </div>

          <div className="dummy__item-cta">
          {/* <a href="https://github.com" className='btn' target='_blank'>Github</a> */}
          <a href="/" className='btn btn-primary' target='_blank'>JSON</a>
          </div>
          <div className="dummy__item-cta">
          {/* <a href="https://github.com" className='btn' target='_blank'>Github</a> */}
          <a href="/" className='btn btn-primary' target='_blank'>XML</a>
          </div>
        </article>

      </div>
    </section>
  )
};

export default Ddg;