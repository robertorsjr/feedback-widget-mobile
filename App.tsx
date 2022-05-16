import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Widget from './src/components/WIdget';
import { theme } from './src/theme';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <Text>Carregando</Text>;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
    }}>
      <StatusBar 
        style="light" 
        backgroundColor='transparent'
        translucent
      />
      <Widget />
    </View>
  );
}
