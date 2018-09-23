import { createStackNavigator } from 'react-navigation';
import screens from './screens';

import LibraryScreen from '../screens/LibraryScreen';
import PlayVideoScreen from '../screens/PlayVideoScreen';

const routes = {
  [screens.Library]: {
    screen: LibraryScreen,
  },
  [screens.PlayVideo]: {
    screen: PlayVideoScreen,
  },
};

const LibraryNavigator = createStackNavigator(routes);

export default LibraryNavigator;
