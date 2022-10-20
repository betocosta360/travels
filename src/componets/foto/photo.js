import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'


const Photo = ({file, count}) => {
  const [like, setLike] = useState(count)

  const increment = () => {
    setLike(like + 1)
  }

  return (
    <View style={styles.container}>
      
      <Image style={styles.image} source={file}/>
      <TouchableOpacity onPress={increment}>
        <Text>LIKE {like}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 35
  },
  image:{
    height: 180,
    width: 300,
    marginBottom:10
  }
})

export default Photo