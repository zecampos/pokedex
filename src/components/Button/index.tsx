import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, primary, ...rest }) => (
  <Container primary={primary} {...rest}>
    <ButtonText primary={primary}>{children}</ButtonText>
  </Container>
);
Button.defaultProps = {
  primary: false,
};
export default Button;
