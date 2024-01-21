import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

export default function IconButton({ name, label, onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <FontAwesome
                    name={name}
                    size={28}
                    color="#000000"
                />
                <Text>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: width/2,
        height: 60,
    },
    button: {
        flex: 1,
        backgroundColor: '#ebd6bc',
        borderRadius: 20,
        borderWidth:3,
        borderColor: "#dfc29c",
        justifyContent: 'center',
        alignItems: 'center',
    },
});
