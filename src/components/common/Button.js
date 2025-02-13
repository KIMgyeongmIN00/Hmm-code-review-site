import styled, { css } from 'styled-components';

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
