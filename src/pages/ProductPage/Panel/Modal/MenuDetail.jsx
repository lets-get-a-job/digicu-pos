/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Text, Button, Input } from '../../../../components/atom';
import { DetailMenu, DeleteMenu, ModifyMenu } from '../../../../repo/menu';
import useUser from '../../../../hook/useUser';

const DetailContainer = styled(Container)`
  width: 100%;
  height: auto;
  margin: 30px;
  padding: 0px;
  border-top: 1px solid black;
`;

const SubContainer = styled(Container)`
  flex-direction: row;
  padding-top: 20px;
  width: 90%;
  justify-content: space-around;
`;

export default function Detail({ menu, setMenu, setIsChange }) {
  const [user, setUser] = useUser();

  const onModifyBtnClicked = () => {
    console.log('수정버튼 클릭');
    const payload = {
      ...menu,
      menu_value: parseInt(menu.menu_value),
      stock: parseInt(menu.stock),
    };
    ModifyMenu(user.token, payload).then(d => {
      alert('변경되었습니다.');
      setIsChange(true);
    });
  };

  const onDeleteBtnClicked = () => {
    console.log('삭제버튼 클릭');
    DeleteMenu(user.token, menu.menu_id).then(d => {
      alert('삭제되었습니다.');
      setIsChange(true);
    });
  };

  return (
    <DetailContainer>
      <SubContainer>
        <Text>메뉴</Text>
        <Input
          value={menu.menu_name}
          onChange={e => setMenu({ ...menu, menu_name: e.target.value })}
        />
      </SubContainer>
      <SubContainer>
        <Text>가격</Text>
        <Input
          value={menu.menu_value}
          onChange={e =>
            setMenu({
              ...menu,
              menu_value: e.target.value.replace(/[^0-9]/g, ''),
            })
          }
        />
      </SubContainer>
      <SubContainer>
        <Text>재고</Text>
        <Input
          value={menu.stock}
          onChange={e =>
            setMenu({
              ...menu,
              stock: e.target.value.replace(/[^0-9]/g, ''),
            })
          }
        />
      </SubContainer>
      <SubContainer>
        <Button onClick={onModifyBtnClicked}>수정하기</Button>
        <Button onClick={onDeleteBtnClicked}>삭제하기</Button>
      </SubContainer>
    </DetailContainer>
  );
}

Detail.propTypes = {
  menu: PropTypes.object.isRequired,
  setMenu: PropTypes.func.isRequired,
  setIsChange: PropTypes.func.isRequired,
};
