import styled, { css } from "styled-components";

interface QuantityInputContainerProps {
  size?: "medium" | "small";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors["base-button"]};

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 0.3rem 0.5rem;
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({
  type: "button"
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors["brand-purple"]};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }
  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;
