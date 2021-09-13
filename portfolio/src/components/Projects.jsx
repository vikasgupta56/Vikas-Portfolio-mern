import React from 'react';
import '../css/projects.css';
import donation from '../images/donation.JPG'

const Projects = () => {

    const projects = [
        {
            bgimg: "https://previews.123rf.com/images/akkamulator/akkamulator2002/akkamulator200200406/140449652-female-doctor-smiling-on-the-background-with-patient-in-the-bed-and-two-doctors.jpg",
            title: "Lab Test booking website 21st ci using ",
            span: "MERN",
            url: "https://react-lab-test.herokuapp.com"
        },
        {
            bgimg: donation,
            title: "Donation website DonateEazy using ",
            span: "MERN",
            url: "http://donateeazy.herokuapp.com/"
        },
        {
            bgimg: "https://image.freepik.com/free-vector/realistic-coffee-background_79603-1652.jpg",
            title: "Cafe website using ",
            span: "vanilla JavaScript",
            url: "https://vikasgupta56.github.io/coffee-shop/"
        },
        {
            bgimg: "https://i.pinimg.com/originals/43/d7/c3/43d7c3ab9a098052d5ace59b8986e057.gif",
            title: "Animated cart page ",
            span: "",
            url: ""
        }
    ]

    let mouseenterfunc = (id) => {
        document.getElementById(id).style.display = "flex";
    }

    let mouseleavefunc = (id) => {
        document.getElementById(id).style.display = "none";
    }

    return (
        <>
           
            <div id="col" className="section">
                <div id="projects">
                    <p id="projp" data-aos="fade-left" data-aos-duration="1000">PROJECTS</p>
                    <div id="pline" data-aos="fade-left" data-aos-duration="1000"></div>
                    <div className="projectcontainer">
                        {projects.map((project,index) => {
                            return (
                                <>
                                    <div className="project" onMouseEnter={() => { mouseenterfunc(index) }} onMouseLeave={() => { mouseleavefunc(index) }} style={{ background: `url(${project.bgimg})` }} data-aos="fade-up" data-aos-duration="1400">
                                        <div className="whitediv" id={index}>
                                            <div className="projjflex"><h1 className="projhead">{project.title}<span>{project.span}</span></h1></div>
                                            <a href={project.url} target="_blank"><button className="projbtn">View Site</button></a>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
