import React, { useState } from "react";

const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    })
    const handleInput = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-contact">
                        <div className="contact-content container">
                            <h1 className="main-heading">
                                contact us
                            </h1>
                        </div>
                        {/* Contact container */}
                        <div className="container grid grid-col-2">
                            <div className="contact-img">
                                <img
                                    src="/images/support.png"
                                    alt="contact-img"
                                    width="400" height="500"
                                />
                            </div>
                            {/* contact form */}
                            <div className="contact-form">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input
                                            type="text"
                                            placeholder="enter your usename"
                                            id="username"
                                            autoComplete="off"
                                            required
                                            name="username"
                                            value={contact.username}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="email"
                                            placeholder="enter your email"
                                            id="email"
                                            autoComplete="off"
                                            required
                                            name="email"
                                            value={contact.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message">message</label>
                                        <textarea
                                            placeholder="enter your message"
                                            cols="30"
                                            rows="6"
                                            id="message"
                                            autoComplete="off"
                                            required
                                            name="message"
                                            value={contact.message}
                                            onChange={handleInput}
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <section className="mb-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0723399029207!2d87.63131107427884!3d22.313103742433167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02b7a3b1a92ef9%3A0xf3a242bef943a24a!2sRajma%20health%20center!5e0!3m2!1sen!2sin!4v1716555619013!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </section>
                    </div>
                </main>
            </section>
        </>
    );
}

export default Contact;