import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ testId }) => (
  <figure className="" title="Next.js" data-testid={testId}>
    <svg xmlns="https://www.bandofcoders.com/wp-content/uploads/2020/07/cropped-logo-boc-32x32.png" width="207" height="124" />
  </figure>
);

Logo.propTypes = {
  testId: PropTypes.string,
};

export default Logo;
