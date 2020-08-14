import React, { useEffect, useState } from 'react'

import { Container } from './styles';

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined
  }
}

const SideMenu: React.FC = ({ children }) => {
  const scrollThreshOld = 300;
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(false);
  function onScroll() {
    setScrollY(window.scrollY);
    setIsActive(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshOld ? 'scrollOpen' : ''
  ];
  const className = classes.join(' ').trim();

  function toggleActiveMenu() {
    setIsActive(prev => !prev)
  }
  window.toggleActiveMenu = toggleActiveMenu
  return (
    <Container className={className}>
      {children}
    </Container>
  )
}
export default SideMenu