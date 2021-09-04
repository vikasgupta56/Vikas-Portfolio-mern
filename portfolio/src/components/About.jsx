import React from 'react';
import { BiTachometer } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { BiBulb } from "react-icons/bi";
import { IoIosRocket } from "react-icons/io";


const About = () => {
    const about = [
        {
            title: "Fast",
            para: "Fast load times and lag free. Interaction is my highest priority.",
            i:<BiTachometer className="hexlogo" />
        },
        {
            title: "Responsive",
            para: "My layouts will work on any device, big or small.",
            i:<FaLaptopCode className="hexlogo" />
        },
        {
            title: "Intutive",
            para: "Strong preference for easy to use, intuitive UX/UI.",
            i:<BiBulb className="hexlogo" />
        },
        {
            title: "Dynamic",
            para: "Websites don't have to be static, I love making pages come to life.",
            i:<IoIosRocket className="hexlogo" />
        }
    ]


    return (
        <>
            <a name="aboutname"></a>
                <div id="aboutsection">
                    <div id="about">
                        <div id="ab" data-aos="fade-right" data-aos-duration="1100">ABOUT</div>
                        <div id="line" data-aos="fade-right" data-aos-duration="1100" data-aos-delay="500"></div>
                    </div>
                    <div id="hex">
                       {about.map((inner)=>{
                           return(
                               <>
                               <div className="abouthex">
                            <div className="abouthexagon" data-aos="flip-right" data-aos-duration="1150">{inner.i}</div>
                            <h2 className="hextitle">{inner.title}</h2>
                            <p className="hexpara">{inner.para}</p>
                        </div>
                               </>
                           )
                       })}
                   
                       
                    </div>
                </div>
 
        </>
    )
}

export default About
