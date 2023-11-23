import React  from 'react'
import './skills.css'
import webApplicationImg from '../../assets/web-application-img.jpg'
import ResponsiveDesign from '../../assets/responsive-img.webp'
import WebDesign from '../../assets/web-design.avif'


const Skills=()=>{
    return(
        <section id='skills-section'>
            <div className='about-section'>
                <h2 className='heading'>What I do</h2>
                <p className='about-me'>I am a skilled and passionate web designer with experience in creating visually 
                    appealing and user-friendly<br/>websites. I have a strong understanding of developing 
                    and a keen eye for detail. I am proficient in HTML,CSS,<br/>Javascript,React JS,
                    MySQL data management as well as Bootstrap.  
                </p>
            </div>
            <div className='skillsBox'>
            <div className='box'>
                <img src={webApplicationImg} className='web-img' alt='skillsBarImg'/>
                <div className='skillBarText'>
                    <h2 className='headin'>web applications</h2>
                    <p className='text'>you can write text related to mobile app development.</p>
                </div>
            </div>
            <div className='box'>
                <img src={ResponsiveDesign} className='web-img' alt='skillsBarImg'/>
                <div className='skillBarText'>
                    <h2 className='heading2'>Responsive Web Pages</h2>
                    <p className='text'>you can write text related to mobile app development.</p>
                </div>
            </div>
            <div className='box'>
                <img src={WebDesign} className='web-img' alt='skillsBarImg'/>
                <div className='skillBarText'>
                    <h2 className='heading3'>Web Design</h2>
                    <p className='text'>you can write text related to mobile app development.</p>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Skills