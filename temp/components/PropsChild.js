import React from 'react';
import PropTypes from 'prop-types';

function PropsChild(props) {
  return (
    <>
      <div>{props.text}</div>
      <div>{props.firstName}</div>
      <div>{props.lastName}</div>
    </>
  );
}
PropsChild.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
// PropsChild.defaultProps = {
//   firstName: 'Allie',
//   lastName: 'Xiao',
// };

export default PropsChild;
