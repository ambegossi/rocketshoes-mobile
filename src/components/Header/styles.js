import styled from 'styled-components/native';
import colors from '../../styles/colors';

import logo from '../../assets/logo.png';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: ${colors.dark};
  height: 80px;
`;

export const Logo = styled.TouchableWithoutFeedback`
  width: 220px;
`;

export const LogoImage = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 220px;
  height: 30px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
