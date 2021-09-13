import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {

    const [cross, setCross] = useState(false)
    useEffect(() => {

        const sections = document.querySelectorAll("div.section");
        const navLi = document.querySelectorAll("div#navbar ul li");
        const mobnavLi = document.querySelectorAll("div#mobnavbar ul li");
        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;

                const sectionHeight = section.clientHeight;
                console.log(sectionHeight);
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute("id");

                }
            });
            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current)) {
                    li.classList.add("active");
                }
            });
            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current)) {
                    li.classList.add("active");
                }
            });
        });



    }, [])

    let navlist = () => {
        let first = document.getElementsByClassName('navline')[0];
        let second = document.getElementsByClassName('navline')[1];
        let third = document.getElementsByClassName('navline')[2];
        let mobnavbar = document.getElementById('mobnavbar')
        if (cross == false) {
            second.style.transform = 'scale(0,0)';
            first.style.transform = 'rotate(-35deg)';
            third.style.transform = 'rotate(35deg)';
            mobnavbar.style.height = "260px";
            setCross(true)

        }
        else {
            second.style.transform = 'scale(1,1)';
            first.style.transform = 'rotate(0deg)';
            third.style.transform = 'rotate(0deg)';
            mobnavbar.style.height = "50px";
            setCross(false)

        }


    }

    return (
        <>

            <div id="navbar">
                <ul>
                    <li className="navli home active"><a href="#home">Home</a></li>
                    <li className="navli about"><a href="#about">About</a></li>
                    <li className="navli col"><a href="#col">Projects</a></li>
                    <li className="navli cont"><a href="#contactme">Contact me</a></li>
                </ul>
            </div>


            <div id="mobnavbar">
                <div id="navmain">
                    <div id="navright" onClick={navlist}>
                        <div className="navline cross"></div>
                        <div className="navline"></div>
                        <div className="navline cross"></div>
                    </div>
                </div>
                <ul>

                    <li className="navli home active"><a href="#home">Home</a></li>
                    <li className="navli about"><a href="#about">About</a></li>
                    <li className="navli col"><a href="#col">Projects</a></li>
                    <li className="navli cont"><a href="#contactme">Contact me</a></li>
                </ul>
                <div></div>


            </div>
        </>
    )
}

export default Navbar
