import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import colors from '../theme/colors';

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		// TODO: Implement login logic with backend
		console.log('Login attempted');
	};

	return (
		<KeyboardAvoidingView 
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<View style={styles.logoContainer}>
				<Image
					source={require('../assets/logo.png')}
					style={styles.logo}
					resizeMode="contain"
				/>
				<Text style={styles.title}>EcoTrack</Text>
			</View>

			<View style={styles.formContainer}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					value={email}
					onChangeText={setEmail}
					keyboardType="email-address"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>

				<TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
					<Text style={styles.loginButtonText}>Login</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style={styles.signupLink}
					onPress={() => navigation.navigate('Signup')}
				>
					<Text style={styles.signupText}>
						Don't have an account? <Text style={styles.signupTextBold}>Sign up</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	logoContainer: {
		alignItems: 'center',
		marginTop: 60,
		marginBottom: 40,
	},
	logo: {
		width: 120,
		height: 120,
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		color: colors.primary,
		marginTop: 10,
	},
	formContainer: {
		paddingHorizontal: 20,
	},
	input: {
		backgroundColor: colors.grey.light,
		borderRadius: 8,
		padding: 15,
		marginBottom: 15,
		fontSize: 16,
	},
	loginButton: {
		backgroundColor: colors.primary,
		borderRadius: 8,
		padding: 15,
		alignItems: 'center',
		marginTop: 10,
	},
	loginButtonText: {
		color: colors.white,
		fontSize: 18,
		fontWeight: 'bold',
	},
	signupLink: {
		marginTop: 20,
		alignItems: 'center',
	},
	signupText: {
		fontSize: 16,
		color: colors.text,
	},
	signupTextBold: {
		color: colors.primary,
		fontWeight: 'bold',
	},
});

export default LoginScreen;