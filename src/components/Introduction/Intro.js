import React from 'react'
import bgimg from '../../assets/myprofile.jpeg'
import {Link} from 'react-scroll'
import './Intro.css'

const Intro=()=> {
  return (
    <div>
        <section id='introductionPart'>
            <div className='introleft'>
                <h4 className='hello'>Hello,</h4><br/>
                <h3 className='introText'>I'm <h3 className='introName'>Mahaboobkhan  <br/><h3 className='profession'>FrontEnd Developer</h3></h3></h3><br/>
               <div className='para'>
               <p className='subject'> I am skilled and passionate Frontend developer<br/> Recent Graduate, creating visually appealing<br/> and user-Friendly Web Applications</p>
                <Link><button className='hireBtn'>Hire me</button></Link>
               </div>
            </div>
                <img src={bgimg} alt='backgroundimg' className='bgimage' />
        </section>
    </div>
  )
}

export default Intro
