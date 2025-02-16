import Input from '@/components/commons/Input';
import styled from 'styled-components';

export default function SignUpInput({ labelName, name, inputType, placeholder, inputWidth, iconImage }) {
  return (
    <StSignUpInput>
      <label>{labelName}: </label>
      <Input name={name} type={inputType} placeholder={placeholder} width={inputWidth} icon={iconImage} required />
    </StSignUpInput>
  );
}

const StSignUpInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin-bottom: 8px;
  width: 394px;
  & > label {
    margin-bottom: 4px;
  }
`;
