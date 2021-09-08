import React from 'react';
import '../css/footer.css'


const Footer = () => {
    return (
        <>
             <footer>
                <a style={{textDecoration:"none"}} href="#home"><div id="newarrow">
                <i id="uparrow" class="fas fa-angle-up"></i>
                </div></a>
                <div className="social-container">
                    <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-github"></i></a></li>
                    </ul>
                </div>
                <p>VIKAS GUPTA &nbsp;| &nbsp;CONTACT : 7738302421 &nbsp;| &nbsp;vika.gupta56@gmail.com</p>
            </footer> 
        </>
    )
}

export default Footer
