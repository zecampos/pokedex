import styled from 'styled-components/native';

import colors from '../../global/styles/colors';

interface Props {
  background: string;
}

export const Container = styled.View<Props>`
  width: 100%;
  max-width: 100%;
  height: 115px;
  background: ${props => props.background};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 15px;

  /* margin-bottom: 8px;
  flex-direction: row;
  align-items: center;  */
`;

export const PaternBalls = styled.Image`
  left: 100px;
  top: 10px;
`;
export const PaternPokebola = styled.Image``;
export const Content = styled.View`
  position: absolute;
  width: 100%;
  max-width: 100%;
  height: 100%;
  z-index: 1;
`;
export const ContentInfo = styled.View`
  flex: 1;
  width: 100%;
  max-width: 100%;
  flex-direction: row;
  align-items: center;
`;
export const ContentLeft = styled.View`
  flex: 1;
  width: 100%;
  max-width: 100%;
  padding-left: 20px;
`;
export const ContentRight = styled.View`
  flex: 1;
  width: 100%;
  max-width: 100%;
  justify-content: flex-end;
`;
export const TextId = styled.Text`
  font-family: 'SFUIDisplay-Medium';
  font-size: 12px;
  line-height: 14px;
  color: rgba(23, 23, 27, 0.6);
`;
export const TextName = styled.Text`
  font-family: 'SFUIDisplay-Bold';
  text-transform: capitalize;
  font-size: 26px;
  line-height: 38px;
  color: #ffffff;
`;
export const ContentTypes = styled.View`
  flex-direction: row;
`;
export const ImageType = styled.Image`
  margin: 5px;
`;
export const ImageAvatar = styled.Image`
  height: 100%;
  width: 100%;
  bottom: 20px;
  align-self: center;

  z-index: 10;
`;
