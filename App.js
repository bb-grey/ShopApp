import React from 'react';
import {Provider} from 'react-redux';

import RootNavigator from './src/routes/RootNavigator';
import store from './src/store/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
