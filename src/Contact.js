import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from './contactAnimation.json'; // Adjust the path
import { Layout } from 'antd';

const { Content } = Layout;

const Contact = () => {
  const handleDownload = () => {
    const downloadUrl = '/Yukta_Sharma_Resume.pdf'; // Adjust path if needed
    window.open(downloadUrl, '_blank');
  };

  return (
    <Content id="contact" style={{ minHeight: '100vh', padding: '20px', position: 'relative' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap', // Ensures wrapping on mobile
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: '20px', // Adds spacing for smaller screens
      }}>
        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            width: '40%', 
            minWidth: '250px', // Ensures proper size on mobile
          }}
        >
          <Lottie animationData={animationData} style={{ width: '100%', height: '100%' }} />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, translateX: 50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            width: '50%',
            minWidth: '300px', // Ensures text block doesn't shrink too much
            padding: '20px',
            textAlign: 'center', // Centers text on mobile
          }}
        >
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '15px' }}>Contact Me</h2>
          
          <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
            <strong>Email:</strong> <a href="mailto:sharmayukta098@gmail.com">sharmayukta098@gmail.com</a>
          </p>
          <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
            <strong>Phone:</strong> (+91) 8684989954
          </p>
          <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yukta-sharma-100503180/">Yukta Sharma</a>
          </p>

          <a
            href="/Yukta_Sharma_Resume.pdf"
            download="Yukta_Sharma_Resume.pdf"
            onClick={handleDownload}
            style={{
              display: 'inline-block',
              marginTop: '15px',
              fontSize: '1rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: '#1890ff',
              cursor: 'pointer',
              border: '2px solid #1890ff',
              padding: '10px 15px',
              borderRadius: '8px',
            }}
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </Content>
  );
};

export default Contact;
