import React from 'react';
import MainContainer from '../containers/Containers'
import Centering from '../containers/Centering-container'
import Fade from 'react-reveal/Fade'
import SimpleSliderTestimonial from '../slick-slider/SlickTestimonial'
import { Element } from 'react-scroll'
import './testimonial.scss'


function Testimonial() {

    return (
        <Element className='testimonial' name='testimonial'>
            <MainContainer>
                <Centering>
                    <Fade top>
                        <div className='testimonial-title'>
                            <p className='testimonial-title--strong'>
                                <strong> What Our Happy Customer Say</strong>
                            </p>
                            <p className='testimonial-title--info'>
                                lorem ipsum dolor sit amet
                            </p>
                            <img className='testimonial-title--img' src="/img/separator-black.png" alt='separator' />

                        </div>
                    </Fade>

                    <div className='slider'>
                        <SimpleSliderTestimonial />
                    </div>
                </Centering>

            </MainContainer>
        </Element>
    )
}


export default Testimonial