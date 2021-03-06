import React from 'react';

import Logo from './Logo';

const Home = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      Welcome to the Band of Coders Challenge!
    </h1>
    <p className="lead" data-testid="hero-lead">
      This is an application that demonstrates the use of Nodejs, Express, React, Redux, etc.
    </p>
  </div>
);

export default Home;
