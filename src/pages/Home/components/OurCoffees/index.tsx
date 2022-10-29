import { TitleText } from "../../../../components/Typography";
import { CofeeCard } from "../CofeeCard";
import { CoffeeList, OurCoffesContainer } from "./styles";

export const OurCoffees = () => {
  return (
    <OurCoffesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        <CofeeCard />
        <CofeeCard />
        <CofeeCard />
        <CofeeCard />
        <CofeeCard />
        <CofeeCard />
      </CoffeeList>
    </OurCoffesContainer>
  );
};
