import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input, Text, Container } from '../atom';

const CheckBoxContainer = styled(Container)`
  padding-top: 0px;
  flex-direction: row;
  align-items: center;
`;

export default function CheckBox({ text, check, setCheck }) {
  const handleOnCheck = () => {
    setCheck(!check);
  };
  return (
    <>
      <CheckBoxContainer>
        <Input
          type="checkbox"
          onClick={handleOnCheck}
          style={{ marginRight: '10px' }}
        />
        <Text style={{ fontSize: '18px' }}>{text}</Text>
      </CheckBoxContainer>
    </>
  );
}

CheckBox.propTypes = {
  text: PropTypes.string.isRequired,
  check: PropTypes.bool.isRequired,
  setCheck: PropTypes.func.isRequired,
};
