import { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import styled, { css } from 'styled-components';

/**
 * SelectBox 컴포넌트
 *
 * @component
 * @example
 * // 기본 SelectBox
 * <SelectBox
 *   value={selectedValue}
 *   placeholder="선택해주세요"
 *   options={[{ id: 1, name: '옵션1' }, { id: 2, name: '옵션2' }]}
 *   onChange={handleChange}
 * />
 *
 * @prop {string} [value] - 선택된 값
 * @prop {string} [placeholder="선택해주세요"] - 선택되지 않았을 때 표시할 텍스트
 * @prop {Array} [options=[]] - 선택 가능한 옵션 목록 (각 옵션은 { id, name } 형태의 객체)
 * @prop {string} [size="md"] - SelectBox 크기 ("sm" | "md" | "lg")
 * @prop {function} [onChange] - 선택된 값이 변경될 때 호출되는 함수
 */

function SelectBox({ value, placeholder = '선택해주세요', options = [], size = 'md', onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriggerClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (e, name) => {
    e.stopPropagation();
    onChange(name);
    setIsOpen((prev) => false);
  };

  return (
    <SelectContainer>
      <SelectTrigger $isPlaceholder={!value} onClick={handleTriggerClick} $size={size}>
        {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        <p>{value || placeholder}</p>
      </SelectTrigger>

      {isOpen && (
        <SelectDropdown $size={size}>
          {options.map((option) => (
            <SelectOption key={option.id} onClick={(e) => handleOptionClick(e, option.name)}>
              {option.name}
            </SelectOption>
          ))}
        </SelectDropdown>
      )}
    </SelectContainer>
  );
}

export default SelectBox;

/** ========== 스타일 ========== */
const sizeStyles = {
  sm: css`
    font-size: var(--font-size-sm);
    padding: 6px 8px;
    border-radius: var(--round-md);
  `,
  md: css`
    font-size: var(--font-size-md);
    padding: 0.5rem 1.2rem;
    border-radius: var(--round-md);
  `,
  lg: css`
    font-size: var(--font-size-lg);
    padding: 10px 16px;
    border-radius: var(--round-md);
  `
};

const sizeHeight = {
  sm: css`
    height: var(--height-sm);
  `,
  md: css`
    height: var(--height-md);
  `,
  lg: css`
    height: var(--height-lg);
  `
};

const SelectContainer = styled.div`
  position: relative;
  width: 100vm;
  margin: 0 1rem;
`;

const SelectTrigger = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid var(--color-border);
  cursor: pointer;
  gap: 0.5rem;
  ${({ $size }) => sizeStyles[$size]}
  ${({ $size }) => sizeHeight[$size]}
    ${({ $isPlaceholder }) => css`
    & > p {
      user-select: none;
      color: ${$isPlaceholder ? 'var(--color-main-light)' : 'var(--color-black)'};
    }
  `}
`;

const SelectDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  ${({ $size }) => sizeStyles[$size]}
`;

const SelectOption = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background: var(--color-hover);
  }
`;
