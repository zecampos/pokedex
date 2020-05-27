import React from 'react';

import { Container, IconButton, Icon } from './styles';
import GenerationIcon from '../../../assets/generationICon.png';
import sortIcon from '../../../assets/sortIcon.png';
import filterIcon from '../../../assets/filterIcon.png';
const HeaderHome: React.FC = () => (
  <Container>
    <IconButton>
      <Icon source={GenerationIcon} />
    </IconButton>
    <IconButton>
      <Icon source={sortIcon} />
    </IconButton>
    <IconButton>
      <Icon source={filterIcon} />
    </IconButton>
  </Container>
);

export default HeaderHome;
