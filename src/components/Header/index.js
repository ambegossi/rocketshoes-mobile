import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <Logo />
      <BasketContainer>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>{cartSize || 0}</ItemCount>
      </BasketContainer>
    </Container>
  );
}

export default Header;
