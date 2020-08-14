import React, { useEffect, useState } from 'react'

import { Container } from './styles'

const SideMenu: React.FC = ({ children }) => {
  const scrollThreshOld = 300;
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(true);
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
  return (
    <Container className={className}>
      {children}
    </Container>
  )
}
export default SideMenu