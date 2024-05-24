import React from "react";
import { Link } from "react-router-dom";
import { Analytics } from "../components/Analytics";

const About = () => {
    return (
        <>
            <main>
                {/* First Section */}
                <section className="section-hero">
                    <div className="container grid grid-col-2">
                        <div className="hero-content">
                            <p>
                                Welcome, Smart Technical
                            </p>
                            <h1>Why Choose Us? </h1>
                            <p>
                                Expertise: Our team consists of experienced IT professionals who
                                are passionate about staying up-to-date with the latest industry
                                trends.
                            </p>
                            <p>
                                Customization: We understand that every business is unique.
                                Thats why we create solutions that are tailored to your specific
                                needs and goals.
                            </p>
                            <p>
                                Customer-Centric Approach: We prioritize your satisfaction and
                                provide top-notch support to address your IT concerns.
                            </p>
                            <p>
                                Affordability: We offer competitive pricing without compromising
                                on the quality of our services.
                            </p>
                            <p>
                                Reliability: Count on us to be there when you need us. We are
                                committed to ensuring your IT environment is reliable and
                                available 24/7.
                            </p>
                            <div className="btn btn-group">
                                <Link to="/contact">
                                    <button className="btn"> Connect Now</button>
                                </Link>
                                <Link to="/services">
                                    <button className="btn secondary-btn">learn more</button>
                                </Link>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img
                                src="/images/about.png"
                                alt="coding buddies "
                                width="400"
                                height="500"
                            />
                        </div>
                    </div>
                </section>
                {/* Second section */}
                <Analytics />
            </main>
        </>
    );
}

export default About;