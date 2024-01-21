import { Dimensions, FlatList, StyleSheet } from "react-native";
import {Image, TouchableOpacity, Text, View} from 'react-native';
import IconButton from '../components/IconButton';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from "expo-image-manipulator";
import * as Sharing from 'expo-sharing';
import { useState } from "react";

const { width, height } = Dimensions.get('window');

export default function Body(){

    const [images, setImages] = useState([]);

    async function selecionaFoto() {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if ( !result.canceled ) {
            const newImage = {id: `${images.length + 1}`, image: {uri: result.assets[0].uri}};
            setImages([...images, newImage]);
        }
    }

    async function compartilhar(uri) {

        const imageProc = await ImageManipulator.manipulateAsync(uri);
        await Sharing.shareAsync(imageProc.uri);
    }


    return(
        <View style={styles.container}>
            <FlatList
                data={images}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => compartilhar(item.image.uri)}>
                        <Image source={{uri: item.image.uri}} style={styles.image} />
                    </TouchableOpacity>
                )}

            />
            <IconButton style={styles.button} name="photo" label="Escolha uma foto" onPress={selecionaFoto} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        width: width,
        gap:10,
        height:height/1.7,
        justifyContent:"flex-end",
        alignItems: "center",
        backgroundColor: "#edeae0"

    },
    image:{
        margin: "auto",
        borderWidth:2,
        borderColor:"#edeae0",
        borderRadius:5,
        width: width/2.3,
        height: width/2.3
    }
})