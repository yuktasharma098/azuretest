import React from 'react';
import { Layout, Menu, Anchor, Affix } from 'antd';
import './App.css'; // Import your custom CSS if needed
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

import TechIcons from './TechIcons';

const { Header, Content } = Layout;
const { Link } = Anchor;

const App = () => (

  <Layout>
    <Affix>
      <Header className="custom-header">
        <div className="logo">
          <img src="Yukta.jpg" alt="Logo" style={{ width: '60px', height: 'auto', marginRight: '8px', borderRadius: "30px" }} />
          <span style={{
            fontWeight: "600",
            fontSize: "1.5rem",
            background: "-webkit-linear-gradient(left, #f093fb, #f5576c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Simplicity is the soul of efficiency</span>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['add']}
          className="custom-menu"
        >
          <Menu.Item key="about" className="custom-menu-item">
            <Anchor affix={false}>
              <Link href="#about" title="About" />
            </Anchor>
          </Menu.Item>
          <Menu.Item key="projects" className="custom-menu-item">
            <Anchor affix={false}>
              <Link href="#projects" title="Projects" />
            </Anchor>
          </Menu.Item>
          {/* <Menu.Item key="skill" className="custom-menu-item">
            <Anchor affix={false}>
              <Link href="#skill" title="Skill Baloon" />
            </Anchor>
          </Menu.Item> */}
          <Menu.Item key="contact" className="custom-menu-item">
            <Anchor affix={false}>
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Menu.Item>
        
        </Menu>
      </Header>
    </Affix>
    <Content style={{ marginTop: 64 }}>
      <About />
      <Projects />
      {/* <TechIcons />  */}

      <Contact />
    </Content>
  </Layout>
);

export default App;
