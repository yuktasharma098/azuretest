import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Layout, Card, Row, Col, Modal, Carousel } from 'antd';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { projects } from './data'; 
import { useInView } from 'react-intersection-observer';
import './Projects.css'; 
import { ArrowRightOutlined } from '@ant-design/icons';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

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
    setSelectedProject(null)
  };
  console.log(selectedProject)
  const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (

  <LeftOutlined
    {...props}
    style={{
      ...props.style,
      color: 'black', // Change arrow color
    }}
  />
);

const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
  <RightOutlined
    {...props}
    style={{
      ...props.style,
      color: 'black', // Change arrow color
     
    }}
  />
);

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
    {selectedProject?.description?.split("\n").map((line, index) => (
    <p key={index}>{line}</p>
  ))}


    {selectedProject?.media && selectedProject.media.length > 0 && (
   <Carousel prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />} arrows>
   {selectedProject?.media.map((item, index) => (
     <div key={index} style={{ textAlign: 'center' }}>
       {item.type === 'image' ? (
         <img src={item.src} alt={`Project ${index}`} style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} />
       ) : (
         <video 
           key={selectedProject.title + index}  // 🔥 Ensures video reloads when project changes
           controls 
           style={{ width: '100%', maxHeight: '300px' }} 
           controlsList="nodownload" 
           disablePictureInPicture
         >
           <source src={item.src} type="video/mp4" />
           Your browser does not support the video tag.
         </video>
       )}
     </div>
   ))}
 </Carousel>
 
    
    )}
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
        width: '5vw', 
        
        height: '5vh', 
      
        marginRight: '10px', 
      }}
    />
    <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{project.title}</span>
  </div>
  <p style={{ marginTop: '1rem',marginLeft:"1rem", fontSize:"1rem" }}>{project.description.substring(0,130)}...</p>
 {project.link ? <a target='_blank' href={project.link} style={{marginLeft:"0.3rem"}} className="hover-link">Click here to visit website <ArrowRightOutlined /></a>:(project.text?<a style={{marginLeft:"0.3rem"}}>{project.text}</a>:"")}
</Card>


    </motion.div>
  </Col>
 
  );
};

export default Projects;
