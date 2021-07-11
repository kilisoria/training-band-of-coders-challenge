import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Highlight from '../components/Highlight';

export default function SSRPage({ user }) {
  return (
    <>
      <div className="mb-5" data-testid="ssr">
        <h1 data-testid="ssr-title">Details:</h1>
        <div data-testid="ssr-text">
          <p>
            This is the version 0.0.1 for the code Challenge. 
          </p>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
