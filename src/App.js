import React, { useState } from 'react';
import { Layout, Menu, Anchor, Affix, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const { Header, Content } = Layout;
const { Link } = Anchor;

const App = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Affix>
        <Header className="custom-header">
          <div className="logo">
            <img
              src="Yukta.jpg"
              alt="Logo"
              style={{ width: '50px', height: 'auto', marginRight: '8px', borderRadius: '30px' }}
            />
            <span className="tagline">Simplicity is the soul of efficiency</span>
          </div>

          {/* Desktop Menu */}
          <Menu theme="light" mode="horizontal" className="custom-menu">
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
            <Menu.Item key="contact" className="custom-menu-item">
              <Anchor affix={false}>
                <Link href="#contact" title="Contact" />
              </Anchor>
            </Menu.Item>
          </Menu>

          {/* Mobile Menu Button */}
          <Button className="menu-button" icon={<MenuOutlined />} onClick={showDrawer} />

          {/* Smoother Mobile Drawer */}
          <Drawer
            title="Menu"
            placement="right"
            closable
            onClose={closeDrawer}
            visible={visible}
            className="custom-drawer"
          >
            <Menu mode="vertical" className="drawer-menu">
              <Menu.Item key="about" onClick={closeDrawer}>
                <Anchor affix={false}>
                  <Link href="#about" title="About" />
                </Anchor>
              </Menu.Item>
              <Menu.Item key="projects" onClick={closeDrawer}>
                <Anchor affix={false}>
                  <Link href="#projects" title="Projects" />
                </Anchor>
              </Menu.Item>
              <Menu.Item key="contact" onClick={closeDrawer}>
                <Anchor affix={false}>
                  <Link href="#contact" title="Contact" />
                </Anchor>
              </Menu.Item>
            </Menu>
          </Drawer>
        </Header>
      </Affix>

      <Content style={{ marginTop: 64 }}>
        <About />
        <Projects />
        <Contact />
      </Content>
    </Layout>
  );
};

export default App;
