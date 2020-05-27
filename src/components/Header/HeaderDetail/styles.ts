import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../../global/styles/colors';

export const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
`;
export const IconButton = styled(RectButton)`
  padding: 5px;
`;

export const Icon = styled.Image``;
