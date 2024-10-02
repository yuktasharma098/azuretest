import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from './contactAnimation.json'; // Adjust the path to your animation data
import { Layout } from 'antd';

const { Content } = Layout;

const Contact = () => {
    const handleDownload = () => {
        const downloadUrl = '/Yukta_Sharma_Resume.pdf'; // Adjust the path based on your file location in src
        window.open(downloadUrl, '_blank');
      };
  return (
    <Content id="contact" style={{ minHeight: '100vh', padding: '20px', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: '50%' }}
        >
          <Lottie animationData={animationData} style={{ width: '100%', height: '100%' }} />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, translateX: 50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: '50%', padding: '20px' }}
        >
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Contact Me</h2>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontSize: '1.2rem' }}>
              <strong>Email:</strong> <a href="mailto:sharmayukta098@gmail.com">sharmayukta098@gmail.com</a>
            </p>
            <p style={{ fontSize: '1.2rem' }}>
              <strong>Phone:</strong> (+91) 8684989954
            </p>
            <p style={{ fontSize: '1.2rem' }}>
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yukta-sharma-100503180/">Yukta Sharma</a>
            </p>
          </div>
          <a
            href="/Yukta_Sharma_Resume.pdf" // Adjust the path based on your file location in src
            download="Yukta_Sharma_Resume.pdf" // Specify the filename for download
            onClick={handleDownload} // Handle the download action
            style={{
              display: 'inline-block',
              marginTop: '20px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: '#1890ff', // Adjust color as needed
              cursor: 'pointer',
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
