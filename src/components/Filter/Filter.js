import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ contacts, onChange }) => (
  <div className={styles.wrapper}>
    <label>
      Find contacts by name
      <input type="text" value={contacts} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  contacts: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
