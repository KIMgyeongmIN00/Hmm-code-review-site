import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

/**
 * 이미지 토글 기능이 추가된 버튼 컴퍼넌트입니다. 기존의 button 컴퍼넌트 사용하듯이 사용하시면 됩니다.
 *
 * @component
 * @example
 * <IconButton activeIcon={FaHeart} inActiveIcon={FaRegHeart} />
 *
 * ICON 컬러 설정 예시:
 * const StyledButton = styled(Button)`
 *   display: flex;
 *   align-items: center;
 *   justify-content: center;
 *   padding: 4px;
 *
 *   svg {
 *     width: 20px;
 *     height: 20px;
 *     transition: color 0.3s ease;
 *   }
 * `;
 *
 * const ActiveIconStyled = styled(FaHeart)`
 *   color: red;
 * `;
 *
 * @prop {element} [activeIcon=FaHeart] - 활성화된 상태의 아이콘
 * @prop {element} [inActiveIcon=FaRegHeart] - 비활성화된 상태의 아이콘
 * @prop {function} [onClick] - 버튼 클릭 시 호출되는 함수
 * @prop {string} [$variant="solid"] - 버튼 스타일 ("solid" | "outline" | "ghost")
 *    - solid: 색상이 채워진 기본 스타일
 *    - outline: 테두리만 있는 스타일
 *    - ghost: 배경이 투명한 스타일
 * @prop {string} [$color="main"] - 버튼에 적용할 테마 색상 키값 ("main" | "point")
 * @prop {string} [$size="md"] - 버튼 크기 ("sm" | "md" | "lg")
 * @prop {string} [$round="md"] - 모서리 둥글기 정도 ("sm" | "md" | "lg" | "xl")
 */

function IconButton({ activeIcon: ActiveIcon = FaHeart, inActiveIcon: InActiveIcon = FaRegHeart, onClick, ...props }) {
  const [isActive, setIsActive] = useState(false);
  function handleLikeClickHandler() {
    setIsActive((prev) => !prev);
  }

  return (
    <StyledButton onClick={handleLikeClickHandler} {...props}>
      {isActive ? <ActiveIcon /> : <InActiveIcon />}
    </StyledButton>
  );
}

export default IconButton;
