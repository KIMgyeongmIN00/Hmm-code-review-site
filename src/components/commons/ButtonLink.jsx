import Button from './Button';
import { Link } from 'react-router-dom';

/**
 * 다양한 스타일 변형, 크기, 모서리 둥글기를 지원하는 버튼 디자인의 Link 컴포넌트입니다.
 *
 * @component
 * @example
 * // 기본 솔리드 버튼
 * <ButtonLink>클릭하세요</ButtonLink>
 *
 * // 아웃라인 스타일의 큰 버튼
 * <ButtonLink $variant="outline" $size="lg">클릭하세요</ButtonLink>
 *
 * // 고스트 스타일에 커스텀 색상과 둥근 모서리를 적용한 버튼
 * <ButtonLink $variant="ghost" $color="secondary" $round="xl">클릭하세요</ButtonLink>
 *
 * @prop {string} [$variant="solid"] - 버튼 스타일 ("solid" | "outline" | "ghost")
 *    - solid: 색상이 채워진 기본 스타일
 *    - outline: 테두리만 있는 스타일
 *    - ghost: 배경이 투명한 스타일
 * @prop {string} [$color="main"] - 버튼에 적용할 테마 색상 키값 ("main" | "point")
 * @prop {string} [$size="md"] - 버튼 크기 ("sm" | "md" | "lg")
 * @prop {string} [$round="md"] - 모서리 둥글기 정도 ("sm" | "md" | "lg" | "xl")
 */
export default function ButtonLink({ children, ...props }) {
 return (
  <Button as={Link} {...props}>
   {children}
  </Button>
 );
}
