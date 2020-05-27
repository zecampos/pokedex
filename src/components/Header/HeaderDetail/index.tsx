import React from 'react';

import { Container, IconButton, Icon } from './styles';
import BackIcon from '../../../assets/Back.png';
import { useNavigation } from '@react-navigation/native';

const HeaderDetail: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <IconButton onPress={() => navigation.goBack()}>
        <Icon source={BackIcon} />
      </IconButton>
    </Container>
  );
};

export default HeaderDetail;
