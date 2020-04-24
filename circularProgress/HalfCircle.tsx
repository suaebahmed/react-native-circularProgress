import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface HalfCircleProps{
    color: String,
}
const RADIUS = 100;

const HalfCircle = ({color}: HalfCircleProps) => {

    return (
        <View style={{
            height: RADIUS,
            width: RADIUS * 2,
            overflow: 'hidden'
        }}>
            <View style={{
                backgroundColor: `${color}`,
                height: RADIUS * 2,
                width: RADIUS*2,
                borderRadius: RADIUS,
                }} />
        </View>
    )
}

export default HalfCircle;

const styles = StyleSheet.create({})
