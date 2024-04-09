import styled, { css } from "styled-components";

const sizes = {
  
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 600;
  `,
  large: css`
    font-size: 2rem;
    padding: 1.2rem 2.4rem;
    font-weight: 600;
  `,
  larger: css`
    font-size: 2.4rem;
    padding: 1.2rem 2.4rem;
    font-weight: 600;

    @media (max-width: 640px) {
      font-size: 1.8rem;
      padding: 1rem 1.8rem;
    }
  `,
};

// This registers the different VARIATIONS (i.e., outlook) of buttons that might be available throughout the application
const variations = {
  light: css`
    color: var(--color-white);
    background-color: transparent;
    border: 1px solid var(--color-white);

    &:hover {
      color: var(--color-off-white);
      border: 1px solid var(--color-off-white);
    }
  `,

  neutral: css`
    color: var(--color-main);
    background-color: transparent;
    border: 1px solid var(--color-main-300);

    &:hover {
      color: var(--color-main-700);
      border: 1px solid var(--color-main-500);
    }
  `,

  underline: css`
    color: var(--color-main-200);
    background-color: transparent;
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover {
      color: var(--color-main-500);
    }
  `,

  primary: css`
    color: var(--color-white);
    background-color: var(--color-main-200);

    &:hover {
      background-color: var(--color-main-400);
    }
  `,

  outline: css`
    fill: var(--color-main-200);
    color: var(--color-main-200);
    background-color: var(--color-white);
    border-radius: var(--border-radius-tiny);

    &:hover {
      background-color: var(--color-white-200);
    }
  `,
};

// CREATE THE BUTTON COMPONENT
const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, background-color 0.2s ease;
  gap: 0.5rem;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

// set default props
Button.defaultProps = {
  size: "medium",
  variation: "primary",
};

export default Button;
