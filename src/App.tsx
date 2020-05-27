import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
