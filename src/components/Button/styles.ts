import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../global/styles/colors';

interface ButtonProps {
  primary?: boolean;
}
export const Container = styled(RectButton)<ButtonProps>`
  background: ${props => (!props.primary || undefined ? '#F2F2F2' : '#ea5d60')};
  border-radius: 10px;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: 'SFProDisplay-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${props =>
    !props.primary || undefined ? '#747476' : colors.textwhite};
`;
