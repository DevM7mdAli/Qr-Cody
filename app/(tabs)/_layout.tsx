import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function RootLayout() {
  const size = 30

  return <Tabs screenOptions={{
    tabBarActiveTintColor: 'white',
    tabBarStyle: { backgroundColor: '#111117' },
    tabBarHideOnKeyboard: true, 
    tabBarShowLabel: false,
    headerShown: false
  }}>
    <Tabs.Screen 
    name="index"
    options={{
      tabBarIcon: ({ color, focused }) => (
        <FontAwesome
          name="qrcode"
          size={size}
          variant={focused ? "Bold" : "Linear"}
          color={color}
        />
      ),
    }}
    />
    <Tabs.Screen 
    name="list"
    options={{
      tabBarIcon: ({ color, focused }) => (
        <FontAwesome5
          name="clipboard-list"
          size={size}
          variant={focused ? "Bold" : "Linear"}
          color={color}
        />
      ),
    }}
    />
  </Tabs>;
}