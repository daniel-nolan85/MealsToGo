import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const FadeInView = ({ duration = 1500, ...props }) => {
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  return (
    <Animated.View style={{ ...props.style, opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
};
