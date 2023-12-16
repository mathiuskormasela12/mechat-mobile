import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SafeAreaView = ({children, style}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        ...style
      }}
    >
      {children}
    </View>
  )
}
