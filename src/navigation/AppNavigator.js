import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CarbonCalculatorScreen from '../screens/CarbonCalculatorScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen 
				name="CarbonCalculator" 
				component={CarbonCalculatorScreen} 
				options={{ title: 'Carbon Footprint Calculator' }}
			/>
		</Stack.Navigator>
	);
};

export default AppNavigator;