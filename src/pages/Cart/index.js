import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';

import {
  Body,
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart({ navigation, products }) {
  return (
    <Body>
      <Container>
        {0 ? (
          <>
            <Products>
              {products.map(product => (
                <Product key={product.id}>
                  <ProductInfo>
                    <ProductImage source={{ uri: product.image }} />
                  </ProductInfo>
                </Product>
              ))}
            </Products>
          </>
        ) : (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        )}
      </Container>
    </Body>
  );
}
