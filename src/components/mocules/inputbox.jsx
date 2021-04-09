import React from 'react';
import PropTypes from 'prop-types';
import { Text, Input, Container } from '../atom';

const InputBox = ({ label, type, width }) => (
  <Container style={{ width, paddingTop: '20px', alignItems: 'flex-start' }}>
    <Text style={{ width: '100%', marginTop: '20px', marginBottom: '10px' }}>
      {label}
    </Text>
    <Input type={type} borderBottom="1px solid #002060" />
  </Container>
);

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default InputBox;
