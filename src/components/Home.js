import React from 'react';
import Sponsor from './Sponsor';
import BaseLayout from './layouts/BaseLayout';

const Home = () => {
  return (
    <BaseLayout className="homeBackground">
      <div className="homeLogo">
        <div className="title">
          <span>{`FesTiVAL
      du
      GRAUX soN`}</span>
        </div>
        <div className="edition info">
          <span>2ème édition</span>
        </div>
        <div className="info">
          <span>
            {`11-12-13 Octobre 2019
      Tournai, Belgique`}
          </span>
        </div>
      </div>
      <Sponsor />
    </BaseLayout>
  );
};

export default Home;
