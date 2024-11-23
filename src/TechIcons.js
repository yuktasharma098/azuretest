import React from 'react';
import './TechIcons.css'; // Import your CSS file for styling
import { JavaScriptOutlined, Html5Outlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

const TechIcons = () => {
  return (
    <Content id="skills" style={{ minHeight: '100vh', padding: '20px', position: 'relative' }}>

    <div className="floating-icons">
      <div className="icon"><JavaScriptOutlined /></div>
      <div className="icon"><Html5Outlined /></div>
      {/* <div className="icon"><Css3Outlined /></div> */}
      {/* Add more icons as needed */}
    </div>
    </Content>
  );
};

export default TechIcons;
