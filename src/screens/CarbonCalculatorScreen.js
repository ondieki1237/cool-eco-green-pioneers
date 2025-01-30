import React, { useState } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';

const CarbonCalculatorScreen = () => {
	const [formData, setFormData] = useState({
		transportation: {
			carKm: '',
			publicTransportKm: '',
			flightHours: '',
		},
		household: {
			electricityKwh: '',
			gasUsage: '',
			waterUsage: '',
		},
		lifestyle: {
			meatConsumption: '',
			recyclingPercentage: '',
		},
	});

	const [results, setResults] = useState(null);

	const calculateFootprint = () => {
		// Simple calculation example (you would want to use more accurate multipliers)
		const transportationFootprint = 
			(parseFloat(formData.transportation.carKm) || 0) * 0.2 +
			(parseFloat(formData.transportation.publicTransportKm) || 0) * 0.1 +
			(parseFloat(formData.transportation.flightHours) || 0) * 90;

		const householdFootprint =
			(parseFloat(formData.household.electricityKwh) || 0) * 0.5 +
			(parseFloat(formData.household.gasUsage) || 0) * 0.3 +
			(parseFloat(formData.household.waterUsage) || 0) * 0.1;

		const lifestyleFootprint =
			(parseFloat(formData.lifestyle.meatConsumption) || 0) * 6.0 -
			(parseFloat(formData.lifestyle.recyclingPercentage) || 0) * 0.5;

		const totalFootprint = transportationFootprint + householdFootprint + lifestyleFootprint;

		setResults({
			total: totalFootprint.toFixed(2),
			breakdown: {
				transportation: transportationFootprint.toFixed(2),
				household: householdFootprint.toFixed(2),
				lifestyle: lifestyleFootprint.toFixed(2),
			},
		});
	};

	const renderInputSection = (title, fields, category) => (
		<View style={styles.section}>
			<Text style={styles.sectionTitle}>{title}</Text>
			{Object.keys(fields).map((field) => (
				<View key={field} style={styles.inputContainer}>
					<Text style={styles.inputLabel}>
						{field.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^\w/, c => c.toUpperCase())}
					</Text>
					<TextInput
						style={styles.input}
						keyboardType="numeric"
						value={formData[category][field]}
						onChangeText={(value) => 
							setFormData({
								...formData,
								[category]: {
									...formData[category],
									[field]: value,
								},
							})
						}
						placeholder="0"
					/>
				</View>
			))}
		</View>
	);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Carbon Footprint Calculator</Text>
				<Text style={styles.headerSubtitle}>Track your environmental impact</Text>
			</View>

			{renderInputSection('Transportation', formData.transportation, 'transportation')}
			{renderInputSection('Household', formData.household, 'household')}
			{renderInputSection('Lifestyle', formData.lifestyle, 'lifestyle')}

			<TouchableOpacity style={styles.calculateButton} onPress={calculateFootprint}>
				<Text style={styles.calculateButtonText}>Calculate Footprint</Text>
			</TouchableOpacity>

			{results && (
				<View style={styles.resultsContainer}>
					<Text style={styles.resultsTitle}>Your Carbon Footprint</Text>
					<Text style={styles.totalFootprint}>{results.total} kg CO2e</Text>
					
					<View style={styles.breakdownContainer}>
						<Text style={styles.breakdownTitle}>Breakdown:</Text>
						<View style={styles.breakdownItem}>
							<Text>Transportation:</Text>
							<Text>{results.breakdown.transportation} kg CO2e</Text>
						</View>
						<View style={styles.breakdownItem}>
							<Text>Household:</Text>
							<Text>{results.breakdown.household} kg CO2e</Text>
						</View>
						<View style={styles.breakdownItem}>
							<Text>Lifestyle:</Text>
							<Text>{results.breakdown.lifestyle} kg CO2e</Text>
						</View>
					</View>
				</View>
			)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	header: {
		backgroundColor: colors.primary,
		padding: 20,
		alignItems: 'center',
	},
	headerTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: colors.white,
	},
	headerSubtitle: {
		fontSize: 16,
		color: colors.white,
		opacity: 0.8,
	},
	section: {
		padding: 20,
		backgroundColor: colors.white,
		marginBottom: 10,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 15,
		color: colors.text,
	},
	inputContainer: {
		marginBottom: 15,
	},
	inputLabel: {
		fontSize: 16,
		marginBottom: 5,
		color: colors.grey.dark,
	},
	input: {
		borderWidth: 1,
		borderColor: colors.grey.light,
		borderRadius: 8,
		padding: 12,
		fontSize: 16,
	},
	calculateButton: {
		backgroundColor: colors.primary,
		margin: 20,
		padding: 15,
		borderRadius: 8,
		alignItems: 'center',
	},
	calculateButtonText: {
		color: colors.white,
		fontSize: 18,
		fontWeight: 'bold',
	},
	resultsContainer: {
		margin: 20,
		padding: 20,
		backgroundColor: colors.white,
		borderRadius: 10,
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	resultsTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
		color: colors.text,
	},
	totalFootprint: {
		fontSize: 32,
		fontWeight: 'bold',
		textAlign: 'center',
		color: colors.primary,
		marginBottom: 20,
	},
	breakdownContainer: {
		borderTopWidth: 1,
		borderTopColor: colors.grey.light,
		paddingTop: 15,
	},
	breakdownTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 10,
		color: colors.text,
	},
	breakdownItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
});

export default CarbonCalculatorScreen;