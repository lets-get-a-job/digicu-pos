import styled from 'styled-components';

const Input = styled.input`
  font-size: 20px;
  padding: 2px;
  border: ${props => (props.border ? props.border : 'none')};
  border-bottom: ${props => (props.borderBottom ? props.borderBottom : 'none')};
`;

/* const TextInput = styled(Input).attrs({ type: 'text' })``;

const EmailInput = styled(Input).attrs({ type: 'email' })``;

const PasswordInput = styled(Input).attrs({ type: 'password' })``;
*/
export default Input;
