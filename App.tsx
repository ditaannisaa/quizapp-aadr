import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';

// import { LoginPage, HomePage, AvatarPage } from './app/screens/index';

import { AuthProvider } from './app/context/AuthContext';
import { AppNav } from './app/navigation';
import { Provider } from 'react-redux';
import { store } from './app/store';

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <AuthProvider>
          <AppNav />
        </AuthProvider>
      </GluestackUIProvider>
    </Provider>
  );
}
