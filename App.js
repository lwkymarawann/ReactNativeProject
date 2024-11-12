//This is the Protien App
import { useState } from "react";
import {
    View, Text, Modal, TextInput, StyleSheet,
    TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Linking, Image

} from "react-native";
import { styles, pickerSelectStyles } from "./components/styles";
import SocialCard from './components/SocialCard';
import RNPickerSelect from "react-native-picker-select";

export default function App() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModal2Visible, setIsModal2Visible] = useState(false);

    const [selectedFood, setSelectedFood] = useState("");
    const [pieces, setPieces] = useState("");
    const [protein, setProtein] = useState(null);
    const [totalProtein, setTotalProtein] = useState(0);
    const [proteinBreakdown, setProteinBreakdown] = useState([]);
    const [isProteinCalculated, setIsProteinCalculated] = useState(false);
    const [currentPage, setCurrentPage] = useState("home");



    const foodDatabase = [
        { label: "Chicken", value: "chicken", proteinPer100g: 27 },
        { label: "Beef", value: "beef", proteinPer100g: 26 },
        { label: "Fish", value: "fish", proteinPer100g: 22 },
        { label: "Egg", value: "egg", proteinPer100g: 13 },
        { label: "Tofu", value: "tofu", proteinPer100g: 8 },
        { label: "Lentils", value: "lentils", proteinPer100g: 9 },
        { label: "Almonds", value: "almonds", proteinPer100g: 21 },
    ];

    const calculateProtein = () => {
        const selectedFoodDetails = foodDatabase.find(food => food.value === selectedFood);
        Keyboard.dismiss();
        setPieces("");

        if (selectedFoodDetails && pieces) {
            const proteinPer100g = selectedFoodDetails.proteinPer100g;
            const pieceCount = parseFloat(pieces) || 0;
            const totalProteinForThisFood = pieceCount * proteinPer100g;
            setProtein(totalProteinForThisFood);
            setTotalProtein(totalProtein + totalProteinForThisFood);
            setProteinBreakdown(prev => [...prev, { food: selectedFoodDetails.label, protein: totalProteinForThisFood }]);
            setIsProteinCalculated(true);
        } else {
            alert("Please select a food and enter the number of pieces.");
        }
    };

    const resetDay = () => {
        setSelectedFood("");
        setPieces("");
        setProtein(null);
        setTotalProtein(0);
        setProteinBreakdown([]);
        setIsProteinCalculated(false);
    };

    const goToContactPage = () => setCurrentPage("contact");
    const goToHomePage = () => setCurrentPage("home");

    const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error("Failed to open link:", err));
    };
    const home = () => {
      if(currentPage == "home"){
          setIsModal2Visible();
      }
      else{
          goToHomePage();
      }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                {/* Navigation Bar */}
                {currentPage === "home" &&
                <View style={styles.navbar}>
                    <TouchableOpacity onPress={home}>
                        <Image source={require("./assets/DevineLogo-removebg-preview.png")} style={styles.companyName} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToContactPage} style={styles.navButton}>
                        <Text style={styles.navButtonText}>Contact Us</Text>
                    </TouchableOpacity>
                </View>
}
                {currentPage === "contact" &&
                <View style={[styles.navbar, { justifyContent : "center", paddingLeft:50 }]}>
                    <TouchableOpacity onPress={home}>
                        <Image source={require("./assets/DevineLogo-removebg-preview.png")} style={styles.companyName} />
                    </TouchableOpacity>
                    
                </View>
}
                {/* Content Rendering Based on Current Page */}
                {currentPage === "home" ? (
                    <>
                        <TouchableOpacity style={styles.openButton} onPress={() => setIsModalVisible(true)}>
                            <Text style={styles.buttonText}>Add Food</Text>
                        </TouchableOpacity>
                        <Modal
                            visible={isModal2Visible}
                            onRequestClose={() => setIsModal2Visible(false)}
                            animationType="slide"
                            presentationStyle="formSheet"
                        >
                            <View style={styles.aboutUsContainer}>
                                <ScrollView>

                               
                                <Text style={styles.aboutUsHeader}>
                                    About Us
                                </Text>
                                <Text style={styles.aboutUsText}>

                                    Welcome to Devine, where code meets creativity and innovation fuels every keystroke. Founded by a visionary student with a passion for software development, our company is a testament to the future of tech, driven by ambition and expertise. We specialize in crafting cutting-edge software solutions that blend functionality with flawless design.

                                    At Devine, we believe in pushing boundaries and exploring the limitless possibilities that technology offers. Whether you're a startup in need of a digital breakthrough or an established brand seeking next-level innovation, we're here to build, optimize, and transform.
                                    We are a software development company driven by passion and innovation. Our team of
                                    aspiring students is dedicated to crafting cutting-edge digital solutions to meet
                                    the challenges of tomorrow. With a focus on creativity and quality, we bring visions
                                    to life, one code at a time.
                                    Join us as we redefine development with a fresh, youthful perspective—one line of code at a time.
                                    
                                </Text>
                                </ScrollView>
                            </View>

                        </Modal>
                        <Modal
                            visible={isModalVisible}
                            onRequestClose={() => setIsModalVisible(false)}
                            animationType="slide"
                            presentationStyle="formSheet"
                        >

                            <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
                                <View style={styles.exit}>
                                    <Text style={{ fontWeight: "bold", color: "black" }}>X</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                                <View style={styles.modalContent}>
                                    <Text style={styles.label}>Select Food</Text>
                                    <RNPickerSelect
                                        onValueChange={(value) => setSelectedFood(value)}
                                        items={foodDatabase.map(food => ({ label: food.label, value: food.value }))}
                                        placeholder={{ label: "Choose a food...", value: null }}
                                        style={pickerSelectStyles}
                                    />
                                    {selectedFood && (
                                        <View>
                                            <Text style={styles.selection}>Selected: {selectedFood}</Text>
                                            <TextInput
                                                style={styles.input}
                                                keyboardType="numeric"
                                                placeholder="Enter number of pieces"
                                                value={pieces}
                                                onChangeText={setPieces}
                                            />
                                        </View>
                                    )}
                                    <TouchableOpacity style={styles.calculateButton} onPress={calculateProtein}>
                                        <Text style={styles.buttonText}>Calculate</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.calculateButton, {backgroundColor: "red"}]} onPress={resetDay}>
                                        <Text style={styles.buttonText}>Reset Food</Text>
                                    </TouchableOpacity>

                                    {isProteinCalculated && (
                                        <View style={styles.afterCalcButtons}>
                                            <Text style={styles.resultText}>Current Protein: {protein} grams</Text>
                                            <TouchableOpacity style={styles.resetButton} onPress={resetDay}>
                                                <Text style={styles.buttonText}>Reset Day</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>

                        {totalProtein !== 0 && (
                            <View style={styles.result}>
                                <Text style={styles.resultText}>Total Protein for the Day: {totalProtein} grams</Text>
                            </View>
                        )}

                        {proteinBreakdown.length > 0 && (
                            <ScrollView style={styles.resultText}>
                                <Text style={styles.breakdownHeader}>Protein Breakdown:</Text>
                                {proteinBreakdown.map((item, index) => (
                                    <Text key={index} style={styles.breakdownItem}>
                                        {item.protein} grams from {item.food}
                                    </Text>
                                ))}
                            </ScrollView>
                        )}
                    </>
                ) : (
                    <View style={styles.contactPage}>
                        <SocialCard />
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}
