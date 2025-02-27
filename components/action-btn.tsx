import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { MotiPressable } from 'moti/interactions';
import { colors } from '@/constants/Colors';

type ActionBtnProps = {
    onPress?: ()=> void;
    backgroundColor?: keyof typeof colors | 'transparent';
    size?: number
    startIcon?: React.ReactNode;
    style?: any;
    children: React.ReactNode;
};

const Btn = ({
    onPress, 
    backgroundColor = 'white', 
    size = 52,
    style,
    children
}: ActionBtnProps) => {
  return (
    <MotiPressable 
    onPress={onPress} style={[
        {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        height: size,
        width: size,
        backgroundColor: backgroundColor === 'transparent' 
        ? 'transparent' :
        colors[backgroundColor],
        borderRadius: size,
        paddingHorizontal: size / 2,
    },
    style,
]}
    animate={useMemo(
        () => ({ hovered, pressed }) => {
          'worklet'

          return {
            scale: hovered || pressed ? 0.95 : 1,
          }
        },
        []
      )}
    >
        {children}
    </MotiPressable>
  );
};


export default Btn

const styles = StyleSheet.create({})