import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SocialCard = () => {
    // Function to open the link
    const openLink = async (url) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`Don't know how to open URI: ${url}`);
        }
    };

    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>Work With Us</Text>
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialLink} onPress={() => openLink('https://wa.me/201029639056')}>
                    <Icon name="logo-whatsapp" size={30} color="#4267B2" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialLink} onPress={() => openLink('https://twitter.com/')}>
                    <Icon name="logo-twitter" size={30} color="#1DA1F2" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialLink} onPress={() => openLink('https://www.instagram.com/lowkey.marawan_/')}>
                    <Icon name="logo-instagram" size={30} color="#E1306C" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialLink} onPress={() => openLink('https://github.com/lwkymarawann')}>
                    <Icon name="logo-github" size={30} color="#000000" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
        marginVertical: 20,
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    socialLink: {
        padding: 10,
    },
});

export default SocialCard;
