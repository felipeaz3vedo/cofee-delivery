import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export const ConfirmationSection = () => {
  const { cartQuantity, cartItemsTotal } = useCart();

  const cartTotal = cartItemsTotal + DELIVERY_PRICE;

  const formattedItemsTotal = formatMoney(cartItemsTotal);

  const formatedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  const formattedCartTotal = formatMoney(cartTotal);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatedDeliveryPrice}</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} />
    </ConfirmationSectionContainer>
  );
};
