import React from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';

const HomeScreen = ({ navigation }) => {
	const renderFeatureCard = (title, icon, screen) => (
		<TouchableOpacity 
			style={styles.featureCard}
			onPress={() => navigation.navigate(screen)}
		>
			<Ionicons name={icon} size={32} color={colors.primary} />
			<Text style={styles.featureTitle}>{title}</Text>
		</TouchableOpacity>
	);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.welcomeText}>Welcome back!</Text>
				<Text style={styles.subText}>Track your eco-friendly journey</Text>
			</View>

			<View style={styles.statsContainer}>
				<View style={styles.statCard}>
					<Text style={styles.statNumber}>245</Text>
					<Text style={styles.statLabel}>kg CO2 saved</Text>
				</View>
				<View style={styles.statCard}>
					<Text style={styles.statNumber}>12</Text>
					<Text style={styles.statLabel}>Activities</Text>
				</View>
			</View>

			<Text style={styles.sectionTitle}>Quick Actions</Text>
			<View style={styles.featuresGrid}>
				{renderFeatureCard('Calculator', 'calculator-outline', 'Calculator')}
				{renderFeatureCard('Recycling', 'map-outline', 'Recycling')}
				{renderFeatureCard('Education', 'book-outline', 'Education')}
				{renderFeatureCard('Profile', 'person-outline', 'Profile')}
			</View>

			<Text style={styles.sectionTitle}>Today's Tip</Text>
			<View style={styles.tipCard}>
				<Ionicons name="bulb-outline" size={24} color={colors.primary} />
				<Text style={styles.tipText}>
					Using public transport instead of driving can save up to 2.6 kg of CO2 per trip
				</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	header: {
		padding: 20,
		backgroundColor: colors.primary,
	},
	welcomeText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: colors.white,
	},
	subText: {
		fontSize: 16,
		color: colors.white,
		opacity: 0.8,
	},
	statsContainer: {
		flexDirection: 'row',
		padding: 20,
		justifyContent: 'space-between',
	},
	statCard: {
		flex: 1,
		backgroundColor: colors.white,
		margin: 5,
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	statNumber: {
		fontSize: 24,
		fontWeight: 'bold',
		color: colors.primary,
	},
	statLabel: {
		fontSize: 14,
		color: colors.grey.dark,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		padding: 20,
		color: colors.text,
	},
	featuresGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 10,
	},
	featureCard: {
		width: '45%',
		backgroundColor: colors.white,
		margin: '2.5%',
		padding: 20,
		borderRadius: 10,
		alignItems: 'center',
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	featureTitle: {
		marginTop: 10,
		fontSize: 16,
		color: colors.text,
	},
	tipCard: {
		backgroundColor: colors.white,
		margin: 20,
		padding: 20,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	tipText: {
		flex: 1,
		marginLeft: 10,
		fontSize: 16,
		color: colors.text,
	},
});

export default HomeScreen;