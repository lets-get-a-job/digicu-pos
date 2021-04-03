/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Div, Container, Text } from '../atom';

const Dimmer = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const Content = styled(Div)`
  width: 40%;
  height: auto;
  min-width: 600px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  position: relative;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const CloseBtn = styled.button`
  border-radius: 15px;
  border: none;
  background-color: white;
  line-height: 28px;
  font-size: 28px;
  cursor: pointer;
  color: #002060;
  position: absolute;
  top: 0px;
  right: 0px;
`;

export default function Modal({ visible, onCloseBtnClicked, title, children }) {
  return (
    <Dimmer visible={visible}>
      <Content>
        <HeaderContainer>
          {title && (
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: '28px',
                lineHeight: '28px',
                marginTop: '10px',
                paddingBottom: '10px',
                borderBottom: '1px solid black',
              }}
            >
              {title}
            </Text>
          )}
          <CloseBtn onClick={onCloseBtnClicked}>x</CloseBtn>
        </HeaderContainer>
        {children}
      </Content>
    </Dimmer>
  );
}

Modal.defaultProps = {
  title: null,
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCloseBtnClicked: PropTypes.func.isRequired,
  title: PropTypes.string,
};
