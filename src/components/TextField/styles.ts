import styled from 'styled-components/native';

import colors from '../../global/styles/colors';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background: #f2f2f2;
  border-radius: 10px;
  padding: 0 16px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #747476;
  font-family: 'SFProDisplay-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

export const Icon = styled.Image`
  height: 16px;
  width: 16px;
  margin-right: 16px;
`;
