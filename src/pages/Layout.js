import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { HomeTable } from '../components';
import Sidebar from '../components/Sidebar/Sidebar';
import './Home.css';
const Layout = props => {
  // const logoutHandler = () => {};

  return <div className='layout'>{props.children}</div>;
};

export default Layout;
