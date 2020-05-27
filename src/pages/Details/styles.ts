import styled from 'styled-components/native';

import colors from '../../global/styles/colors';
interface Props {
  background: string;
  color?: string;
}
interface PropsColor {
  color: string;
}

export const Container = styled.View<Props>`
  flex: 1;
  background: ${props => props.background};
`;

export const ContentTitle = styled.View`
  width: 100%;
  top: 50px;
  align-items: center;
`;

export const ImageBall = styled.Image`
  /* width: 100%; */
  position: relative;
  z-index: 1;
`;
export const TitleAbout = styled.Text`
  font-family: 'SFUIDisplay-Bold';
  font-size: 18px;
  line-height: 19px;
  color: #ffffff;
  margin-top: 5px;
  margin-bottom: 5px;
  position: absolute;
  top: 5px;
`;
export const ContentAbout = styled.View`
  background: #ffffff;
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  position: relative;
  z-index: 2;
  padding-right: 40px;
  padding-left: 40px;
`;
export const TitleBaseStats = styled.Text<PropsColor>`
  font-family: 'SFUIDisplay-Bold';
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.color};
  margin-top: 30px;
  margin-bottom: 20px;
`;
export const ListScores = styled.View`
  flex-direction: row;
  width: 100%;
  height: 35px;
`;
export const ContentScores = styled.View`
  width: 50%;
`;
export const TextStatName = styled.Text`
  font-family: 'SFUIDisplay-Medium';
  font-size: 14px;
  line-height: 14px;
  color: #17171b;
  text-transform: capitalize;
`;
export const TextScoreNumber = styled.Text`
  font-family: 'SFUIDisplay-Medium';
  font-size: 16px;
  line-height: 19px;
  color: #747476;
  text-align: right;
`;
