import React from 'react'
import '../componentcss/Footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
    

    return (
        <nav className="navbar navbar-dark text-center">
            <div className="col-12">
                <div className="footerlinks text-center ">
                    <div className="my-3">
                        <a className="footerlink" href="/" alt=''> HOME </a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/about" alt=''> ABOUT </a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/lookbook" alt=''> LOOKBOOK </a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/contact"> CONTACT US </a>
                    </div>
                </div>
            </div>
            <div className="footer-contact">
                <span > <LocationOnIcon/> Atlanta, GA </span><br/>
                <span > <PhoneIphoneIcon/> 678-653-3725 </span><br/>
                <a className="contact-email" href="https://www.instagram.com/slrcouture/" ><span ><InstagramIcon/> @slrcouture </span></a><br/>
                <a className="contact-email" title="E-Mail Us @ SLR Couture!" href="mailto: SLRCouture@gmail.com"><span> <EmailIcon/> slrcouture@gmail.com </span></a>
                <p> <AccessTimeIcon/> Mon-Fri: 9am - 5pm EST<br/>Sat-Sun: Closed </p>
                <p> All inquiries will be responded to within 72 business hours. </p>
            </div>
            <p className="footer__text">&#169; 2022  SLR Couture.  All Rights Reserved </p>
        </nav>
    )
}

export default Footer
