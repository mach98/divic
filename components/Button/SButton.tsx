import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import { styles } from './Button.style';

interface SButtonProps {
  title: string;
  onPress: () => void;
  fontColor?: string;
  buttonColor?: string;
  buttonTitleWeight?: 'normal' | 'bold' | '400' | '700';
  titleSize?: number;
  borderColor?: string;
  borderThickness?: number;
  borderRadius?: number;
  style?: ViewStyle;
}

const SButton: FC<SButtonProps> = ({
  title,
  onPress,
  fontColor,
  buttonColor,
  buttonTitleWeight,
  borderColor,
  titleSize,
  borderThickness,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.SButton,
        {
          backgroundColor: buttonColor,
          borderColor: borderColor,
          borderWidth: borderThickness,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.SButtonText,
          {
            color: fontColor,
            fontWeight: buttonTitleWeight,
            fontSize: titleSize,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SButton;
