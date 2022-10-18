import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native"

export function CardTask({ task }) {


    return(
        <TouchableOpacity style={styles.buttonTask} >
        <Text style={[styles.textTask]}>
          {task}
        </Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonTask: {
      backgroundColor: '#1F1E25',
      padding: 15,
      borderRadius: 20,
      marginTop: 10,
      alignItems: 'center'
    },

    textTask: {
      color: '#FFF',
      fontSize: 22,
      fontWeight: 'bold',
      
    }

})