import { View, Text, TextStyle } from 'react-native'
import React from 'react'
import { typography } from '@/constants/typography'
import { colors } from '@/constants/Colors'

type TypeProps = {
    variant?: keyof typeof typography;
    color?: keyof typeof colors;
    textAlign?: 'left' | 'center' | 'right';
    textDecorationLine?: 'none' | 'underline' | 'line-through';
    style?: TextStyle;
    children: React.ReactNode;
};

const Type = ({
    variant = 'body' ,
    color = 'black' , 
    textAlign ='left', 
    textDecorationLine = 'none', 
    style,
    children
}: TypeProps) => {
  return (
      <Text style={[
        typography[variant],
        {
            color: colors[color],
            textAlign,
            textDecorationLine
        },
        style
      ]}>
        {children}
        </Text>
  )
}

export default Type