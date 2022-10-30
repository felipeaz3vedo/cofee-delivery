import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton
} from "./styles";

export const CoffeeCartCard = () => {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="/cofffres/tradicional" alt="" />

        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <RegularText weight="700">R$ 9,90</RegularText>
    </CoffeeCartCardContainer>
  );
};
