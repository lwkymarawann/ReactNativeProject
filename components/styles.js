// styles.js
import { StyleSheet } from 'react-native';

// Main styles for the application
const pickerSelectStyles = {
    inputIOS: {
        fontSize: 18,
        padding: 12,
        borderWidth: 1,
        borderColor: '#7D7D7D',
        borderRadius: 10,
        backgroundColor: "#F7F7F7",
    },
    inputAndroid: {
        fontSize: 18,
        padding: 12,
        borderWidth: 1,
        borderColor: '#7D7D7D',
        borderRadius: 10,
        backgroundColor: "#F7F7F7",
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#E8EAF6", // Light background for better contrast
    },
    aboutUsContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#F9F9F9', // Light background for a clean look
    },
    aboutUsText: {
        paddingRight: 20,
        fontSize: 20, // Slightly larger font size for elegance
        lineHeight: 30, // Increased line height for better readability
        color: '#333', // Soft dark color for text
        fontFamily: 'Georgia', // Elegant serif font for a classic look
        textAlign: 'justify', // Neatly align the text
        marginVertical: 15, // Space between the paragraphs
    },
    aboutUsHeader: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#B59410', // Goldish color for an elegant feel
        fontFamily: 'Georgia', // Using the same elegant font
        marginBottom: 10,
        textAlign: 'center',
    },
    navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        backgroundColor: "white", // Deep purple
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    companyName: {
        color: "#FFFFFF",
        marginLeft: -30,
        width: 80,
        resizeMode:"contain",
        height: 50,
        fontWeight: "bold",
    },
    navButton: {
        backgroundColor: "#673AB7",
        padding: 10,
        borderRadius: 8,
    },
    navButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
    },
    openButton: {
        backgroundColor: "#512DA8",
        padding: 18,
        borderRadius: 12,
        alignItems: "center",
        marginVertical: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 6,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
    },
    modalContent: {
        flex: 1,
        padding: 25,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
    },
    label: {
        fontSize: 22,
        marginBottom: 15,
        color: "#333",
        fontWeight: "bold",
    },
    selection: {
        fontSize: 18,
        marginVertical: 10,
        color: "#666",
    },
    input: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        borderRadius: 10,
        padding: 12,
        marginBottom: 20,
        fontSize: 16,
    },
    calculateButton: {
        backgroundColor: "#388E3C", // Green for action buttons
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    result: {
        marginTop: 30,
        alignItems: "center",
    },
    resultText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    contactPage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    contactHeader: {
        fontSize: 26,
        marginBottom: 15,
        fontWeight: "bold",
        color: "#B59410",
    },
    contactText: {
        fontSize: 16,
        marginVertical: 5,
        color: "#333",
    },
    homeButton: {
        backgroundColor: "#B59410",
        padding: 12,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
    },
    homeButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
    },
    exit: {
        backgroundColor: "#E53935", // Red for close button
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 20,
        right: 20,
        borderRadius: 15,
        borderColor: "#333",
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 6,
        zIndex: 3,
    },
    breakdownHeader: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
        textAlign: "center",
    },
    breakdownItem: {
        fontSize: 18,
        color: "#666",
        marginVertical: 5,
        textAlign: "center",
    },
});


// Export both styles and pickerSelectStyles
export { styles, pickerSelectStyles };
