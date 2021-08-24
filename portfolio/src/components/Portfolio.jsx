import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/portfolio.css';
import hf from '../images/hf.jpg';
import hr from '../images/hr.jpg';
import hb from '../images/hb.jpg';
import hroc from '../images/hroc.jpg';
import vikaspic from '../images/vikaspic.jpeg'
import Aos from 'aos';
import "aos/dist/aos.css";
import swal from 'sweetalert';
import { NavLink } from "react-router-dom";

const Portfolio = () => {

    useEffect(() => {
      Aos.init({});
    }, [])


    useEffect(() => {
    let arrow = document.getElementById('btnn');
    arrow.addEventListener('mouseover', function run() {
        let ra = document.getElementById('righta');
        let hrotation = 90;
        ra.style.transform = `rotate(${hrotation}deg)`;
    });
    arrow.addEventListener('mouseout', function runn() {
        let raa = document.getElementById('righta');
        let hrotation = 0;
        raa.style.transform = `rotate(${hrotation}deg)`;
    });

    let ul = document.querySelector('ul');
    var li = document.querySelectorAll('li');

    li.forEach(el => {

        el.addEventListener('click', function () {
            ul.querySelector('.active').classList.remove('active');

            el.classList.add('active');
        });
    });

    let whity = document.getElementById('projoneimg');
        whity.addEventListener('mouseover', function whiterun() {
            let wd = document.getElementById('whitedivone')
            wd.style.display = 'block'
        });
        whity.addEventListener('mouseout', function whiterunout() {
            let wd = document.getElementById('whitedivone')
            wd.style.display = 'none'
        });

        let whitytwo = document.getElementById('projimg');
        whitytwo.addEventListener('mouseover', function whiteruntwo() {
            let wd = document.getElementById('whitedivtwo')
            wd.style.display = 'block'
        });
        whitytwo.addEventListener('mouseout', function whiteruntwoout() {
            let wd = document.getElementById('whitedivtwo')
            wd.style.display = 'none'
        });

        let whitythree = document.getElementById('projoneimgone');
        whitythree.addEventListener('mouseover', function whiterunthree() {
            let wd = document.getElementById('whitedivthree')
            wd.style.display = 'block'
        });
        whitythree.addEventListener('mouseout', function whiterunthreeout() {
            let wd = document.getElementById('whitedivthree')
            wd.style.display = 'none'
        });

        let whityfour = document.getElementById('projimgtwo');
        whityfour.addEventListener('mouseover', function whiterunfour() {
            let wd = document.getElementById('whitedivfour')
            wd.style.display = 'block'
        });
        whityfour.addEventListener('mouseout', function whiterunfourout() {
            let wd = document.getElementById('whitedivfour')
            wd.style.display = 'none'
        });
}, [])

    const [user,setUser] = useState({
        name:"",email:"",message:""
    })
    let name,value;
    const handleInput = (e)=>{
        name= e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})
    }
    const postData = async(e)=>{
        e.preventDefault();
        const {name,email,message} =user;
        const res = await fetch ('/register',{
            method : "POST",
            headers :{
                "Content-Type": "application/json"

            },
            body:JSON.stringify({
               
                name, email, message
            })
        });
         const data = await res.json();
         if(res.status===402 || !data){
             window.alert("invalid registration");
         }
         else{
           
            // window.alert("saved success")
            swal("Message sent", "Thank you for reaching me out 😀.I'll get in touch with you soon ", "success");


           
         }



    }
  
    return (
        <>

           <a name="homename"></a>
    <div id="background">
        <div className="container">
            <div id="info">
                <div className="flex">
                    <pre id="infop">Hello,I'm </pre> <span id="pinkcolor"> Vikas Gupta</span>
                </div>
                <p id="ip">I'm a full-stack Web Developer</p>
                <a href="#projectsname"><button id="btnn">View my work<i class="fas fa-arrow-right" id="righta" style={{marginLeft: "9px"}}></i></button></a>
            </div>
            <div className="row">
                <div class="tr"></div>
                <div class="tr"></div>
                <div class="tr"></div>
                <div class="tr"></div>
                <div class="tr"></div>
                <div class="tr"></div>
                <div class="tr"></div>
                <div class="tr"></div>
                <div class="tr"></div>
                <div className="tr"></div>
                <div class="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>

            </div>
            <div className="row">
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>


            </div>
            <div className="row">
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>


            </div>
            <div className="row">
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>


            </div>
            <div className="row">
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>


            </div>
            <div className="row">
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>

            </div>
            <div className="row">
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>


            </div>
        </div>
    </div>

    <div>
        <div id="navbar">
            <ul>
                <li className="active"><a href="#homename">
                        Home
                    </a></li>
                <li><a href="#aboutname">
                        About
                    </a></li>
                <li><a href="#projectsname">
                        Projects
                    </a></li>
                <li><a href="#contactname">
                        Contact Me
                    </a></li>
            </ul>


        </div>   
        <a name="aboutname"></a>
        <div id="about">
            <div id="ab" data-aos="fade-right" data-aos-duration="1100">ABOUT</div>
            <div id="line" data-aos="fade-right" data-aos-duration="1100" data-aos-delay="500"></div>

        </div>
        <div id="hex">
            <div id="hf">
                <div data-aos="flip-right" data-aos-duration="1150"><img src={hf} alt="hf" /></div>
                <h2 className="hfd">Fast</h2>
                <p>Fast load times and lag free</p>
                <p>interaction, my highest priority.</p>
            </div>
            <div id="hr">
                <div data-aos="flip-right" data-aos-duration="1150"><img src={hr} alt="hr" /></div>
                <h2 className="hfd">Responsive</h2>
                <p>My layouts will work on any</p>
                <p>device, big or small.</p>
            </div>
            <div id="hb">
                <div data-aos="flip-right" data-aos-duration="1150"><img src={hb} alt="hb" /></div>
                <h2 className="hfd">Intutive</h2>
                <p>Strong preference for easy to</p>
                <p>use, intuitive UX/UI.</p>
            </div>
            <div id="hroc">
                <div data-aos="flip-right" data-aos-duration="1150"><img src={hroc} alt="hroc" /></div>
                <h2 className="hfd">Dynamic</h2>
                <p>Websites don't have to be static, I love</p>
                <p>making pages come to life.</p>
            </div>
        </div>
    
        <div id="sabout">
            <div id="myimg" data-aos="fade-right" data-aos-duration="1150">
                <div id="imghex"><img src={vikaspic} alt='vikas'/></div>
                <h1>Hii...What's up??...Btw I am...</h1>
                <p className="impara">..a Full stack web developer from Mumbai..I have seious passion</p>
                <p className="impara">for my work.I love to design web pages with creative UI effects,</p>
                <p className="impara" id="lastmar"> animations, and dynamic user experiences.</p>
                <a id="sa" href="#contactname">
                    <p id="special">Lets create something special</p>
                    <a id="resume" href="./VikasResume.pdf" download><p>Download my resume</p></a>
                </a>
            </div>
            <div id="skilldiv" data-aos="fade-left" data-aos-duration="1150">
                <div className="skills" id="firstskill">
                    <div className="skillname">HTML</div>
                    <div className="perc">
                        <div id="a"></div>
                    </div>
                    <div className="percent">95%</div>
                </div>
                <div className="skills">
                    <div className="skillname">CSS</div>
                    <div className="perc">
                        <div id="b"></div>
                    </div>
                    <div className="percent">95%</div>
                </div>
                <div className="skills">
                    <div className="skillname">JavaScript</div>
                    <div className="perc">
                        <div id="c"></div>
                    </div>
                    <div className="percent">90%</div>
                </div>
                <div className="skills">
                    <div className="skillname">Python</div>
                    <div className="perc">
                        <div id="d"></div>
                    </div>
                    <div className="percent">60%</div>
                </div>
                <div className="skills">
                    <div className="skillname">React</div>
                    <div className="perc">
                        <div id="e"></div>
                    </div>
                    <div className="percent">70%</div>
                </div>
                <div className="skills">
                    <div className="skillname">Node.js</div>
                    <div className="perc">
                        <div id="f"></div>
                    </div>
                    <div className="percent">90%</div>
                </div>
                <div className="skills">
                    <div className="skillname">MongoDB</div>
                    <div className="perc">
                        <div id="g"></div>
                    </div>
                    <div className="percent">90%</div>
                </div>
                <div className="skills">
                    <div className="skillname">UI design</div>
                    <div className="perc">
                        <div id="h"></div>
                    </div>
                    <div className="percent">70%</div>
                </div>
                <div className="skills">
                    <div className="skillname">Graphic</div>
                    <div className="perc">
                        <div id="i"></div>
                    </div>
                    <div className="percent">60%</div>
                </div>
                <div className="skills">
                    <div className="skillname">php</div>
                    <div className="perc">
                        <div id="j"></div>
                    </div>
                    <div className="percent">50%</div>
                </div>
            </div>
        </div>
        <a name="projectsname"></a>
        <div id="col">
            <div id="projects">
                <p id="projp" data-aos="fade-left" data-aos-duration="1000">PROJECTS</p>
                <div id="pline" data-aos="fade-left" data-aos-duration="1000"></div>
                <div className="projectcontainer">
                   <div className="projone" id="projoneimg" data-aos="fade-up"  data-aos-duration="1400">
                       <div id="whitedivone">
                        <div className="projjflex"><h1 className="projhead">Lab Test booking website 21st ci using <span>MERN</span></h1></div>
                        <a href="https://react-lab-test.herokuapp.com" target="_blank"><button className="projbtn">View Site</button></a>
                       </div>
                   </div>
                   <div className="projone" id="projimg" data-aos="fade-up"  data-aos-duration="1400">
                    <div id="whitedivtwo">
                    <div className="projjflex"><h1 className="projhead">Donation website DonateEazy using <span>MERN</span></h1></div>
                        <a href="https://donateeazy.herokuapp.com/" target="_blank"><button className="projbtn">View Site</button></a>
                    </div>
                   </div>
                </div>
                <div className="projectcontainer">
                    <div className="projone" id="projoneimgone" data-aos="fade-up"  data-aos-duration="1400">
                        <div id="whitedivthree">
                            <div className="projjflex"><h1 className="projhead">Notes app using pure<span> Javascript</span></h1></div>
                            <a href="" target="_blank"><button className="projbtn">View Site</button></a>
                        </div>
                    </div>
                    <div className="projone" id="projimgtwo" data-aos="fade-up"  data-aos-duration="1400">
                        <div id="whitedivfour">
                            <div className="projjflex" id="lastt"><h1 className="projhead">Animated cart page <span></span></h1></div>
                            <a href="https://cart-page-app.herokuapp.com" target="_blank"><button className="projbtn">View Site</button></a>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        <a name="contactname"></a>
        {/* yaha pe div gayab kiya h */}
            <div id="cont">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#252934" fill-opacity="1" d="M0,96L720,224L1440,96L1440,320L720,320L0,320Z"></path>
                </svg>
                <div id="contact">
                    <h1 data-aos="fade-right" data-aos-duration="1200">CONTACT</h1>
                    <div data-aos="fade-right" data-aos-duration="1200" id="linee">
                    </div>
                    <p id="cp" data-aos="fade-left">Have a question or want to work together?
                    </p>
                    <div>
                        <form method="POST" data-aos="zoom-in" data-aos-duration="1000">
                            <div><input className="input" name="name" value={user.name} onChange={handleInput} placeholder="Name" /></div>
                            <div><input className="input" name="email" value={user.email} onChange={handleInput} placeholder="Your Email" /></div>
                            <div><textarea placeholder="Your Message" name="message" value={user.message} onChange={handleInput} id="textarea"></textarea></div>
                            <button type="submit" id="btn" value="register" onClick={postData}>SUBMIT</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
         <footer>
            <a href="#homename">
                <div id="arrow">
                    <p id="up">^</p>
                </div>
            </a>
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

export default Portfolio
