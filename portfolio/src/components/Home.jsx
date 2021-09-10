import React from 'react';
import { useEffect } from 'react';
import '../css/home.css';
import file from '../images/file.mp4'

const Home = () => {

   
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


        var vid1 = document.getElementById("video");
var vid2 = document.getElementById("secondvideo");

var vid1Ready = false
var vid2Ready = false

vid1.onloadeddata = function() {
    if (vid2Ready == true) {
      vid1.play()
      vid2.play()
    } else {
      vid1Ready = true
    }
};

vid2.onloadeddata = function() {
    if (vid1Ready == true) {
      vid1.play()
      vid2.play()
    } else {
      vid2Ready = true
    }
};

    }, [])

    const row = [];
    const tr=[];

    for (let i = 0; i <= 7; i++) {
        row.push(<div className="row">{tr}
        </div>)
    }
    for (let i = 0; i <= 14; i++) {
        tr.push(<div className="tr">
        </div>)
    }


    return (
        <>
            <a name="homename"></a>
            <div id="background">
              
                    <div className="homeflex">
                    <div id="info">
                        <div className="flex">
                            <p id="infop">Hello,I'm<span id="pinkcolor"> Vikas Gupta</span></p>
                        </div>
                        <p id="ip">I'm a full-stack Web Developer</p>
                        <a href="#projectsname"><button id="btnn">View my work<i class="fas fa-arrow-right" id="righta" style={{ marginLeft: "9px" }}></i></button></a>
                    </div>
                    </div>
                    <div className="container">
                    <video loop muted autoPlay id="video">
                    <source src={file} type="video/mp4" />
                </video>
                <video id="secondvideo" loop muted autoPlay>
                    <source src={file} type="video/mp4" />
                </video>
                    {row}
                </div>
            </div>
            


        </>
    )
}

export default Home
