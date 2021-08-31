import React from 'react';
import { useEffect } from 'react';

const Navbar = () => {

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


            </div>
        </>
    )
}

export default Navbar
