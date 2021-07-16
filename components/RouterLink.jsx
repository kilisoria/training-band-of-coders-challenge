import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RouterLink = ({
  children, href, className, icon, tabIndex, testId,
}) => {
  const router = useRouter();
  const activeClass = 'router-link-exact-active';
  const activeClasses = className ? `${className} ${activeClass}` : activeClass;

  return (
    <Link href={href}>
      <span className="d-inline-flex align-items-center router-link">
        {icon && <FontAwesomeIcon icon={icon} className="mr-3" />}
        <a
          className={router.asPath === href ? activeClasses : className}
          tabIndex={tabIndex}
          data-testid={testId}
        >
          {children}
        </a>
      </span>
    </Link>
  );
};

RouterLink.propTypes = {
  children: PropTypes.elementType,
  href: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
};

export default RouterLink;
