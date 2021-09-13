import React from 'react';
import vikaspic from '../images/vikaspic.jpeg';
import '../css/skills.css'


const Skills = () => {

    const skills = [
        {
            skillname: "HTML",
            perc: "95%"
        },
        {
            skillname: "CSS",
            perc: "95%"
        },
        {
            skillname: "JavaScript",
            perc: "90%"
        },
        {
            skillname: "Python",
            perc: "50%"
        },
        {
            skillname: "React",
            perc: "85%"
        },
        {
            skillname: "Node.js",
            perc: "70%"
        },
        {
            skillname: "MongoDB",
            perc: "80%"
        },
        {
            skillname: "UI design",
            perc: "70%"
        },
        {
            skillname: "Firebase",
            perc: "60%"
        },
        {
            skillname: "Graphic",
            perc: "60%"
        },
        {
            skillname: "Bootstrap",
            perc: "80%"
        }
    ]


    return (
        <>
            <div id="sabout">
                <div id="myimg" data-aos="fade-right" data-aos-duration="1150">
                    <div id="imghex"><img src={vikaspic} alt='vikas' /></div>
                    <h1>Hii...What's up??...Btw I am...</h1>
                    <p className="impara">..a Full stack web developer from Mumbai..I have seious passion</p>
                    <p className="impara">for my work.I love to design web pages with creative UI effects,</p>
                    <p className="impara" id="lastmar"> animations, and dynamic user experiences.</p>
                    <a id="sa" href="#contactname">
                        <p id="special">Lets create something special</p>
                    </a>
                    <a id="resume" href="https://drive.google.com/file/d/1-R_NW_h7iJaKXXYjosfqSNCL4zeWPP5M/view?usp=sharing" target="_blank"><p>Download my resume</p></a>

                </div>
                <div id="skilldiv" data-aos="fade-left" data-aos-duration="1150">
                    {skills.map((inner) => {
                        return (
                            <>
                                <div className="skills">
                                    <div className="skillname">{inner.skillname}</div>
                                    <div className="perc">
                                        <div className="innerperc" style={{ width: inner.perc }}></div>
                                    </div>
                                    <div className="percent">{inner.perc}</div>
                                </div>
                            </>
                        )
                    })
                    }

                </div>
            </div>

        </>
    )
}

export default Skills
