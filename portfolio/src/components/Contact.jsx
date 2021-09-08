import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import '../css/contact.css'

const Contact = () => {

    const [user, setUser] = useState({
        name: "", email: "", message: ""
    })

    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault();
        const { name, email, message } = user;
        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({

                name, email, message
            })
        });
        const data = await res.json();
        if (res.status === 402 || !data) {
            window.alert("invalid registration");
        }
        else {
            swal("Message sent", "Thank you for reaching me out 😀.I'll get in touch with you soon ", "success");
        }
    }

    return (
        <>
        <a name="contactname"></a>
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
            
        </>
    )
}

export default Contact
