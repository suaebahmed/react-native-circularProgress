import React,{ useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HalfCircle from './HalfCircle';
import Animated, { 
    multiply, interpolate, Extrapolate, 
    timing, Value,Easing, lessThan,debug } from 'react-native-reanimated';
import { } from 'react-native-gesture-handler'
// import { transformOrigin } from 'react-native-redash'
// transform : transfromOrigin(0,RADIUS/2,{rotate: rotateTop});

const PI = 3.1415;
const RADIUS = 100;

const Index = () => {
    const progress = new Value(0)
    useEffect(()=>{  
        timing(progress,{
            toValue: 1,
            duration: 5000,
            easing: Easing.inOut(Easing.ease)
        }).start();
    })

    const _2PI = multiply(progress,2*PI);
    const opacity = lessThan(_2PI,PI)

    const rotateTop = interpolate(_2PI,{
        inputRange: [PI,PI*2],
        outputRange: [0,PI],
        extrapolate: Extrapolate.CLAMP
    });

    return (
        <>
            <View style={{zIndex: 1}}>
                <HalfCircle color={'rgb(67, 158, 233)'}/>
                <Animated.View style={{
                    ...StyleSheet.absoluteFillObject,
                    transform:[
                        {translateY: RADIUS/2},
                        {rotate: _2PI},
                        {translateY: -RADIUS/2},
                    ],
                    opacity: opacity
                    // borderWidth: 0.5,
                    // borderColor: 'red'
                }}>
                    <HalfCircle color={'white'}/>
                </Animated.View>
            </View>
            <View style={{transform:[{rotate: '180deg'}]}}>
                <HalfCircle color={'rgb(67, 158, 233)'}/>
                <Animated.View style={{...StyleSheet.absoluteFillObject,
                    transform:[
                        {translateY: RADIUS/2},
                        {rotate: rotateTop},
                        {translateY: -RADIUS/2},
                    ],
                }}>
                    <HalfCircle color={'white'}/>
                </Animated.View>
            </View>
        </>
    )
};

export default Index;
