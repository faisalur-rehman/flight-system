import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {Provider} from 'react-redux';
import {Routes} from './src/navigation/routes';
import store from './src/redux/store';
import {colors} from './src/utils/theme';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.white}
      />
      <Routes />
    </Provider>
  );
}

export default App;
