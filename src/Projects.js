import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Layout, Card, Row, Col, Modal } from 'antd';
import { projects } from './data'; // Adjust the import path as necessary
import { useInView } from 'react-intersection-observer';
import './Projects.css'; // Custom CSS file for additional styles
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Content } = Layout;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Content id="projects" style={{ minHeight: '100vh', padding: '20px' }}>
      <Row gutter={[16, 16]}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            project={project}
            onClick={handleCardClick}
          />
        ))}
      </Row>

      <Modal
        title={selectedProject?.title}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <p>{selectedProject?.description}</p>
      </Modal>
    </Content>
  );
};

const ProjectCard = ({ index, project, onClick }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, translateY: 0 });
    } else {
      controls.start({ opacity: 0, translateY: 50 });
    }
  }, [controls, inView]);

  return (
    <Col ref={ref} style={{ marginTop: '5rem' }} xs={24} sm={12} md={8} lg={6}>
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="project-card"
      onClick={() => onClick(project)}
      whileHover={{ scale: 1.05 }}
    >
<Card hoverable>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src={project.image}
      alt={project.title}
      style={{
        width: '5vw', // Smaller image size
        
        height: '5vh', // Maintain square dimensions
        // borderRadius: '50%', // Makes the image circular
        // objectFit: 'cover', // Ensures proper cropping
        marginRight: '10px', // Adds spacing between the image and title
      }}
    />
    <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{project.title}</span>
  </div>
  <p style={{ marginTop: '1rem',marginLeft:"1rem", fontSize:"1rem" }}>{project.description}</p>
 <a target='_blank' href={project.link} style={{marginLeft:"0.3rem"}} className="hover-link">Click here to visit website <ArrowRightOutlined /></a>
</Card>


    </motion.div>
  </Col>
    // <Col ref={ref} style={{ marginTop: '5rem' }} xs={24} sm={12} md={8} lg={6}>
    //   <motion.div
    //     initial={{ opacity: 0, translateY: 50 }}
    //     animate={controls}
    //     transition={{ duration: 0.6, delay: index * 0.2 }}
    //     className="project-card"
    //     onClick={() => onClick(project)}
    //     whileHover={{ scale: 1.05 }}
    //   >
    //     <Card title={project.title} hoverable>
    //       <p>{project.description}</p>
    //     </Card>
    //   </motion.div>
    // </Col>
  );
};

export default Projects;
