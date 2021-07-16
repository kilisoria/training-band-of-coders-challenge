import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const ErrorMessage = ({ children }) => (
  <Alert color="danger" fade={false} data-testid="error">
    {children}
  </Alert>
);

ErrorMessage.propTypes = {
  children: PropTypes.elementType,
};

export default ErrorMessage;
