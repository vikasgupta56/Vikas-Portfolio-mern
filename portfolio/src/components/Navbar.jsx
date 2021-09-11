import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/navbar.css'

const Navbar = () => {

    const[cross,setCross] = useState(false)
    useEffect(() => {

        let ul = document.querySelector('ul');
        var li = document.querySelectorAll('li');

        li.forEach(el => {

            el.addEventListener('click', function () {
                ul.querySelector('.active').classList.remove('active');

                el.classList.add('active');
            });
        });

    }, [])
    
    let navlist =()=>{
        let first = document.getElementsByClassName('navline')[0];
        let second = document.getElementsByClassName('navline')[1];
        let third = document.getElementsByClassName('navline')[2];
        let mobnavbar = document.getElementById('mobnavbar')
        console.log(cross);
        if(cross==false){
        second.style.transform = 'scale(0,0)';
        first.style.transform='rotate(-35deg)';
        third.style.transform='rotate(35deg)';
        mobnavbar.style.height="260px";
        setCross(true)

        }
        else{
            second.style.transform = 'scale(1,1)';
        first.style.transform='rotate(0deg)';
        third.style.transform='rotate(0deg)';
        mobnavbar.style.height="50px";
        setCross(false)
       
        }


    }

    return (
        <>
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
                <div></div>


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
                    <li className="mobactive"><a href="#homename">
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
                <div></div>


            </div>
        </>
    )
}

export default Navbar
