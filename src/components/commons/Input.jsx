import styled from 'styled-components';

export default function Input({ icon: Icon, width, ...props }) {
  return (
    <StInputContainer width={width}>
      {/*Icon이 있을 때만 이미지 표현*/}
      {Icon && <Icon />}
      <StInput {...props} />
    </StInputContainer>
  );
}

const StInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid var(--color-border);
  border-radius: var(--round-md);
  padding: 4px 8px;
  width: ${(props) => props.width || '100%'};
  height: var(--height-md);

  & > svg {
    font-size: var(--font-size-lg);
    margin-right: 4px;
  }
`;
const StInput = styled.input`
  border: none;
  outline: none;
  font-size: ${(props) => props.fontSize || 'var(--font-size-md)'};
  flex: 1;
`;
