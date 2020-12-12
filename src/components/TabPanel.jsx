import React, { Fragment } from 'react';

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Fragment>{children}</Fragment>}
    </div>
  );
};

export default TabPanel;
