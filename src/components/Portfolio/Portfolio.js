import React from 'react'
import './portfolio.css'
import portfolioImg1 from '../../assets/portfolio-img.jpg'
import portfolioImg2 from '../../assets/portfolio-2-img.jpg'
import portfolioImg3 from '../../assets/portfolio-3-img.jpg'
import portfolioImg4 from '../../assets/portfolio-4-img.jpg'
import portfolioImg5 from '../../assets/portfolio-5-img.avif'
import portfolioImg6 from '../../assets/portfolio-6-img.jpg'


const Portfolio=()=> {
  return (
    <section id='portfolio-section'>
        <h1 className='heading1'>My portfolio</h1>
        <p className='para1'>A Software graduate who is seeking to find the opportunity to work in a fun and challenging working <br/>
        environment that will encourage me to improve and learn new and necessary skills.</p>
      <div className='portfolioImg' >
          <div className='worksimage'>
            <img src={portfolioImg1} alt='portfolioimg1' className='images'></img>
          </div>
          <div className='worksimage'>
          <img src={portfolioImg2} alt='portfolioimg2' className='images'></img>
          </div>
          <div className='worksimage'>
          <img src={portfolioImg3} alt='portfolioimg3' className='images'></img>
          </div>
          <div className='worksimage'>
          <img src={portfolioImg4} alt='portfolioimg4' className='images'></img>
          </div>
          <div className='worksimage'>
          <img src={portfolioImg5} alt='portfolioimg5' className='images'></img>
          </div>
          <div className='worksimage'>
          <img src={portfolioImg6}alt='portfolioimg6' className='images'></img>
          </div>
      </div>
      <button className='worksBtn'>See more</button>
    </section>
  )
}

export default Portfolio
