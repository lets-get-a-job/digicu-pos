/* eslint-disable no-unused-vars */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Div } from '../atom';
import useUser from '../../hook/useUser';
import ImgBtn from './ImgBtn';
import POS from '../../assets/POS.png';
import SALE from '../../assets/SALE.png';
import MENU from '../../assets/MENU.png';
import COUPON from '../../assets/COUPON.png';

const HeaderContainer = styled(Div)`
  width: auto;
  height: auto;
  position: absolute;
  top: ${props => (props.top ? props.top : '30px')};
  right: ${props => (props.right ? props.right : '20vw')};
  flex-direction: row;
`;

const LogoutBtn = styled(Div)`
  width: auto;
  height: auto;
  padding: 2px 10px;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export default function Header({ top, right, except }) {
  const history = useHistory();
  const [user, setUser] = useUser();

  const icon = [
    { text: 'pos', url: POS, path: '/pos' },
    { text: 'sale', url: SALE, path: '/sale' },
    { text: 'menu', url: MENU, path: '/product/currentproduct' },
    { text: 'coupon', url: COUPON, path: '/cupon/currentcupon' },
  ];

  return (
    <HeaderContainer top={top} right={right}>
      {icon.map((v, i) => {
        if (except === v.text || except === 'all') return null;
        console.log(except);
        console.log(v.text);
        console.log(except === v.text);
        return (
          <div
            key={v.text}
            style={{
              display: 'flex',
              marginRight: '20px',
              alignItems: 'center',
            }}
          >
            <ImgBtn
              width="30px"
              height="30px"
              url={v.url}
              path={v.path}
              boxShadow="0px 0px 3px rgba(0, 0, 0, 0.4)"
            />
            {v.text}
          </div>
        );
      })}
      헤더입니다.
      <LogoutBtn
        onClick={() => {
          localStorage.removeItem('user');
          window.location.reload();
        }}
      >
        로그아웃
      </LogoutBtn>
    </HeaderContainer>
  );
}

Header.defaultProps = {
  top: '30px',
  right: '20vw',
  except: '-1',
};

Header.propTypes = {
  top: PropTypes.string,
  right: PropTypes.string,
  except: PropTypes.string,
};
