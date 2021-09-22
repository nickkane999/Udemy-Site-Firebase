import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Navs = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <NavList>
        {LINKS.map(link => (
          <li key={link.to}>
            <LinkStyled
              to={link.to}
              className={link.to === location.pathname ? 'active' : ''}
            >
              {link.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};
export default memo(Navs);
