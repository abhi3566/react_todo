import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List Application</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: 'linear-gradient(90deg, hsla(182, 61%, 58%, 1) 0%, hsla(34, 84%, 58%, 1) 68%, hsla(323, 45%, 54%, 1) 100%)',
  color: '#fff',
  textAlign: 'center',
  padding: '20px'
}

const linkStyle = {
  color: '#000',
  textDecoration: 'none'
}

export default Header;