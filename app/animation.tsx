import React, { ReactNode, useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

interface AnimationProps {
    children: ReactNode;
}

const Animation = ({ children }: AnimationProps) => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(animatedValue, {
                toValue: 5,
                duration: 600,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }),
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 500,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }),
        ]).start();
    }, [animatedValue]);

    const translateX = animatedValue.interpolate({
        inputRange: [0, 2],
        outputRange: [0, 10],
    });
    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={{ transform: [{ translateX }] }}>
                {children}
            </Animated.View>
        </View>
    );
};

export default Animation;
