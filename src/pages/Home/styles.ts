import styled from 'styled-components/native';

import colors from '../../global/styles/colors';

export const Container = styled.View`
  flex: 1;
`;
export const ImageBackground = styled.Image`
  top: -10px;
  position: relative;
`;
export const Content = styled.View`
  flex: 1;
  position: absolute;
  margin-right: 30px;
  margin-left: 30px;
`;

export const Title = styled.Text`
  font-family: 'SFUIDisplay-Bold';
  font-size: 32px;
  line-height: 38px;
  color: ${colors.textBlack};
  text-align: left;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  font-family: 'SFProDisplay-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.textGrey};
  margin-bottom: 25px;
`;
