import React from 'react';
import '../css/footer.css'


const Footer = () => {
    return (
        <>
             <footer>
                <a style={{textDecoration:"none"}} href="#"><div id="newarrow">
                <i id="uparrow" class="fas fa-angle-up"></i>
                </div></a>
                <div className="social-container">
                    <ul className="social-icons">
                        <li><a href="https://wa.me/917738302421" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="https://www.instagram.com/vikas_gupta______/?igshid=1i66m7ghmb71v" target="_blank"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/vikas-gupta-79436a203/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://github.com/vikasgupta56" target="_blank"><i className="fab fa-github"></i></a></li>
                    </ul>
                </div>
                <p>VIKAS GUPTA &nbsp;| &nbsp;CONTACT : 7738302421 &nbsp;| &nbsp;vika.gupta56@gmail.com</p>
            </footer> 
        </>
    )
}

export default Footer
