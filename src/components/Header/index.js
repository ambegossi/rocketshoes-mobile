import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  LogoImage,
  BasketContainer,
  ItemCount,
} from './styles';

import NavigationService from '../../services/navigation';

function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo onPress={() => NavigationService.navigate('Main')}>
        <LogoImage />
      </Logo>
      <BasketContainer onPress={() => NavigationService.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>{cartSize || 0}</ItemCount>
      </BasketContainer>
    </Container>
  );
}

export default Header;
