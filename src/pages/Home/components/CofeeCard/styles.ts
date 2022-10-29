import { size, transitions } from "polished";
import styled from "styled-components";
import { RegularText, TitleText } from "../../../../components/Typography";

export const CofeeCardContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 0.375rem 2.25rem;
  padding: 0 1.25rem 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-block: 1rem 1.25rem;
  flex-wrap: wrap;

  span {
    background-color: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`;

export const CoffeeName = styled(TitleText).attrs({
  size: "s",
  color: "subtitle",
  weight: "700"
})`
  margin-bottom: 0.5rem;
`;

export const Description = styled(RegularText).attrs({
  size: "s",
  color: "label"
})`
  margin-bottom: 2rem;
`;
