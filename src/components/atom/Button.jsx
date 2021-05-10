import styled from 'styled-components';

const Button = styled.button`
  padding: 5px 30px;
  border: 0;
  font-size: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  background: linear-gradient(135deg, #406bc2, #002060);
  color: white;
  border-radius: 5px;
`;

const TableBtn = styled(Button)`
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: red;
  font-size: 14px;
  :hover {
  }
`;

export { Button, TableBtn };
