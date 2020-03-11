import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  LogoImage,
  BasketContainer,
  ItemCount,
} from './styles';

import NavigationService from '../../services/navigation';

function Header({ navigation, cartSize }) {
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

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
