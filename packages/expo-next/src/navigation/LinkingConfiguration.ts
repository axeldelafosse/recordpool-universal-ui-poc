import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        initialRouteName: 'Home',
        screens: {
          Home: {
            screens: {
              Home: 'home'
            }
          },
          Crate: {
            screens: {
              Crate: 'crate'
            }
          },
          Playlists: {
            screens: {
              Playlists: 'playlists'
            }
          },
          Profile: {
            screens: {
              Profile: 'profile'
            }
          }
        }
      },
      NotFound: '*'
    }
  }
};
