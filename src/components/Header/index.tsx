import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer
} from './styles';
import coffeeLogoImg from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogoImg} alt="Logomarca do Coffee Delivery" />

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Natal, RN
          </HeaderButton>

          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
};
