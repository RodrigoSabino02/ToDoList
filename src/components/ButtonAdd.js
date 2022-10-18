import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

export function ButtonAdd({ onPress }){
    return(
        <TouchableOpacity 
            style={styles.button} 
            onPress={onPress}
        >
            <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#3296d4',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20,
    },

    buttonText: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold'
    },



})