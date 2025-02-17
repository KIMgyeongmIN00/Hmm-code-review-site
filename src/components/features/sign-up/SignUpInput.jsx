import Input from '@commons/Input';
import styled from 'styled-components';

export default function SignUpInput({ labelName, inputType, $iconImage, ...props }) {
  return (
    <StSignUpInput>
      <label>{labelName}: </label>
      <Input type={inputType} width="374px" icon={$iconImage} {...props} required />
    </StSignUpInput>
  );
}

const StSignUpInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin-bottom: 8px;
  width: 392px;
  & > label {
    margin-bottom: 4px;
  }
`;
