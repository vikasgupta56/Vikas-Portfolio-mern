import React from 'react';
import '../css/projects.css'

const Projects = () => {

    const projects = [
        {
            bgimg: "url(https://previews.123rf.com/images/akkamulator/akkamulator2002/akkamulator200200406/140449652-female-doctor-smiling-on-the-background-with-patient-in-the-bed-and-two-doctors.jpg)",
            title: "Lab Test booking website 21st ci using ",
            span: "MERN",
            id: "1"
        },
        {
            bgimg: "url(../images/donation.JPG)",
            title: "Donation website DonateEazy using ",
            span: "MERN",
            id: "2"
        },
        {
            bgimg: "url(https://www.netclipart.com/pp/m/32-328707_download-sticky-notes-png-hd.png)",
            title: "Notes app using pure ",
            span: "JavaScript",
            id: "3"
        },
        {
            bgimg: "url(https://i.pinimg.com/originals/43/d7/c3/43d7c3ab9a098052d5ace59b8986e057.gif)",
            title: "Animated cart page ",
            span: "",
            id: "4"
        }
    ]

    let mouseenterfunc = (id) => {
        document.getElementById(id).style.display = "block";
    }

    let mouseleavefunc = (id) => {
        document.getElementById(id).style.display = "none";
    }

    return (
        <>
            <a name="projectsname"></a>
            <div id="col">
                <div id="projects">
                    <p id="projp" data-aos="fade-left" data-aos-duration="1000">PROJECTS</p>
                    <div id="pline" data-aos="fade-left" data-aos-duration="1000"></div>
                    <div className="projectcontainer">
                        {projects.map((project) => {
                            return (
                                <>
                                    <div className="project" onMouseEnter={() => { mouseenterfunc(project.id) }} onMouseLeave={() => { mouseleavefunc(project.id) }} style={{ backgroundImage: project.bgimg }} data-aos="fade-up" data-aos-duration="1400">
                                        <div className="whitediv" id={project.id}>
                                            <div className="projjflex"><h1 className="projhead">{project.title}<span>{project.span}</span></h1></div>
                                            <a href="https://react-lab-test.herokuapp.com" target="_blank"><button className="projbtn">View Site</button></a>
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
