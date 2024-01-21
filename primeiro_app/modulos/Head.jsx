import { Dimensions, StyleSheet } from "react-native";
import {Image, TouchableOpacity, Text, View} from 'react-native';
import IconPerfil from '../components/IconPerfil';
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";


const { width, height } = Dimensions.get('window');

export default function Perfil(){
    const [foto, setFoto] = useState(null);

    async function fotoPerfil(){
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if ( !result.canceled ) {
            setFoto(result.assets[0]);
        }
    }
    

    return(
        <View style={styles.container}>
            <TouchableOpacity  onPress={fotoPerfil} style={styles.perfil}>
                {foto && (<Image source={{ uri: foto.uri }}  style={styles.perfil}/>)}
            </TouchableOpacity>
            
            <IconPerfil  name="pencil" size={20}/>
            
            <Text style={styles.titulo}>Galeria</Text>

            <Text style={styles.texto}>*Toque em uma imagem para compartilhar*</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"center",
        height: height/2.3,
        width: width,
        backgroundColor:"#D39D80"
    },
    perfil:{
        width: width/2.5,
        height: width/2.5,
        borderRadius: 100,
        backgroundColor: "#ebd6bc",
    },
    imagemPerfil:{
        minWidth:width/3,
        minHeight:width/3,
    },
    titulo:{
        fontSize: 24,
        marginTop: 0,
        paddingTop: 0
    },
    texto:{
        fontSize:12
    }
})