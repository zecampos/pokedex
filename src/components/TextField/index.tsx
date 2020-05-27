import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';
import SearchIcon from '../../assets/searchIcon.png';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const TextField: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon source={SearchIcon} />
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#747476"
      {...rest}
    />
  </Container>
);

export default TextField;
