import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import {
  AddCartWrapper,
  CardFooter,
  CofeeCardContainer,
  CoffeeName,
  Description,
  Tags
} from "./styles";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export const CofeeCard = ({ coffee }: CoffeeProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(previous => previous + 1);
  };

  const handleDecrease = () => {
    setQuantity(previous => previous - 1);
  };

  const { addCoffeeToCart } = useCart();

  const handleToCart = () => {
    const coffeeToAdd = {
      ...coffee,
      quantity
    };
    addCoffeeToCart(coffeeToAdd);
  };

  const formatedPrice = formatMoney(coffee.price);

  return (
    <CofeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <Tags>
        {coffee.tags.map(tag => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <CoffeeName>{coffee.name}</CoffeeName>

      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formatedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CofeeCardContainer>
  );
};
