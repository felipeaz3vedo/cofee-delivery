import { TitleText } from "../../../../components/Typography";
import { CofeeCard } from "../CofeeCard";
import { CoffeeList, OurCoffesContainer } from "./styles";
import { coffees } from "../../../../data/coffes";

export const OurCoffees = () => {
  return (
    <OurCoffesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map(coffee => (
          <CofeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffesContainer>
  );
};
