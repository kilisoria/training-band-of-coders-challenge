import React from 'react';
import { Provider } from 'react-redux';
import { UserProvider } from '@auth0/nextjs-auth0';

import PropTypes from 'prop-types';

import Layout from '../components/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.css';

import { useStore } from '../store/store';

initFontAwesome();

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <UserProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </UserProvider>
  );
};

App.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
  pageProps: PropTypes.object,
};

export default App;
