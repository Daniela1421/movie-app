import React from 'react';
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const Fade = () => {
  const {fadeIn, fadeOut, opacity} = useFade(); 

  return (
    <View style={{
      flex: 1, 
      backgroundColor: 'grey', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <Animated.View
        style={{
          backgroundColor: '#084f6a', 
          width: 150, 
          height: 150, 
          borderColor: 'white', 
          borderWidth: 10, 
          marginBottom: 10,
          opacity, 
        }} 
      />

      <Button
        title='FadeIn'
        onPress={()=> fadeIn}
      />

      
      <Button
        title='FadeOut'
        onPress={()=> fadeOut}
      />
    </View>
  )
}
