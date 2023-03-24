import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import Onboarding from '../../components/Onboarding';
import Item_herbal from '../../components/Item_herbal';
import BottomNav from '../../components/BottomNav';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <TextInput style={styles.search} placeholder="What are you looking for?" />
                <Text style={styles.main_title}>Daily herbal's story</Text>
                <View style={styles.slides}>
                    <Onboarding />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.item_title}>
                    Our's herbal
                </Text>
                <View style={styles.item_wrap}>
                    <Item_herbal
                        name='Culinary'
                        img={require("../../assets/item_images/rec1.jpg")}
                    />
                    <Item_herbal
                        name="Ritual"
                        img={require("../../assets/item_images/rec5.jpg")}
                    />
                    <Item_herbal
                        name="Teas"
                        img={require("../../assets/item_images/rec2.jpg")}
                    />
                    <Item_herbal
                        name="Cosmetics"
                        img={require("../../assets/item_images/rec4.jpg")}
                    />
                    <Item_herbal
                        name="Medicine"
                        img={require("../../assets/item_images/rec3.jpg")}
                    />
                    <Item_herbal
                        name="Other"
                        img={require("../../assets/item_images/rec6.jpg")}
                    />
                </View>
            </View>
            <View style={styles.bottomNav}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    wrap: {
        width: `100%`,
        height: `40%`,
        backgroundColor: '#1C7C27',
        display: 'flex',
        alignItems: 'center',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    search: {
        width: `90%`,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 6,
        paddingLeft: 15,
        marginTop: `11%`,
    },
    main_title: {
        font: 'Inter',
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
        letterSpacing: '0.01em',
        width: `90%`,
        marginTop: 16,
    },
    slides: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    content: {
        marginTop: 100,
        marginHorizontal: 20,
    },
    item_title: {
        font: 'Inter',
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
        marginBottom: 5,
    },
    item_wrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },

})