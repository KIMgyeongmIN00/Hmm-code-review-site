import styled, { css } from 'styled-components';

/**
 * 다양한 스타일 변형, 크기, 모서리 둥글기를 지원하는 버튼 컴포넌트입니다.
 *
 * @component
 * @example
 * // 기본 솔리드 버튼
 * <Button>클릭하세요</Button>
 *
 * // 아웃라인 스타일의 큰 버튼
 * <Button $variant="outline" $size="lg">클릭하세요</Button>
 *
 * // 고스트 스타일에 커스텀 색상과 둥근 모서리를 적용한 버튼
 * <Button $variant="ghost" $color="secondary" $round="xl">클릭하세요</Button>
 *
 * @prop {string} [$variant="solid"] - 버튼 스타일 ("solid" | "outline" | "ghost")
 *    - solid: 색상이 채워진 기본 스타일
 *    - outline: 테두리만 있는 스타일
 *    - ghost: 배경이 투명한 스타일
 * @prop {string} [$color="main"] - 버튼에 적용할 테마 색상 키값
 * @prop {string} [$size="md"] - 버튼 크기 ("sm" | "md" | "lg")
 * @prop {string} [$round="md"] - 모서리 둥글기 정도 ("sm" | "md" | "lg" | "xl")
 */

const buttonStyles = {
  base: css`
    cursor: pointer;
    transition: all 0.2s;
    border: 2px solid transparent;
  `,
  variants: {
    solid: (color) => css`
      background: var(--color-${color});
      color: white;
      border-color: var(--color-${color});
      &:hover {
        background: var(--color-${color}-dark);
      }
      &:active {
        background: var(--color-${color});
      }
    `,
    outline: (color) => css`
      background: white;
      color: var(--color-${color});
      border-color: var(--color-${color});
      &:hover {
        background: var(--color-${color}-light);
      }
      &:active {
        background: var(--color-${color}-dark);
      }
    `,
    ghost: (color) => css`
      background: white;
      color: var(--color-${color});
      &:hover {
        background: var(--color-${color}-light);
        border-color: var(--color-${color}-light);
      }
      &:active {
        background: var(--color-${color}-dark);
        border-color: var(--color-${color}-dark);
      }
    `
  },
  sizes: {
    sm: css`
      padding: 4px 8px;
      font-size: 14px;
    `,
    md: css`
      padding: 4px 12px;
      font-size: 16px;
    `,
    lg: css`
      padding: 6px 16px;
      font-size: 20px;
    `
  },
  round: {
    sm: css`
      border-radius: var(--round-sm);
    `,
    md: css`
      border-radius: var(--round-md);
    `,
    lg: css`
      border-radius: var(--round-lg);
    `,
    xl: css`
      border-radius: var(--round-xl);
    `
  }
};

const Button = styled.button`
  ${buttonStyles.base}
  ${({ $variant = 'solid', $color = 'main' }) => buttonStyles.variants[$variant]($color)}
  ${({ $size = 'md' }) => buttonStyles.sizes[$size]}
  ${({ $round = 'md' }) => buttonStyles.round[$round]}
`;
export default Button;
