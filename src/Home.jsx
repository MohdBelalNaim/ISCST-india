import React from 'react'
import './home.css'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'

const Home = () => {
return (
<div className="container-fluid" style={{"padding":0+"px"}}>
        <section>
            <div className="navbar-wrapper">
                <div className="navbar-item">Home</div>
                <a style={{"textDecoration":"none","color":"white"}} href="#about"><div className="navbar-item">About Us</div></a>
                <a style={{"textDecoration":"none","color":"white"}} href="#president"><div className="navbar-item">President's Message</div></a>
                <a style={{"textDecoration":"none","color":"white"}} href="#contact"><div className="navbar-item">Contact Us</div></a>
            </div>
        </section>
        <section>
            <div className="hero-section-wrapper">
                <a href="#about" style={{"textDecoration":"none","color":"white"}}><i className="bi bi-arrow-down-circle-fill go-down"></i></a>
            </div>
        </section>
        <section>
            <div className="info-section-wrapper" id="about">
                <div className="info-item">
                    <div className="row">
                        <div className="col-lg-3 about-image-wrapper">
                            <img src={image1} className='about-image' />
                        </div>
                        <div className="col-lg-9">
                            <div className="info-title">
                                ABOUT US
                            </div>
                            <div className="info-content">
                                Welcome to Al-Khawarizmi Centre of Computer Science (AKCCS), a pioneering
                                institution at
                                the intersection of tradition and technology. As a beacon of education, AKCCS is
                                committed to providing students from Madrasas across the country with a unique
                                and
                                enriching experience that harmonizes religious education with the advancements
                                of
                                Computer Science and Technology.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-item">
                    <div className="row">
                        <div className="col-lg-3 about-image-wrapper">
                            <img src={image2} className='about-image' />
                        </div>
                        <div className="col-lg-9">
                            <div className="info-title">
                                OUR VISION
                            </div>
                            <div className="info-content">
                                At AKCCS, we envision a world where students seamlessly integrate the profound
                                teachings of their faith with the cutting-edge advancements in Computer Science. Our
                                vision is to foster an environment where tradition and technology coalesce to
                                empower individuals in shaping a brighter, more inclusive future.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-item">
                    <div className="row">
                        <div className="col-lg-3 about-image-wrapper">
                            <img src={image3} className='about-image' />
                        </div>
                        <div className="col-lg-9">
                            <div className="info-title">
                                OUR MISSION
                            </div>
                            <div className="info-content">
                                Our mission is rooted in the belief that education is a transformative force capable
                                of breaking barriers. AKCCS is dedicated to empowering Madrasa students with the
                                skills, knowledge, and opportunities needed to pursue careers in the dynamic field
                                of Computer Science and Technology. We are committed to nurturing not just skilled
                                professionals but well-rounded individuals who contribute meaningfully to society.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="president-section-wrapper" id="president">
                <div className="row">
                    <div className="col-lg-3 president-image-wrapper">
                        <img src={image4} className='about-image' />
                    </div>
                    <div className="col-lg-9">
                        <div className="info-title">
                            PRESIDENT'S MESSAGE
                        </div>
                        <div className="info-content">
                            <p>
                                Dear Students, Parents, and Supporters,
                            </p>
                            <p>
                                I am honored to extend a warm welcome to you on behalf of Al-Khawarizmi Centre of
                                Computer Science (AKCCS), an institution dedicated to fostering excellence in both
                                religious and technological education.

                            </p>
                            <p>
                                At AKCCS an initative of Islamic Society of computer Science and Technology, we
                                believe in the power of knowledge to transform lives. Our mission is to provide
                                Madrasa students with a unique opportunity to embrace the vast possibilities of
                                Computer Science and Technology while maintaining a strong connection to their
                                religious roots.

                            </p>
                            <p>
                                As the President of AKCCS, I am committed to ensuring that our students receive a
                                holistic education that prepares them not only for successful careers but also for a
                                life of purpose and contribution. Our cutting-edge curriculum, state-of-the-art
                                facilities, and commitment to innovation set the stage for a transformative learning
                                experience.

                            </p>
                            <p>
                                AKCCS is more than an educational institution; it is a community dedicated to
                                nurturing minds, fostering creativity, and building a bridge between tradition and
                                the future. I encourage every student to embrace this journey, explore their
                                potential, and become catalysts for positive change.

                            </p>
                            <p>
                                I extend my gratitude to all those who support us in our mission, and I invite you
                                to join us in creating a brighter future where knowledge knows no boundaries.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="contact-section-wrapper" id="contact">
                <div className="row">
                    <div className="col-lg-3 president-image-wrapper">
                        <img src={image5} className='about-image' />
                    </div>
                    <div className="col-lg-9">
                        <div className="info-title">
                            CONTACT US
                        </div>
                        <div className="info-content">
                            <p>
                                Thank you for your interest in Madrasa Cricket League, an initiative by the Islamic
                                Society of Computer Science and Technology (ISCST or ISCST INDIA). Your inquiries and
                                feedback are important to us. Please feel free to reach out using the contact details
                                provided below:
                            </p>
                            <p>
                                <span style={{"fontWeight":"bold"}}>Office Address:</span><br />
                                Islamic Society of Computer Science and Technology
                                2/32, Vishal Khand 2, Gomti Nagar, LucknowUttar Pradesh, India - 226010.

                            </p>
                            <div>
                                Contact information
                            </div>
                            <div>
                                <li>General Inquiries: info@mclofficial.com</li>
                                <li>Media Enquiries: media@mclofficial.com</li>
                                <li>Team Registration Support: registration@mclofficial.com</li>
                                <li>President's Office: president@mclofficial.com</li>
                            </div>
                            <p className='mt-4'>
                                <span style={{"fontWeight":"bold"}}>Social media</span><br />
                                Stay connected with Madrasa Cricket League through our social media channels for the
                                latest updates, announcements, and behind-the-scenes moments:
                            </p>
                            <div className="social-icons-wrapper">
                                <img className='social-icons' width="34" height="34"
                                    src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
                                <img className='social-icons' width="34" height="34"
                                    src="https://img.icons8.com/color/48/instagram-new--v1.png"
                                    alt="instagram-new--v1" />
                                <img className='social-icons' width="34" height="34"
                                    src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1" />
                                <img className='social-icons' width="34" height="34"
                                    src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
}

export default Home