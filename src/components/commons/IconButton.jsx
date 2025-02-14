import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

/**
 * 이미지 토글 기능이 추가된 버튼 컴퍼넌트입니다. 기존의 button 컴퍼넌트 사용하듯이 사용하시면 됩니다.
 *
 * @component
 * @example
 * <IconButton activeIcon={FaHeart} inActiveIcon={FaRegHeart} onClick={handleClick} />
 * const ActiveIconStyled = styled(FaHeart)` // icon 색상을 변경하고 싶으면 아이콘 별로 색상 변경하면 됨
 *   color: red;
 * `;
 *
 * @prop {element} activeIcon - 활성화된 상태의 아이콘
 * @prop {element} inActiveIcon - 비활성화된 상태의 아이콘
 * @prop {function} [onClick] - 버튼 클릭 시 호출되는 함수
 * @prop {object} [props] - 추가적인 버튼 속성
 */

function IconButton({ activeIcon: ActiveIcon, inActiveIcon: InActiveIcon, onClick, ...props }) {
  const [isActive, setIsActive] = useState(false);

  function handleLikeClickHandler() {
    setIsActive((prev) => !prev);
  }

  return (
    <StButton onClick={handleLikeClickHandler} {...props}>
      {isActive ? <ActiveIcon /> : <InActiveIcon />}
    </StButton>
  );
}

const StButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;

  svg {
    width: 20px;
    height: 20px;
    transition: color 0.3s ease;
  }
`;

export default IconButton;
