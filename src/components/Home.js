import React from 'react';
import Sponsor from './Sponsor';
import BaseLayout from './layouts/BaseLayout';

const Home = () => {
  return (
    <BaseLayout className="homeBackground">
      Home
      <Sponsor />
    </BaseLayout>
  );
};

export default Home;
