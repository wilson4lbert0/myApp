import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input({ placeholder, secureTextEntry, keyboardType, onChangeText }: TextInputProps) {
    return (
        <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        placeholderTextColor="#777777" 
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText} 
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 46,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 12,
    }
})