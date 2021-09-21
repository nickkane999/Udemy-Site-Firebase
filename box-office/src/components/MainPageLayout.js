import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => (
  <div>
    <Title title="Box Office" subtitle="Find movies or actors here" />
    <Navs />
    {children}
  </div>
);

export default MainPageLayout;
