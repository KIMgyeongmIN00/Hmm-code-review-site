import styled from 'styled-components';

export default function Input({ placeholder, type, icon: Icon }) {
  return (
    <StInputContainer>
      {/*Icon이 있을 때만 이미지 표현*/}
      {Icon && <Icon />}
      <input type={type} placeholder={placeholder} />
    </StInputContainer>
  );
}

const StInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid var(--color-border);
  border-radius: var(--round-md);
  padding: 4px 8px;
  width: 320px;
  height: 30px;

  & > input {
    border: none;
    outline: none;
    font-size: 16px;
    flex: 1;
  }

  & > svg {
    font-size: 20px;
    margin-right: 4px;
  }
`;
