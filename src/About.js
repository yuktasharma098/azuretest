import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Layout } from 'antd';
import { useInView } from 'react-intersection-observer';
import './TechIcons.css'; // Import your CSS file for styling
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiAntdesign, SiJira } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import animationData from './higirl.json'; // Adjust the path to your animation data
import Lottie from 'lottie-react';

const { Content } = Layout;

const About = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: false, // Set to false to trigger multiple times
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, translateY: 0 });
        } else {
            controls.start({ opacity: 0, translateY: -50 });
        }
    }, [controls, inView]);

    return (
        <Content id="about" style={{ minHeight: '100vh', padding: '20px', position: 'relative' }}>
            {/* Diagonal background */}




            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50%',
                    height: '100%',
                    background: 'linear-gradient(to bottom right, #f093fb, #f5576c)',
                    zIndex: -1,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    marginTop: '5rem',
                }}
            />

            {/* About Me content */}
            <div
                ref={ref}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}
            >
                {/* Text content */}
                <motion.div
                    initial={{ opacity: 0, translateY: -50 }}
                    animate={controls}
                    transition={{ duration: 0.6 }}
                    style={{ width: '50%', padding: '20px', color: 'black' }}
                >
                    <motion.h2 style={{
                        fontSize: '2rem', fontWeight: 'bold',
                        background: "-webkit-linear-gradient(left, #f093fb, #f5576c)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        <div style={{ display: 'flex', flexDirection: "row" }}>
                            <span style={{marginTop:"5rem"}}> HI, I'M Yukta</span>
                            <Lottie animationData={animationData} style={{ width: '10%', height: '10%' }} />
                        </div>
                    </motion.h2>
                    <motion.p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                        React Developer with 3.6+ years of experience in building scalable web applications using React, Redux, HTML, CSS,
                        and JavaScript. Developed projects
                        like the Costen travel expense app and
                        IBPRO payroll desktop app. Skilled in
                        API integration, Git, React Hooks, Redux Persist, and Ant Design. Strong
                        problem-solving skills and a commitment to clean, maintainable code.
                    </motion.p>
                    <motion.span
                        style={{
                            fontWeight: '600',
                            fontSize: '1.5rem',
                            background: '-webkit-linear-gradient(left, #f093fb, #f5576c)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                    </motion.span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={controls}
                    transition={{ duration: 0.6 }}
                    style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <div className="container">
                        {/* Circular Image */}
                        <img src="Yukta.jpg" alt="Profile" className="profile-image" />

                        {/* Floating Icons */}
                        <div className="icon icon-top">
                            <FaReact />
                        </div>
                        <div className="icon icon-top-left">
                            <FaHtml5 />
                        </div>
                        <div className="icon icon-left">
                            <FaCss3Alt />

                        </div>
                        <div className="icon icon-more">
                            <RiJavascriptFill />

                        </div>
                        <div className="icon icon-right">
                            <FaGithub />


                        </div>
                        <div className="icon icon-bottom-right">
                            <SiAntdesign />



                        </div>
                        <div className="icon icon-bottom-left">
                            <SiJira />



                        </div>
                        <div className="icon icon-bottom">
                            <VscAzure />



                        </div>


                    </div>
                    {/* Image */}

                </motion.div>
            </div>

        </Content>
    );
};

export default About;
