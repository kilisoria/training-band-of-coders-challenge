import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import Link from 'next/link';

import styles from '../../styles/Table.module.scss';

const Table = ({ headers, items, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <>
      <div className={styles.table}>
        <div className={styles.table__row}>
          {headers && headers.map((label) => (
            <div className={styles.table__header_cell} key={`header_key_${label}`}>{label}</div>
          ))}
        </div>
        {items && items.map((item) => (
          <div className={styles.table__row} key={item._id}>
            <div className={styles.table__cell}>{item._id}</div>
            <div className={styles.table__cell}>{item.name}</div>
            <div className={styles.table__cell}>{item.type}</div>
            <div className={styles.table__cell}>{item.details}</div>
            <div className={styles.table__action_cell}>
              <Link href={`/task-update?id=${item._id}`}>
                <Button color="link" size="sm">Update</Button>
              </Link>
              <Button color="link" size="sm" onClick={() => handleDelete(item._id)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Table.propTypes = {
  headers: PropTypes.array,
  items: PropTypes.array,
  onDelete: PropTypes.func,
};

export default Table;
