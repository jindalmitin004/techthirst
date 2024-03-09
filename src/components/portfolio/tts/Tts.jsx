import React from 'react'
import './tts.css'
import play from '../../../assets/Play.png'
import script from './Script'
// import IMG1 from '../../assets/Poster.PNG'

const Tts = () => {
  return (
    <section id='tts'>

      <div className='hero'>
      <h1>Text to Speech <span>Converter</span></h1>
            <textarea placeholder='Write anything here...'/>
        <div className='row'>
            <select></select>
            <button className='tts_listen'><img src={play}></img>Listen</button>
            <button className='tts_download'><img src={play}></img>Download MP3</button>
            </div>
      </div>
      <script src={script}></script>
    </section>
  )
};

export default Tts;