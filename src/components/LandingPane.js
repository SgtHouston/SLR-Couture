import React from 'react'
import '../componentcss/LandingPane.css'
import backgroundVid from '../video/Mikayla-Edited.mov'
import CustomerWorn1 from '../images/IMG_6976.png'
import CustomerWorn2 from '../images/IMG_6993.png'
import CustomerWorn3 from '../images/IMG_6994.png'
import CustomerWorn4 from '../images/Twins.jpg'
import CustomerWorn5 from '../images/IMG_6979.png'
import CustomerWorn6 from '../images/SilverProm2.JPG'
import CustomerWorn7 from '../images/IMG_2463.jpg'
import CustomerWorn8 from '../images/GoldFull.JPG'
import CustomerWorn9 from '../images/Couple1.JPG'
import CustomerWorn10 from '../images/Couple2.JPG'
import CustomerWorn11 from '../images/Couple3.JPG'
import CustomerWorn12 from '../images/PinkFlower.JPG'




function LandingPane() {


    return (
        <div className="landingpane">
            <video className='videoTag' autoPlay loop muted>
                <source className='video' src={backgroundVid} type='video/mp4' />
            </video>
            <div className="text-center">
                
                <span className="text-center landing_text"> Exquisite Bespoke Designs </span>

            </div>
            <div className="dressdisplay">
                <div className="landing__img">
                    <img className='img-fluid' src={CustomerWorn1} alt="Customer Worn Dress 1"></img>
                </div>
                <div className="landing__img">
                    <img className='img-fluid' src={CustomerWorn2} alt="Customer Worn Dress 2"></img>
                </div>
                <div className="landing__img">
                    <img className='img-fluid' src={CustomerWorn3} alt="Customer Worn Dress 3"></img>
                </div>
            </div>
            <div className="text-center">
                
                <span className="text-center landing_text"> Look And Feel Your Best With SLR Couture </span>

            </div>
            <img className='img-fluid large-img' src={CustomerWorn4} alt="Customer Worn Dress 4" ></img>
            <div className="text-center">
                
                <span className="text-center landing_text"> A Dress For The Occasion Of A Lifetime </span>
                
            </div>
            <div className="dressdisplay">
                <div className="landing__img">
                    <img className="img-fluid" src={CustomerWorn5} alt="Customer Worn Dress 5" ></img>
                </div>
                <div className="landing__img">
                    <img className='img-fluid' src={CustomerWorn6} alt="Customer Worn Dress 6" ></img>
                </div>
                <div className="landing__img">
                    <img className='img-fluid' src={CustomerWorn7} alt="Customer Worn Dress 7" ></img>
                </div>
            </div>
            <div className="text-center">
                
                <span className="text-center landing_text"> Custom Formalwear Fitted Just For You </span>

            </div>
            <img className='img-fluid large-img' src={CustomerWorn8} alt="Customer Worn Dress 8" ></img>
            <div className="text-center">
                
                <span className="text-center landing_text"> Collaborate With Us To Create A Work Of Art </span>

            </div>
            <div className="dressdisplay">
                <div className="landing__img">
                    <img className="img-fluid" src={CustomerWorn9} alt="Customer Worn Dress 9" ></img>
                </div>
                <div className="landing__img">
                    <img className='img-fluid' src={CustomerWorn10} alt="Customer Worn Dress 10" ></img>
                </div>
                <div className="landing__img">
                    <img className='img-fluid' src={CustomerWorn11} alt="Customer Worn Dress 11" ></img>
                </div>
            </div>
            <div className="text-center">
                
                <span className="text-center landing_text"> Make Your Special Occasion One To Remember </span>

            </div>
            <img className='img-fluid large-img-last' src={CustomerWorn12} alt="Customer Worn Dress 12" ></img>
        </div>
    )
}

export default LandingPane
