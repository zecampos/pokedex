import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../../global/styles/colors';

export const Container = styled.View`
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
export const IconButton = styled(RectButton)`
  padding: 5px;
`;

export const Icon = styled.Image``;
