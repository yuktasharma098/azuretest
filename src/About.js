import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Layout } from 'antd';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiAntdesign, SiJira } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import Lottie from 'lottie-react';
import animationData from './higirl.json'; // Adjust path if necessary
import './TechIcons.css'; // Import CSS file for styling

const { Content } = Layout;

const About = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, translateY: 0 });
        } else {
            controls.start({ opacity: 0, translateY: -50 });
        }
    }, [controls, inView]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Content id="about" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            {/* Background Gradient */}
            <div className="background-gradient" />

            {/* About Me Content */}
            <div ref={ref} className={`about-container ${isMobile ? 'mobile' : ''}`}>
                {/* Text Content */}
                <motion.div className="about-text" initial={{ opacity: 0, translateY: -50 }} animate={controls} transition={{ duration: 0.6 }}>
                    <motion.h2 className="about-heading">
                        <div className="heading-container">
                            <span>HI, I'M Yukta</span>
                            <Lottie animationData={animationData} className="lottie-animation" />
                        </div>
                    </motion.h2>
                    <motion.p className="about-description">
                   <b> React Developer with 3.6+ years</b> of experience in building scalable<b> web and desktop applications using React, Redux, and Electron.js. Skilled in React Hooks, Redux Persist, Ant Design, API integration, and Azure deployments</b>, with a focus on clean code and UI/UX optimization. Experienced in cross-platform<b>desktop development, state management, and Git</b> . Strong problem-solving skills, code reviews, and collaboration with cross-functional teams to ensure seamless execution. Passionate about creating efficient, user-friendly applications while staying updated with the latest technologies.
                            </motion.p>
                </motion.div>

                {/* Image and Floating Icons */}
                <motion.div className="image-container" initial={{ opacity: 0, translateY: 50 }} animate={controls} transition={{ duration: 0.6 }}>
                    <div className="profile-container">
                        <img src="Yukta.jpg" alt="Profile" className="profile-image" />

                        {/* Floating Icons */}
                        <div className="icon icon-top"><FaReact /></div>
                        <div className="icon icon-top-left"><FaHtml5 /></div>
                        <div className="icon icon-left"><FaCss3Alt /></div>
                        <div className="icon icon-more"><RiJavascriptFill /></div>
                        <div className="icon icon-right"><FaGithub /></div>
                        <div className="icon icon-bottom-right"><SiAntdesign /></div>
                        <div className="icon icon-bottom-left"><SiJira /></div>
                        <div className="icon icon-bottom"><VscAzure /></div>
                    </div>
                </motion.div>
            </div>
        </Content>
    );
};

export default About;
